import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import {
  MESSAGES,
  DEFAULT_LOCALE,
  type Locale,
  SUPPORTED_LOCALES,
} from './i18n';

type Messages = Record<string, any>;

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => Promise<void>;
  t: (key: string, vars?: Record<string, string | number>) => string;
  messages: Messages;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [messages, setMessages] = useState<Messages>(MESSAGES[DEFAULT_LOCALE]);

  useEffect(() => {
    (async () => {
      // önce storage'dan oku
      const stored = await AsyncStorage.getItem('locale');
      if (stored && MESSAGES[stored as Locale]) {
        setLocaleState(stored as Locale);
        setMessages(MESSAGES[stored as Locale]);
        return;
      }

      // storage boşsa cihaz dilini al
      const locales = RNLocalize.getLocales();
      if (locales.length > 0) {
        const systemLang = locales[0].languageCode as Locale;
        if (SUPPORTED_LOCALES.includes(systemLang)) {
          setLocaleState(systemLang);
          setMessages(MESSAGES[systemLang]);
          return;
        }
      }

      // hiçbir şey bulunmazsa default
      setLocaleState(DEFAULT_LOCALE);
      setMessages(MESSAGES[DEFAULT_LOCALE]);
    })();
  }, []);

  const t = (key: string, vars?: Record<string, string | number>) => {
    const parts = key.split('.');
    let val: any = messages;
    for (const p of parts) {
      if (val == null) return key;
      val = val[p];
    }
    if (typeof val !== 'string') return key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        val = val.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return val;
  };

  const setLocale = async (newLocale: Locale) => {
    if (newLocale === locale) return;
    await AsyncStorage.setItem('locale', newLocale);
    setMessages(MESSAGES[newLocale] ?? MESSAGES[DEFAULT_LOCALE]);
    setLocaleState(newLocale);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
};

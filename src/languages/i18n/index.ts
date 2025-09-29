import tr from './tr.json';
import en from './en.json';

export const SUPPORTED_LOCALES = ['tr', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'tr';

export const MESSAGES: Record<Locale, Record<string, any>> = {
  tr,
  en,
};

export const LOCALE_LABELS: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
};

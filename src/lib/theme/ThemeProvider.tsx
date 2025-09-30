import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { Theme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkAppTheme, LightAppTheme } from './theme';

type ThemeContextType = {
  theme: Theme;
  mode: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // ilk açılışta kaydedilmiş mode'u oku
  useEffect(() => {
    (async () => {
      const savedMode = await AsyncStorage.getItem('theme_mode');
      if (savedMode === 'light' || savedMode === 'dark') {
        setMode(savedMode);
      }
    })();
  }, []);

  const toggleTheme = async () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    await AsyncStorage.setItem('theme_mode', newMode); // kaydet
  };

  const theme = mode === 'light' ? LightAppTheme : DarkAppTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('useThemeProvider must be used inside ThemeProvider');
  return ctx;
}

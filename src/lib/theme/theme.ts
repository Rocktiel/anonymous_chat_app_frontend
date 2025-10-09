import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

export const LightAppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007AFF',
    background: '#ffffff',
    card: '#f2f2f2',
    text: '#000000',
    border: '#e6e6e6',
    notification: '#ff453a',
  },
};

export const DarkAppTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#0A84FF',
    background: '#000000',
    card: '#1c1c1e',
    text: '#ffffff',
    border: '#272729',
    notification: '#ff453a',
  },
};

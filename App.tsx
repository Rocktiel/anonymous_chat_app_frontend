import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';

import { ThemeProvider, useThemeProvider } from './src/lib/theme/ThemeProvider';
import I18nProvider from './src/languages/I18nProvider';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/lib/AuthContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <I18nProvider>
          <AppNavigator />
          <Toast />
        </I18nProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

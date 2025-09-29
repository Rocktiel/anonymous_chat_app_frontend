import React from 'react';

import AppNavigator from './src/navigators/AppNavigator';
import I18nProvider from './src/languages/I18nProvider';

export default function App() {
  return (
    <I18nProvider>
      <AppNavigator />
    </I18nProvider>
  );
}

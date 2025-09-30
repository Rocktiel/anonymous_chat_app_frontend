// import React from 'react';

// import AppNavigator from './src/navigators/AppNavigator';
// import I18nProvider from './src/languages/I18nProvider';

// export default function App() {
//   return (
//     <I18nProvider>
//       <AppNavigator />
//     </I18nProvider>
//   );
// }
// App.tsx
import React from 'react';
import AppNavigator from './src/navigators/AppNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useThemeProvider } from './src/lib/theme/ThemeProvider';
import I18nProvider from './src/languages/I18nProvider';

function Root() {
  const { theme } = useThemeProvider();
  return (
    <I18nProvider>
      <AppNavigator />
    </I18nProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
}

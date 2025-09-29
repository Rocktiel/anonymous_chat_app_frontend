// import { Text } from 'react-native';

// function App() {
//   return <Text>Hello World</Text>;
// }

// export default App;
import React from 'react';
import { View, Text, Button } from 'react-native';
import I18nProvider, { useI18n } from './src/languages/I18nProvider';

function HomeScreen() {
  const { t, setLocale, locale } = useI18n();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('hello')}</Text>
      <Text>{t('welcome')}</Text>
      <Text>Current: {locale}</Text>
      <Button title="Switch to EN" onPress={() => setLocale('en')} />
      <Button title="Switch to TR" onPress={() => setLocale('tr')} />
    </View>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <HomeScreen />
    </I18nProvider>
  );
}

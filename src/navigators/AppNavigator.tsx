import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';
// import MainNavigator from './MainNavigator';
import { View, Text, Button } from 'react-native';
import { useI18n } from '../languages/I18nProvider';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingDone, setIsOnboardingDone] = useState<boolean | null>(
    null,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const onboard = await AsyncStorage.getItem('onboarding_done');
      console.log('onboard', onboard);
      setIsOnboardingDone(!!onboard);
      // setIsOnboardingDone(false);
      // örnek auth kontrolü
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
      // setIsLoggedIn(true);
    })();
  }, []);

  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem('onboarding_done', 'true');
    setIsOnboardingDone(true);
  };

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  // Splash screen göster
  if (isLoading) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  // Veri yükleniyor
  if (isOnboardingDone === null) return null;

  return (
    <NavigationContainer>
      {!isOnboardingDone ? (
        <OnboardingNavigator onComplete={handleOnboardingComplete} />
      ) : !isLoggedIn ? (
        <AuthNavigator />
      ) : (
        // <MainNavigator />
        <HomeScreen />
      )}
    </NavigationContainer>
  );
}

function HomeScreen() {
  const { t, setLocale, locale } = useI18n();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('hello')}</Text>
      <Text>{t('welcome')}</Text>
      <Text>Current: {locale}</Text>
      <Button title="Switch to EN" onPress={() => setLocale('en')} />
      <Button title="Switch to TR" onPress={() => setLocale('tr')} />
      <LanguageSwitcher />
    </View>
  );
}

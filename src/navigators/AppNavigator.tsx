import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

import { useThemeProvider } from '../lib/theme/ThemeProvider';
import SplashScreen from '../screens/SplashScreen';
import { useAuth } from '../lib/AuthContext';

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { theme } = useThemeProvider();
  const { isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingDone, setIsOnboardingDone] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const onboard = await AsyncStorage.getItem('onboarding_done');
      setIsOnboardingDone(!!onboard);
      setIsLoading(false);
    })();
  }, []);
  const handleSplashFinish = () => {
    setIsLoading(false);
  };
  if (isLoading) return <SplashScreen onFinish={handleSplashFinish} />;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboardingDone ? (
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        ) : !isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="Main" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

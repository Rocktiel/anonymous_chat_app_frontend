import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingsHome from '../screens/Settings/SettingsHome';

// import AccountScreen from '../screens/Settings/AccountScreen';
// import NotificationsScreen from '../screens/Settings/NotificationsScreen';
// import PrivacyScreen from '../screens/Settings/PrivacyScreen';
// import LanguageScreen from '../screens/Settings/LanguageScreen';
// import SubscriptionScreen from '../screens/Settings/SubscriptionScreen';
// import HelpScreen from '../screens/Settings/HelpScreen';

const Stack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{ title: 'Ayarlar' }}
      />
      {/* <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Hesap' }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Bildirimler' }}
      />
      <Stack.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{ title: 'Gizlilik' }}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{ title: 'Dil' }}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{ title: 'Abonelik' }}
      />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ title: 'Yardım & Destek' }}
      /> */}
    </Stack.Navigator>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import IncomingChatsScreen from '../screens/Chats/IncomingChatsScreen';
import OutgoingChatsScreen from '../screens/Chats/OutgoingChatsScreen';
import ActiveChatsScreen from '../screens/Chats/ActiveChatsScreen';
import { useI18n } from '../languages/I18nProvider';

import { useTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
import SettingsNavigator from './SettingsNavigator';

export type MainTabParamList = {
  ActiveChats: undefined;
  IncomingChats: undefined;
  OutgoingChats: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  const { t } = useI18n();

  const { colors } = useTheme();

  const getIconName = (routeName: keyof MainTabParamList): string => {
    switch (routeName) {
      case 'ActiveChats':
        return 'message-circle';
      case 'IncomingChats':
        return 'inbox';
      case 'OutgoingChats':
        return 'send';
      case 'Settings':
        return 'settings';
      default:
        return 'circle';
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.card,
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingBottom: Platform.OS === 'ios' ? 25 : 5,
          paddingTop: 5,
          borderTopWidth: 1,
        },
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name as keyof MainTabParamList);
          return <Feather name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#34C759',
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: Platform.OS === 'ios' ? -5 : 0,
        },
      })}
    >
      <Tab.Screen
        name="ActiveChats"
        component={ActiveChatsScreen}
        options={{ title: t('bottom_tabs.active') }}
      />
      <Tab.Screen
        name="IncomingChats"
        component={IncomingChatsScreen}
        options={{ title: t('bottom_tabs.incoming') }}
      />
      <Tab.Screen
        name="OutgoingChats"
        component={OutgoingChatsScreen}
        options={{ title: t('bottom_tabs.outgoing') }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{ title: t('bottom_tabs.settings'), headerShown: false }}
      />
    </Tab.Navigator>
  );
}

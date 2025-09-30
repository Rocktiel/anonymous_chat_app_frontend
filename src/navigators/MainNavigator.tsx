import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import IncomingChatsScreen from '../screens/Chats/IncomingChatsScreen'; // eski AnsweredChats
import OutgoingChatsScreen from '../screens/Chats/OutgoingChatsScreen'; // eski PendingChats
import SettingsHome from '../screens/Settings/SettingsHome';
import ActiveChatsScreen from '../screens/Chats/ActiveChatsScreen';
import { useI18n } from '../languages/I18nProvider';
export type MainTabParamList = {
  ActiveChats: undefined;
  IncomingChats: undefined;
  OutgoingChats: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  const { t } = useI18n();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ActiveChats':
              iconName = 'message-circle';
              break;
            case 'IncomingChats':
              iconName = 'inbox';
              break;
            case 'OutgoingChats':
              iconName = 'send';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
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
        component={SettingsHome}
        options={{ title: t('bottom_tabs.settings') }}
      />
    </Tab.Navigator>
  );
}

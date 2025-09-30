import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/AppNavigator'; // path doğru olmalı
import { useAuth } from '../../lib/AuthContext';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ActiveChatsScreen() {
  const { setLoggedIn } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  const handleLogOut = async () => {
    console.log('Logging out...');
    await AsyncStorage.removeItem('token');
    setLoggedIn(false); // ← RootStack otomatik Auth ekranına döner
  };

  return (
    <View>
      <Text>ActiveChatsScreen</Text>
      <Text onPress={handleLogOut}>Log Out</Text>
    </View>
  );
}

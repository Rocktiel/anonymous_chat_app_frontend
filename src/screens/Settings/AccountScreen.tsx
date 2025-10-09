import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
// Şifre değiştirme eklenecek.
export default function AccountScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Hesap Ayarları</Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        E-posta, şifre ve profil bilgilerinizi buradan yönetin.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
});

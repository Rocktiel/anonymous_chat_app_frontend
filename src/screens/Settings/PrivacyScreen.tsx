import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function PrivacyScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Gizlilik ve Güvenlik
      </Text>

      <TouchableOpacity
        style={[styles.linkItem, { borderBottomColor: colors.border }]}
      >
        <Text style={[styles.linkText, { color: colors.text }]}>
          Gizlilik Politikası (Web görünümü)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.linkItem, { borderBottomColor: colors.border }]}
      >
        <Text style={[styles.linkText, { color: colors.text }]}>
          Hizmet Şartları
        </Text>
      </TouchableOpacity>

      <Text style={[styles.infoText, { color: colors.text }]}>
        Verilerinizin nasıl kullanıldığı ve korunduğu hakkında bilgi edinin.
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
    marginBottom: 20,
  },
  linkItem: {
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoText: {
    marginTop: 20,
    fontSize: 14,
    opacity: 0.7,
  },
});

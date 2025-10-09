import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

export default function SubscriptionScreen() {
  const { colors } = useTheme();
  const isPremium = false;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Abonelik Yönetimi
      </Text>

      <View
        style={[
          styles.statusBox,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.statusTitle, { color: colors.text }]}>
          Mevcut Durum: {isPremium ? 'Premium' : 'Standart'}
        </Text>
        <Text style={[styles.statusDetail, { color: colors.text }]}>
          {isPremium
            ? 'Aboneliğiniz 15 gün sonra yenilenecektir.'
            : 'Premium özelliklere erişmek için yükseltme yapın.'}
        </Text>
      </View>

      {!isPremium && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#34C759' }]}
        >
          <Text style={styles.buttonText}>Premium'a Yükselt</Text>
        </TouchableOpacity>
      )}
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
  statusBox: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  statusDetail: {
    fontSize: 14,
    opacity: 0.8,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

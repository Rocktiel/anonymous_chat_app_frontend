import { View, Text, StyleSheet, Switch } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

// Bildirim ayarları ekranı
export default function NotificationsScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Bildirim Ayarları
      </Text>

      <View style={[styles.settingItem, { borderBottomColor: colors.border }]}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Yeni Mesaj Bildirimleri
        </Text>

        <Switch
          value={true} // Varsayılan değer
          trackColor={{ false: colors.border, true: '#34C759' }} // iOS yeşili
          thumbColor={colors.card}
        />
      </View>

      <Text style={[styles.infoText, { color: colors.text }]}>
        Uygulama seslerini ve titreşimlerini buradan yönetin.
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoText: {
    marginTop: 20,
    fontSize: 14,
    opacity: 0.7,
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HelpScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Yardım ve Destek
      </Text>

      <TouchableOpacity
        style={[styles.linkItem, { borderBottomColor: colors.border }]}
      >
        <Icon name="book-outline" size={20} color={colors.text} />
        <Text style={[styles.linkText, { color: colors.text }]}>
          Sıkça Sorulan Sorular (SSS)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.linkItem, { borderBottomColor: colors.border }]}
      >
        <Icon name="mail-outline" size={20} color={colors.text} />
        <Text style={[styles.linkText, { color: colors.text }]}>
          Bize Ulaşın
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.linkItem, { borderBottomColor: colors.border }]}
      >
        <Icon name="alert-circle-outline" size={20} color={colors.text} />
        <Text style={[styles.linkText, { color: colors.text }]}>
          Hata Bildir
        </Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});

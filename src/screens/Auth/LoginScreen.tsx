import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useThemeProvider } from '../../lib/theme/ThemeProvider';
import { useTheme } from '@react-navigation/native';

export default function LoginScreen() {
  const { mode, toggleTheme } = useThemeProvider();
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: colors.text }}>LoginScreen</Text>
      <Text style={styles.text && { color: colors.text }}>
        Aktif tema: {mode}
      </Text>
      <Button
        title={mode === 'light' ? "Dark Mode'a Geç" : "Light Mode'a Geç"}
        onPress={toggleTheme}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 },
});

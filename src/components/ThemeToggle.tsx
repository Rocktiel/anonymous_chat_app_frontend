import React from 'react';
import { TouchableOpacity, Animated, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useThemeProvider } from '../lib/theme/ThemeProvider';

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeProvider();

  return (
    <TouchableOpacity onPress={toggleTheme} activeOpacity={0.8}>
      <View
        style={[
          styles.container,
          { backgroundColor: mode === 'light' ? '#eee' : '#222' },
        ]}
      >
        <Icon
          name={mode === 'light' ? 'sun' : 'moon'}
          size={22}
          color={mode === 'light' ? '#FFA500' : '#FFD700'}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
});

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useThemeProvider } from '../../lib/theme/ThemeProvider';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import ThemeToggle from '../../components/ThemeToggle';
import { useI18n } from '../../languages/I18nProvider';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../lib/AuthContext';

export default function LoginScreen({ navigation }: any) {
  const { mode } = useThemeProvider();
  const { setLoggedIn } = useAuth();
  const { colors } = useTheme();
  const { t } = useI18n();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'test' && password === 'test') {
      await AsyncStorage.setItem('token', 'dummy_token');
      setLoggedIn(true); // ← Burada AppNavigator yeniden render olacak
      Toast.show({ type: 'success', text1: t('login.success_title') });
    } else {
      Toast.show({ type: 'error', text1: t('login.error_title') });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Üst bar - dil ve tema */}
      <View style={styles.topBar}>
        <LanguageSwitcher />
        <ThemeToggle />
      </View>

      {/* Başlık */}
      <Text style={[styles.title, { color: colors.text }]}>
        {t('login.title')}
      </Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>
        {t('login.desc')}
      </Text>

      {/* Form alanı */}
      <View style={styles.form}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder={t('login.username')}
          placeholderTextColor={mode === 'dark' ? '#aaa' : '#666'}
          style={[
            styles.input,
            {
              backgroundColor: colors.card,
              color: colors.text,
              borderColor: mode === 'dark' ? '#444' : '#ddd',
            },
          ]}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder={t('login.password')}
          placeholderTextColor={mode === 'dark' ? '#aaa' : '#666'}
          secureTextEntry
          style={[
            styles.input,
            {
              backgroundColor: colors.card,
              color: colors.text,
              borderColor: mode === 'dark' ? '#444' : '#ddd',
            },
          ]}
        />

        <TouchableOpacity
          style={[styles.loginBtn, { backgroundColor: colors.primary }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>{t('login.button')}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer links */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.link, { color: colors.primary }]}>
            {t('login.create_account')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={[styles.link, { color: colors.primary }]}>
            {t('login.forgot_password')}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  topBar: {
    position: 'absolute',
    top: 40,
    right: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.7,
  },
  form: { gap: 16 },
  input: {
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
  },
  loginBtn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    fontSize: 14,
    fontWeight: '500',
  },
});

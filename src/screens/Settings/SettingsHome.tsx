import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../lib/AuthContext';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useI18n } from '../../languages/I18nProvider';
import ThemeToggle from '../../components/ThemeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { StackNavigationProp } from '@react-navigation/stack';

interface SettingItemProps {
  title: string;
  onPress?: () => void;
  iconName: string;
  value?: string | React.ReactNode;
  isDestructive?: boolean;
  isToggle?: boolean;
}

const SettingListItem: React.FC<SettingItemProps> = ({
  title,
  onPress,
  iconName,
  value,
  isDestructive = false,
  isToggle = false,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.settingItem,
        {
          backgroundColor: colors.card,
          borderBottomColor: colors.border,
          borderTopColor: colors.border,
        },
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={[styles.iconBox, { backgroundColor: colors.notification }]}>
        <Icon
          name={iconName}
          size={18}
          color={isDestructive ? colors.background : colors.card}
        />
      </View>

      <Text
        style={[
          styles.itemTitle,
          {
            color: isDestructive ? '#FF3B30' : colors.text,
            marginLeft: 10,
          },
        ]}
      >
        {title}
      </Text>

      {!isToggle && (
        <View style={styles.rightContent}>
          {typeof value === 'string' ? (
            <Text style={[styles.itemValue, { color: colors.text }]}>
              {value}
            </Text>
          ) : (
            value
          )}

          {onPress && !isDestructive && (
            <Icon
              name="chevron-forward"
              size={20}
              color={colors.text}
              style={styles.chevron}
            />
          )}
        </View>
      )}
      {isToggle && value}
    </TouchableOpacity>
  );
};

export type SettingsStackParamList = {
  SettingsHome: undefined;
  Account: undefined;
  Notifications: undefined;
  Privacy: undefined;
  Subscription: undefined;
  Help: undefined;
};

type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  'SettingsHome'
>;

export default function SettingsHome() {
  const { setLoggedIn } = useAuth();
  const { colors } = useTheme();
  const { t } = useI18n(); // Çeviri için
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const handleLogOut = async () => {
    console.log('Logging out...');
    await AsyncStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headerTitle, { color: colors.text }]}>
        {t('settings.title')}
      </Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <SettingListItem
            title={t('settings.language')}
            iconName="language-outline"
            value={<LanguageSwitcher />}
            isToggle={true}
          />
          <SettingListItem
            title={t('settings.theme')}
            iconName="color-palette-outline"
            value={<ThemeToggle />}
            isToggle={true}
          />
        </View>

        <View style={styles.section}>
          <SettingListItem
            title={t('settings.account')}
            iconName="person-circle-outline"
            onPress={() => navigation.navigate('Account')}
          />
          <SettingListItem
            title={t('settings.notifications')}
            iconName="notifications-outline"
            onPress={() => navigation.navigate('Notifications')}
          />
        </View>

        <View style={styles.section}>
          <SettingListItem
            title={t('settings.help')}
            iconName="help-circle-outline"
            onPress={() => navigation.navigate('Help')}
          />
          <SettingListItem
            title={t('settings.privacy')}
            iconName="lock-closed-outline"
            onPress={() => navigation.navigate('Privacy')}
          />
          <SettingListItem
            title={t('settings.version')}
            iconName="information-circle-outline"
            value="1.0.0"
          />
        </View>

        <View style={styles.section}>
          <SettingListItem
            title={t('settings.subscription')}
            iconName="star-outline"
            onPress={() => navigation.navigate('Subscription')}
          />
        </View>

        <View style={styles.section}>
          <SettingListItem
            title={t('settings.logout')}
            iconName="log-out-outline"
            onPress={handleLogOut}
            isDestructive={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingTop: 20,
    marginBottom: 10,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',

    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.7,
    marginRight: 6,
  },
  chevron: {
    marginLeft: 4,
    opacity: 0.5,
  },
});

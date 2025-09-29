import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  FlatList,
  Text,
} from 'react-native';
import { useI18n } from '../languages/I18nProvider';

const LANGUAGES = [
  { code: 'tr', name: 'Türkçe', flag: require('../assets/flags/tr.png') },
  { code: 'en', name: 'English', flag: require('../assets/flags/en.png') },
  { code: 'de', name: 'Deutsch', flag: require('../assets/flags/de.png') },
  //   { code: 'es', name: 'Español', flag: require('../assets/flags/es.png') },
  //   { code: 'fr', name: 'Français', flag: require('../assets/flags/fr.png') },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [visible, setVisible] = useState(false);

  const selectedLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

  return (
    <View style={styles.container}>
      {/* Seçili olan dil */}
      <TouchableOpacity
        style={styles.selectedBtn}
        onPress={() => setVisible(true)}
      >
        <Image source={selectedLang.flag} style={styles.flag} />
      </TouchableOpacity>

      {/* Modal açılır menü */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={LANGUAGES}
              keyExtractor={item => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setLocale(item.code as any);
                    setVisible(false);
                  }}
                >
                  <Image source={item.flag} style={styles.flag} />
                  <Text style={styles.langText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  selectedBtn: {
    padding: 2,
    borderRadius: 8,
    borderWidth: 0.25,
    borderColor: '#080808ff',
  },
  flag: {
    width: 32,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    width: 200,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  langText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ONBOARDING_STEP_KEYS } from './data';
import { useI18n } from '../../languages/I18nProvider';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const { width } = Dimensions.get('window');

type OnboardingScreenProps = {
  onComplete: () => void;
};

export default function OnboardingScreen({
  onComplete,
}: OnboardingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { t } = useI18n();

  const handleNext = () => {
    if (currentIndex < ONBOARDING_STEP_KEYS.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={[styles.page, { width }]}>
      <Text style={styles.title}>{t(item.titleKey)}</Text>
      <Text style={styles.desc}>{t(item.descriptionKey)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* ✅ Üst bar */}
      <View style={styles.topBar}>
        <LanguageSwitcher />

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>{t('onboarding.skip')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_STEP_KEYS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      {/* Indicator dots */}
      <View style={styles.dots}>
        {ONBOARDING_STEP_KEYS.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.dotActive]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.bottomNav}>
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={handlePrev} style={styles.navBtn}>
            <Text style={styles.btnText}>{t('onboarding.back')}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.navBtn} />
        )}

        <TouchableOpacity onPress={handleNext} style={styles.navBtn}>
          <Text style={styles.btnText}>
            {currentIndex === ONBOARDING_STEP_KEYS.length - 1
              ? t('onboarding.start')
              : t('onboarding.next')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  skip: { fontSize: 16, color: '#666' },
  page: { justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 16, textAlign: 'center', color: '#555' },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: { backgroundColor: '#333', width: 12 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  navBtn: { padding: 10 },
  btnText: { fontSize: 18, fontWeight: '600', color: '#007AFF' },
});

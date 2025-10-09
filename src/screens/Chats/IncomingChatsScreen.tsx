// import { View, Text, FlatList } from 'react-native';
// import React from 'react';
// import ChatListItem from '../../components/Chats/ChatListItem';
// const chats = [
//   {
//     id: '1',
//     username: 'Ahmet',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
//     lastMessage: 'Nasılsın?',
//     lastMessageDate: new Date(),
//     isSentByUser: false,
//   },
//   {
//     id: '2',
//     username: 'Ayşe',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
//     lastMessage: 'Görüşürüz!',
//     lastMessageDate: new Date(Date.now() - 86400000),
//     isSentByUser: true,
//   },
// ];
// export default function IncomingChatsScreen() {
//   return (
//     <View>
//       <Text>IncomingChatsScreen</Text>
//       <FlatList
//         data={chats}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <ChatListItem
//             avatarUrl={item.avatarUrl}
//             username={item.username}
//             lastMessage={item.lastMessage}
//             lastMessageDate={item.lastMessageDate}
//             isSentByUser={item.isSentByUser}
//           />
//         )}
//       />
//     </View>
//   );
// }
// src/screens/Chats/IncomingChatsScreen.tsx
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   Pressable,
//   useColorScheme,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import ChatListItem from '../../components/Chats/ChatListItem';
// import { useThemeProvider } from '../../lib/theme/ThemeProvider';
// import { useTheme } from '@react-navigation/native';

// const chats = [
//   {
//     id: '1',
//     username: 'Ahmet',
//     avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
//     lastMessage: 'Nasılsın?',
//     lastMessageDate: new Date(),
//     isSentByUser: false,
//   },
//   {
//     id: '2',
//     username: 'Ayşe',
//     avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
//     lastMessage: 'Görüşürüz!',
//     lastMessageDate: new Date(Date.now() - 86400000),
//     isSentByUser: true,
//   },
// ];

// export default function IncomingChatsScreen() {
//   const { mode } = useThemeProvider();
//   const { colors } = useTheme();

//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => setMenuVisible(!menuVisible);

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
//       {/* 🧭 Header */}
//       <View style={[styles.header, { borderBottomColor: colors.border }]}>
//         <Text style={[styles.title, { color: colors.text }]}>
//           Gelen Mesajlar
//         </Text>

//         <TouchableOpacity onPress={toggleMenu}>
//           <Icon name="ellipsis-vertical" size={22} color={colors.text} />
//         </TouchableOpacity>
//       </View>

//       {/* 📨 Chat listesi */}
//       <FlatList
//         data={chats}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
// <ChatListItem
//   avatarUrl={item.avatarUrl}
//   username={item.username}
//   lastMessage={item.lastMessage}
//   lastMessageDate={item.lastMessageDate}
//   isSentByUser={item.isSentByUser}
// />
//         )}
//         contentContainerStyle={{ paddingBottom: 50 }}
//       />

//       {/* ⚙️ Menü Modal */}
//       <Modal
//         transparent
//         visible={menuVisible}
//         animationType="fade"
//         onRequestClose={() => setMenuVisible(false)}
//       >
//         <Pressable
//           style={styles.modalOverlay}
//           onPress={() => setMenuVisible(false)}
//         >
//           <View
//             style={[
//               styles.menuContainer,
//               { backgroundColor: colors.card, borderColor: colors.border },
//             ]}
//           >
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => {
//                 setMenuVisible(false);
//                 console.log('Yeni sohbet');
//               }}
//             >
//               <Icon name="chatbubble-outline" size={18} color={colors.text} />
//               <Text style={[styles.menuText, { color: colors.text }]}>
//                 Yeni sohbet
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => {
//                 setMenuVisible(false);
//                 console.log('Ayarlar');
//               }}
//             >
//               <Icon name="settings-outline" size={18} color={colors.text} />
//               <Text style={[styles.menuText, { color: colors.text }]}>
//                 Ayarlar
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </Pressable>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     paddingTop: 15,
//     paddingHorizontal: 20,
//     paddingBottom: 14,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '600',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//     paddingTop: 50,
//     paddingRight: 16,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//   },
//   menuContainer: {
//     width: 180,
//     borderRadius: 12,
//     borderWidth: 1,
//     overflow: 'hidden',
//     shadowColor: '#ffffffff',
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 3,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 14,
//   },
//   menuText: {
//     fontSize: 15,
//     marginLeft: 10,
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Platform, // Platforma özel stil için ekledim
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import ChatListItem from '../../components/Chats/ChatListItem';
import { useThemeProvider } from '../../lib/theme/ThemeProvider';
import { useTheme } from '@react-navigation/native';
import { useI18n } from '../../languages/I18nProvider';

// Sabit verileriniz (değişmedi)
const chats: ArrayLike<any> | null | undefined = [
  {
    id: '1',
    username: 'Ahmet',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Nasılsın?',
    lastMessageDate: new Date(),
    isSentByUser: true,
  },
  {
    id: '2',
    username: 'Ayşe',
    avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    lastMessage: 'Görüşürüz!',
    lastMessageDate: new Date(Date.now() - 86400000),
    isSentByUser: true,
  },
  // {
  //   id: '3',
  //   username: 'Ahmet',
  //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   lastMessage: 'Nasılsın?',
  //   lastMessageDate: new Date(),
  //   isSentByUser: false,
  // },
  // {
  //   id: '4',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '5',
  //   username: 'Ahmet',
  //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   lastMessage: 'Nasılsın?',
  //   lastMessageDate: new Date(),
  //   isSentByUser: false,
  // },
  // {
  //   id: '6',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '7',
  //   username: 'Ahmet',
  //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   lastMessage: 'Nasılsın?',
  //   lastMessageDate: new Date(),
  //   isSentByUser: false,
  // },
  // {
  //   id: '8',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '9',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '10',
  //   username: 'Ahmet',
  //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   lastMessage: 'Nasılsın?',
  //   lastMessageDate: new Date(),
  //   isSentByUser: false,
  // },
  // {
  //   id: '11',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '12',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
  // {
  //   id: '13',
  //   username: 'Ahmet',
  //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   lastMessage: 'Nasılsın?',
  //   lastMessageDate: new Date(),
  //   isSentByUser: false,
  // },
  // {
  //   id: '14',
  //   username: 'Ayşe',
  //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   lastMessage: 'Görüşürüz!',
  //   lastMessageDate: new Date(Date.now() - 86400000),
  //   isSentByUser: true,
  // },
];
interface MenuItemProps {
  iconName: string;
  text: string;
  onPress: () => void; // A function that returns nothing
}
export default function IncomingChatsScreen() {
  const { mode } = useThemeProvider();
  const { colors } = useTheme();
  const { t } = useI18n();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Menü öğesi bileşeni (Tekrar eden kodu temizler)
  const MenuItem = ({ iconName, text, onPress }: MenuItemProps) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.menuItem,
        {
          backgroundColor: pressed
            ? colors.border // Hafif basma efekti
            : colors.card,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <Icon name={iconName} size={18} color={colors.text} />
      <Text style={[styles.menuText, { color: colors.text }]}>{text}</Text>
    </Pressable>
  );
  const EmptyChatList = () => (
    <View style={styles.emptyContainer}>
      <IconFeather
        name="inbox" // Gelen kutusu boşluğunu temsil eden ikon
        size={70}
        color={colors.text}
        style={styles.emptyIcon}
      />
      <Text style={[styles.emptyTitle, { color: colors.text }]}>
        {t('no_incoming_chats.title')}
      </Text>
      <Text style={[styles.emptySubtitle, { color: colors.text }]}>
        {t('no_incoming_chats.desc')}
      </Text>
      {/* İsteğe bağlı: Kullanıcıyı yönlendiren bir buton eklenebilir.
        Örn: <TouchableOpacity style={[styles.emptyButton, {backgroundColor: colors.primary}]}>
                <Text style={styles.emptyButtonText}>Yeni Sohbet Başlat</Text>
             </TouchableOpacity>
      */}
    </View>
  );
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* 🧭 Header - İyileştirilmiş Stil */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.card, // Arka plan rengi eklendi
            borderBottomColor: colors.border,
          },
        ]}
      >
        {/* Sol tarafta boşluk bırakıldı veya başka bir ikon eklenebilir */}
        <View style={styles.leftHeaderFiller} />

        <Text style={[styles.title, { color: colors.text }]}>
          {t('incoming_chats.title')}
        </Text>

        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Icon name="ellipsis-vertical" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* 📨 Chat listesi */}
      <FlatList
        data={chats}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            username={item.username}
            lastMessage={item.lastMessage}
            lastMessageDate={item.lastMessageDate}
            isSentByUser={item.isSentByUser}
          />
        )}
        contentContainerStyle={{ paddingBottom: 50, flexGrow: 1 }} // flexGrow: 1, EmptyState'in ortalanması için önemli
        // 2. ANA DEĞİŞİKLİK: ListEmptyComponent eklendi
        ListEmptyComponent={EmptyChatList}
      />

      {/* ⚙️ Menü Modal - İyileştirilmiş Stil */}
      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}
        >
          <View
            style={[
              styles.menuContainer,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <MenuItem
              iconName="chatbubble-outline"
              text="Yeni Sohbet"
              onPress={() => {
                setMenuVisible(false);
                console.log('Yeni sohbet');
              }}
            />
            {/* Ayırıcı çizgi otomatik olarak MenuItem içinde style ile geliyor */}
            <MenuItem
              iconName="settings-outline"
              text="Ayarlar"
              onPress={() => {
                setMenuVisible(false);
                console.log('Ayarlar');
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1, // Listeyi doldurması için
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 50, // Header'ın altından başlaması için biraz boşluk
  },
  emptyIcon: {
    marginBottom: 20,
    opacity: 0.6,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.7,
  },
  // Header İyileştirmeleri
  header: {
    height: Platform.OS === 'ios' ? 95 : 60, // iOS'ta daha yüksek, büyük başlık stili
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    paddingHorizontal: 16, // Tüm ekran için tutarlı padding
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth kaldırıldı, yerine gölge eklenebilir (Android'de elevation, iOS'ta shadow)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 1,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 21, // Başlık daha belirgin yapıldı
    fontWeight: '700', // Daha kalın yapıldı
    flex: 1, // Ortalanmaya yardımcı olmak için
    textAlign: 'center', // Başlık ortalandı
  },
  menuButton: {
    padding: 5, // Dokunma alanını genişletmek için
  },
  leftHeaderFiller: {
    width: 34, // İkonun kapladığı alan kadar boşluk (yaklaşık 24px icon + 5px padding * 2)
  },

  // Liste İyileştirmeleri
  listContentContainer: {
    paddingBottom: 50,
  },

  // Modal İyileştirmeleri
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: Platform.OS === 'ios' ? 95 : 50, // Header yüksekliğine göre ayarlandı
    paddingRight: 20, // Menüyü sağa daha yakın konumlandırdık
    backgroundColor: 'rgba(0,0,0,0.3)', // Daha şık bir gölgelendirme
  },
  menuContainer: {
    width: 200, // Daha geniş menü
    borderRadius: 10, // Daha yumuşak köşeler
    // borderWidth kaldırıldı, gölge daha çok ön planda
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15, // Daha fazla dikey boşluk
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth, // Ayırıcı çizgi eklendi
  },
  menuText: {
    fontSize: 16, // Daha okunaklı font boyutu
    marginLeft: 12,
    fontWeight: '500',
  },
});

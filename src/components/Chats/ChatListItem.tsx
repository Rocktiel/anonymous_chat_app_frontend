// // src/components/ChatListItem.tsx
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   useColorScheme,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import { useTheme } from '@react-navigation/native';
// import { useThemeProvider } from '../../lib/theme/ThemeProvider';

// interface ChatListItemProps {
//   avatarUrl: string;
//   username: string;
//   lastMessage: string;
//   lastMessageDate: string | Date;
//   isSentByUser: boolean;
//   onPress?: () => void;
// }

// const ChatListItem: React.FC<ChatListItemProps> = ({
//   avatarUrl,
//   username,
//   lastMessage,
//   lastMessageDate,
//   isSentByUser,
//   onPress,
// }) => {
//   const { mode } = useThemeProvider();
//   const { colors } = useTheme();

//   const formattedDate = formatDate(lastMessageDate);

//   return (
//     <TouchableOpacity
//       style={[styles.container, { backgroundColor: colors.card }]}
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       {/* Avatar */}
//       <View
//         style={[
//           styles.avatarContainer,
//           mode === 'dark' && { borderColor: '#34C759', borderWidth: 2 },
//         ]}
//       >
//         <Image source={{ uri: avatarUrl }} style={styles.avatar} />
//       </View>

//       {/* Chat Info */}
//       <View style={styles.infoContainer}>
//         <View style={styles.headerRow}>
//           <Text
//             style={[styles.username, { color: colors.text }]}
//             numberOfLines={1}
//           >
//             {username}
//           </Text>
//           <Text style={[styles.date, { color: colors.text }]}>
//             {formattedDate}
//           </Text>
//         </View>

//         <View style={styles.messageRow}>
//           {/* Direction icon */}
//           <Icon
//             name={isSentByUser ? 'arrow-up-right' : 'arrow-down-left'}
//             size={16}
//             color={colors.text}
//             style={{ marginRight: 6 }}
//           />
//           <Text
//             style={[styles.messageText, { color: colors.text }]}
//             numberOfLines={1}
//           >
//             {lastMessage}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// // 🕓 Yardımcı tarih formatlama fonksiyonu
// function formatDate(date: string | Date): string {
//   const d = new Date(date);
//   const now = new Date();

//   const isToday =
//     d.getDate() === now.getDate() &&
//     d.getMonth() === now.getMonth() &&
//     d.getFullYear() === now.getFullYear();

//   const yesterday = new Date();
//   yesterday.setDate(now.getDate() - 1);
//   const isYesterday =
//     d.getDate() === yesterday.getDate() &&
//     d.getMonth() === yesterday.getMonth() &&
//     d.getFullYear() === yesterday.getFullYear();

//   if (isToday) {
//     return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   } else if (isYesterday) {
//     return 'Dün';
//   } else {
//     return d.toLocaleDateString('tr-TR', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//     });
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//   },
//   avatarContainer: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   infoContainer: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 2,
//   },
//   username: {
//     fontWeight: '600',
//     fontSize: 16,
//     flexShrink: 1,
//   },
//   date: {
//     fontSize: 12,
//     opacity: 0.6,
//   },
//   messageRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   messageText: {
//     fontSize: 14,
//     opacity: 0.8,
//     flexShrink: 1,
//   },
// });

// export default ChatListItem;

// src/components/ChatListItem.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

interface ChatListItemProps {
  username: string;
  lastMessage: string;
  lastMessageDate: string | Date;
  isSentByUser: boolean;
  onPress?: () => void;
  isImportant?: boolean;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  username,
  lastMessage,
  lastMessageDate,
  isSentByUser,
  onPress,
  isImportant = false,
}) => {
  const { colors } = useTheme();

  const formattedDate = formatDate(lastMessageDate);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          borderBottomColor: colors.border,
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text
            style={[styles.username, { color: colors.text }]}
            numberOfLines={1}
          >
            {isImportant && (
              <Icon
                name="bell"
                size={16}
                color={colors.primary}
                style={{ marginRight: 6 }}
              />
            )}
            {username}
          </Text>
          <Text style={[styles.date, { color: colors.text }]}>
            {formattedDate}
          </Text>
        </View>
        <View style={styles.messageRow}>
          <Icon
            name={isSentByUser ? 'arrow-up-right' : 'arrow-down-left'}
            size={16}
            color={colors.text}
            style={{ marginRight: 6, opacity: 0.7 }}
          />
          <Text
            style={[styles.messageText, { color: colors.text }]}
            numberOfLines={1}
          >
            {lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Tarih formatlama fonksiyonu
function formatDate(date: string | Date): string {
  const d = new Date(date);
  const now = new Date();

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday =
    d.getDate() === yesterday.getDate() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (isYesterday) {
    return 'Dün';
  } else {
    return d.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric',
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 21,
    paddingHorizontal: 16,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontWeight: '700',
    fontSize: 17,
    flexShrink: 1,
    marginRight: 10,
  },
  date: {
    fontSize: 13,
    opacity: 0.7,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 14,
    opacity: 0.8,
    flexShrink: 1,
  },
});

export default ChatListItem;

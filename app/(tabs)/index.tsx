import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const router = useRouter();
  const buttonBackground = useThemeColor({}, 'primary');
  const buttonText = useThemeColor({ light: '#FBF9F1', dark: '#10171d' }, 'text');
  return (
    <ThemedView style={styles.screen}>
      <View style={styles.content}>
        <Image source={require('@/assets/LOGOTIPO.png')} style={styles.logo} contentFit="contain" />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: buttonBackground },
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push('/login')}
        >
          <ThemedText style={[styles.buttonText, { color: buttonText }]}>
            Iniciar sesión
          </ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 24,
  },
  logo: {
    width: '80%',
    maxWidth: 320,
    aspectRatio: 2.4,
  },
  button: {
    minWidth: 220,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontWeight: '600',
  },
});

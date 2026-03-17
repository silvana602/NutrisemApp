import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const surface = useThemeColor({}, 'surface');
  const border = useThemeColor({}, 'border');
  const primary = useThemeColor({}, 'primary');
  const buttonText = useThemeColor({ light: '#FBF9F1', dark: '#10171d' }, 'text');
  const inputText = useThemeColor({}, 'text');
  const placeholder = useThemeColor({ light: 'rgba(62, 74, 79, 0.6)', dark: 'rgba(212, 224, 232, 0.6)' }, 'text');

  return (
    <ThemedView style={styles.screen}>
      <View style={[styles.card, { backgroundColor: surface, borderColor: border }]}>
        <ThemedText type="title" style={styles.title}>
          Iniciar sesión
        </ThemedText>
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor={placeholder}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={[styles.input, { borderColor: border, color: inputText }]}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor={placeholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[styles.input, { borderColor: border, color: inputText }]}
        />
        <Pressable style={[styles.button, { backgroundColor: primary }]}>
          <ThemedText style={[styles.buttonText, { color: buttonText }]}>
            Entrar
          </ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    gap: 14,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  title: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

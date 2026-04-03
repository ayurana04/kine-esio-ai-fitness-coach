import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    if (email && password) {
      alert("Signup successful!");
      router.replace('/login');
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup 👤</Text>

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => router.push('/login')}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: 'blue',
  },
});
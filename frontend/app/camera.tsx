import { Text, View, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useState } from 'react';

export default function CameraScreen() {
  const [exercise, setExercise] = useState('');
  const [videoLink, setVideoLink] = useState('');

  const getVideo = () => {
    let link = "";

    if (exercise.toLowerCase() === "pushup") {
      link = "https://www.youtube.com/watch?v=IODxDxX7oi4";
    } else if (exercise.toLowerCase() === "squat") {
      link = "https://www.youtube.com/watch?v=aclHkVaku9U";
    } else if (exercise.toLowerCase() === "plank") {
      link = "https://www.youtube.com/watch?v=pSHjTRCQxIw";
    } else {
      link = "https://www.youtube.com";
    }

    setVideoLink(link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Guide 📷</Text>

      <TextInput
        placeholder="Enter exercise (pushup/squat/plank)"
        style={styles.input}
        onChangeText={setExercise}
      />

      <TouchableOpacity style={styles.button} onPress={getVideo}>
        <Text style={styles.buttonText}>Get Video</Text>
      </TouchableOpacity>

      {videoLink !== "" && (
        <TouchableOpacity onPress={() => Linking.openURL(videoLink)}>
          <Text style={styles.link}>▶ Watch Video</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'purple',
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  link: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
  },
});
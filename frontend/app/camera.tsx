import { Text, View, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <Text>Requesting permission...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
        <Text onPress={requestPermission}>Grant Permission</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="front" />

      <Text style={styles.text}>📷 Camera Active</Text>

      <Text style={styles.warning}>
        ⚠️ Keep your back straight
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },

  text: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
  },

  warning: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
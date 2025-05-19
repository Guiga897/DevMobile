import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => videoRef.current.playAsync()}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => videoRef.current.pauseAsync()}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.status}>
        {status.isPlaying ? 'Reproduzindo...' : 'Pausado'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffeff0',
    padding: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0006cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});
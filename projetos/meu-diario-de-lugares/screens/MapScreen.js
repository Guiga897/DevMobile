import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function MapScreen() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const stored = await AsyncStorage.getItem('locations');
        const list = stored ? JSON.parse(stored) : [];
        setLocations(list);
      } catch (e) {
        console.error('Erro ao carregar locais:', e);
      } finally {
        setLoading(false);
      }
    };

    if (isFocused) loadLocations();
  }, [isFocused]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const initialRegion = {
    latitude: locations[0]?.latitude || 0,
    longitude: locations[0]?.longitude || 0,
    latitudeDelta: 60, // mostra o mapa mundi
    longitudeDelta: 60,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        scrollEnabled={true}
        provider={MapView.PROVIDER_GOOGLE}
      >
        {locations.map((loc, idx) => (
          <Marker
            key={`marker-${idx}`}
            coordinate={{
              latitude: loc.latitude,
              longitude: loc.longitude,
            }}
            title={loc.titulo}
            description={loc.anotacao}
          >
            <Callout>
              <View>
                <Text style={styles.calloutTitle}>{loc.titulo}</Text>
                {loc.anotacao ? (
                  <Text style={styles.calloutText}>{loc.anotacao}</Text>
                ) : null}
                <Text style={styles.calloutCoords}>
                  Lat: {loc.latitude.toFixed(4)} | Long: {loc.longitude.toFixed(4)}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  calloutText: {
    fontSize: 14,
    marginBottom: 4,
  },
  calloutCoords: {
    fontSize: 12,
    color: '#555',
  },
});

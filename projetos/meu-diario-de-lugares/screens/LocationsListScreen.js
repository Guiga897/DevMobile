import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LocationsListScreen({ navigation }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const stored = await AsyncStorage.getItem('locations');
      if (stored) setLocations(JSON.parse(stored));
    };
    loadLocations();
  }, []);

  return (
    <View style={styles.container}>
      {locations.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum local registrado</Text>
      ) : (
        <FlatList
          data={locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text>Latitude: {item.latitude.toFixed(6)}</Text>
              <Text>Longitude: {item.longitude.toFixed(6)}</Text>
              {item.anotacao && <Text>Anotação: {item.anotacao}</Text>}
            </View>
          )}
        />
      )}
      
      <View style={styles.footer}>
        <Button 
          title="Voltar" 
          onPress={() => navigation.goBack()} 
        />
        <Button 
          title="Ver Mapa" 
          onPress={() => navigation.navigate('Map')} 
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
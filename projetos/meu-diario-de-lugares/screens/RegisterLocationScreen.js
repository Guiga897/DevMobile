import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterLocationScreen({ navigation }) {
  const [form, setForm] = useState({
    latitude: '',
    longitude: '',
    titulo: '',
    anotacao: ''
  });
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const stored = await AsyncStorage.getItem('locations');
        if (stored) setLocations(JSON.parse(stored));
      } catch (e) {
        console.error('Erro ao carregar locais:', e);
      }
    };
    loadLocations();
  }, []);

  const handleChange = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const saveLocation = async () => {
    const lat = parseFloat(form.latitude);
    const lon = parseFloat(form.longitude);
    
    if (isNaN(lat) || isNaN(lon)) {
      Alert.alert('Erro', 'Latitude e longitude devem ser números válidos.');
      return;
    }
    
    if (!form.titulo.trim()) {
      Alert.alert('Erro', 'Informe um título para o local.');
      return;
    }
    
    const newLocation = { 
      latitude: lat, 
      longitude: lon, 
      titulo: form.titulo, 
      anotacao: form.anotacao 
    };
    
    try {
      const updatedLocations = [...locations, newLocation];
      await AsyncStorage.setItem('locations', JSON.stringify(updatedLocations));
      setLocations(updatedLocations);
      
      Alert.alert('Sucesso', 'Local salvo com sucesso.', [
        { 
          text: 'Ver no mapa', 
          onPress: () => navigation.navigate('Map') 
        },
        { 
          text: 'OK',
          onPress: () => setForm({ latitude: '', longitude: '', titulo: '', anotacao: '' })
        }
      ]);
    } catch (e) {
      Alert.alert('Erro', 'Falha ao salvar o local.');
    }
  };

  // Corrigido: Removido FlatList e usando ScrollView com map
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Registrar Novo Local</Text>
      
      <Text style={styles.label}>Latitude</Text>
      <TextInput
        style={styles.input}
        value={form.latitude}
        onChangeText={v => handleChange('latitude', v)}
        keyboardType="numeric"
        placeholder="Ex: -23.5505"
      />
      
      <Text style={styles.label}>Longitude</Text>
      <TextInput
        style={styles.input}
        value={form.longitude}
        onChangeText={v => handleChange('longitude', v)}
        keyboardType="numeric"
        placeholder="Ex: -46.6333"
      />
      
      <Text style={styles.label}>Título*</Text>
      <TextInput
        style={styles.input}
        value={form.titulo}
        onChangeText={v => handleChange('titulo', v)}
        placeholder="Nome do local"
      />
      
      <Text style={styles.label}>Anotação</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={form.anotacao}
        onChangeText={v => handleChange('anotacao', v)}
        multiline
        placeholder="Descrição ou memória sobre o local"
      />
      
      <View style={styles.button}>
        <Button title="Salvar Local" onPress={saveLocation} />
      </View>
      
      <Text style={styles.sectionTitle}>Locais Registrados</Text>
      
      {locations.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum local registrado ainda</Text>
      ) : (
        // Substituído FlatList por map dentro do ScrollView
        locations.map((item, index) => (
          <View key={index} style={styles.locationItem}>
            <Text style={styles.locationTitle}>{item.titulo}</Text>
            <Text>Lat: {item.latitude.toFixed(4)}, Long: {item.longitude.toFixed(4)}</Text>
            {item.anotacao && <Text>{item.anotacao}</Text>}
          </View>
        ))
      )}
      
      <View style={styles.footerButtons}>
        <View style={styles.footerButton}>
          <Button 
            title="Ver Mapa" 
            onPress={() => navigation.navigate('Map')} 
            color="#4CAF50"
          />
        </View>
        <View style={styles.footerButton}>
          <Button 
            title="Limpar Tudo" 
            onPress={async () => {
              await AsyncStorage.removeItem('locations');
              setLocations([]);
              Alert.alert('Sucesso', 'Todos os locais foram removidos');
            }} 
            color="#F44336"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    paddingBottom: 40
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333'
  },
  label: { 
    marginTop: 10, 
    fontWeight: 'bold' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    padding: 12, 
    marginTop: 5,
    fontSize: 16
  },
  button: { 
    marginTop: 20,
    marginBottom: 15
  },
  locationItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3'
  },
  locationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 20
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  footerButton: {
    flex: 1,
    marginHorizontal: 5
  }
});
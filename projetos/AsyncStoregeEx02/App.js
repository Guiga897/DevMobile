import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nomeSalvo, setNomeSalvo] = useState('');

  useEffect(() => {
    carregarNome();
  }, []);

  const carregarNome = async () => {
    try {
      const nome = await AsyncStorage.getItem('nomeUsuario');
      if (nome !== null) {
        setNomeSalvo(nome);
      } else {
        setNomeSalvo('Nenhum nome salvo.');
      }
    } catch (error) {
      console.error('Erro ao carregar o nome:', error);
      setNomeSalvo('Erro ao carregar o nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome Salvo: {nomeSalvo}</Text>
      <Button title="Carregar Nome" onPress={carregarNome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
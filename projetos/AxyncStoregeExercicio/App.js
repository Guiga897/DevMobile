//Gerente Eli Hofni Mariano
// Assistente Guilherme Calandrim Fávero

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSalvar = async () => {
    if (!id || !nome || !local) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const equipamento = { id, nome, local };
      await AsyncStorage.setItem(id, JSON.stringify(equipamento));
      setMensagem('Equipamento salvo com sucesso!');
      limparCampos();
    } catch (error) {
      setMensagem(`Erro ao salvar: ${error}`);
    }
  };

  const handleCarregar = async () => {
    if (!id) {
      setMensagem('Digite um ID para buscar.');
      return;
    }

    try {
      const dados = await AsyncStorage.getItem(id);
      if (dados) {
        const equipamento = JSON.parse(dados);
        setNome(equipamento.nome);
        setLocal(equipamento.local);
        setMensagem('Equipamento encontrado!');
      } else {
        setMensagem('Equipamento não encontrado.');
        limparCampos();
      }
    } catch (error) {
      setMensagem(`Erro ao carregar: ${error}`);
    }
  };

  const handleRemover = async () => {
    if (!id) {
      setMensagem('Digite um ID para remover.');
      return;
    }

    try {
      await AsyncStorage.removeItem(id);
      setMensagem('Equipamento removido com sucesso!');
      limparCampos();
    } catch (error) {
      setMensagem(`Erro ao remover: ${error}`);
    }
  };

  const handleListarEquipamentos = async () => {
    try {
      const chaves = await AsyncStorage.getAllKeys();
      if (chaves.length === 0) {
        Alert.alert('Aviso', 'Nenhum equipamento cadastrado.');
        return;
      }

      const equipamentos = await AsyncStorage.multiGet(chaves);
      const dadosFormatados = equipamentos.map(([key, value]) => JSON.parse(value));
      
      Alert.alert(
        'Equipamentos Cadastrados',
        JSON.stringify(dadosFormatados, null, 2)
      );
    } catch (error) {
      setMensagem(`Erro ao listar: ${error}`);
    }
  };

  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID do Equipamento"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Local de Instalação"
        value={local}
        onChangeText={setLocal}
      />
      
      <View style={styles.buttonGroup}>
        <Button title="Cadastrar/Atualizar" onPress={handleSalvar} />
        <Button title="Carregar" onPress={handleCarregar} />
        <Button title="Remover" onPress={handleRemover} color="#ff4444" />
        <Button 
          title="Listar Equipamentos" 
          onPress={handleListarEquipamentos} 
          color="#4CAF50"
        />
      </View>
      
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

// ===== ESTILOS =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonGroup: {
    gap: 10,
    marginBottom: 15,
  },
  mensagem: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
});
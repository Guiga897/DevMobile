import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome digitado
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem de resposta

  const lidarComClique = () => {
    if (!nome) {
      setMensagem('Por favor, digite seu nome.'); // Exibe mensagem se o nome não for digitado
    } else {
      setMensagem(`Olá, ${nome}!`); // Exibe saudação personalizada
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Exemplo de App Interativo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome} // Atualiza o estado 'nome' conforme o usuário digita
        value={nome}
      />
      <Button title="Enviar" onPress={lidarComClique} />{' '}
      {/* Botão para enviar o nome */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1, // Borda cinza no campo de entrada
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5, // Botão arredondado
    marginTop: 30,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;

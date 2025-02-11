import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');
  // Estado para armazenar a mensagem exibida
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o clique no botão
  const lidarComClique = () => {
    if (!nome) {
      setMensagem('Por favor, digite seu nome.');
    } else {
      setMensagem(`Olá, ${nome}!`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibe uma imagem do React Native */}
      <Image
        source={{ uri:'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Campo de entrada de texto para o nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome}
        value={nome}
      />

      {/* Botão para enviar o nome */}
      <Button title="Enviar" onPress={lidarComClique} />

      {/* Exibe a mensagem somente se houver conteúdo */}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
  },
});


export default App;

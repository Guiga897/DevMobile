import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import logo from './assets/NativeLogo.png';

const App = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Ola, ${nome}!`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>
          Exemplo de elementos graficos interativos em react native
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        <Button title="Enviar" onPress={lidarComClique} />
      </View>
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

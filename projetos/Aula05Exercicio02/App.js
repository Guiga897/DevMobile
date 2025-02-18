import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import logo from './assets/NativeLogo.png';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  const handlePress = () => {
    alert('Botão pressionado');
  };
  const addItem = () => {
    setItems([...items, { id: Date.now(), name: text }]);
    setText('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>Exemplo de App react native</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />
      <Button title="adicionar item" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;

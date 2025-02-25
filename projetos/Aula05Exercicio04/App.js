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
  SectionList, 
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import logo from './assets/NativeLogo.png';

const App = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
const handlePress =() =>{
  setIsLoading(true);
  setTimeout(()=>{
    setIsLoading(false);
    alert('botão pressionado');
  }, 2000);
};
  const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];
  const sections =[
    {
      title: 'seção 1',
      data:[{id:1, name: 'Item 1'},{id:2, name:'item 2'}],
    },
    {
      title: 'seção 2',
      data:[{id:3, name: 'Item 3'},{id:4, name:'item 4'}],
    },
  ];


  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
      <Text style={styles.text}>texto exemplo</Text>
        <Image source={logo} style={styles.image} />
        
      

      <TextInput
        style={styles.textInput}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />
      <Button title="clique aqui" onPress={handlePress} />
      
      <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
        <Text style={styles.touchableOpacityText}>aqui</Text>
      </TouchableOpacity>
      <ActivityIndicator animating={isLoading}/>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
            <Text>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <SectionList
       sections ={sections}
       renderItem={({ item }) => 
          <Text>{item.name}</Text>}
       renderSectionHeader={({section: { title } })=>(
        <Text style={styles.sectionHeader}>{title}</Text>
       )}
       keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {

    marginBottom: 20,
  },
  text:{
    fontSize:20,
    marginBottom:10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom:20,
  },
  touchableOpacityText:{
    color:'white',
    textAlign: 'center'
  },
  sectionHeader:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;

import React, { useState } from 'react';
//import {View,Text,Image, TextInput,Button,TouchableOpacity,ScrollView,FlatList, SectionList, ActivityIndicator,Slider, Switch, StyleSheetSectionList,ActivityIndicator,Switch,StyleSheet,} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
  SectionList,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import fundo from './assets/teste.png';
import logo from './assets/NativeLogo.png';
const App = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Button Pressed!');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={fundo} style={styles.imageBackground}>
        <Text style={styles.title}>Hello React Native!</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Image source={logo} style={styles.image} />

        <TextInput
          style={styles.input}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        <Button title="Press Me" onPress={handleButtonPress} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('TouchableOpacity pressionado')}
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        <ActivityIndicator animating={isLoading} />

        {/*<Slider 
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={setSliderValue}
        /> 

        <Text>Slider Value: {sliderValue}</Text>
        */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do switch : {switchValue ? 'On' : 'Off'}</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;

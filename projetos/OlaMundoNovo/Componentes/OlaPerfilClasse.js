import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nome: Guilherme Fávero</Text>
        <Text>endereço:rua doutor alberto catani 175</Text>
        <Text>telefone:090190920193748712847</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OlaPerfilClasse;
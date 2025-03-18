import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, BackHandler } from 'react-native';

class CadastroScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '', 
            endereco: '', 
            cidade: '', 
            cep: '', 
            telefone: '', 
        };
        console.log('CadastroScreen: constructor');
    }

    componentDidMount() {
        console.log('CadastroScreen: componentDidMount');
    }

    componentWillUnmount() {
        console.log('CadastroScreen: componentWillUnmount');
    }

    imprimirDados = () => {
        const { nome, endereco, cidade, cep, telefone } = this.state;
        const { username, password } = this.props;
        Alert.alert(
            'Dados do Cadastro',
            `Usuário: ${username}\nSenha: ${password}\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}\nTelefone: ${telefone}`,
            [{ text: 'OK' }]
        );
    };

    render() {
        console.log('CadastroScreen: render');
        return (
            <View style={this.props.styles.container}>
                <Text style={this.props.styles.title}>Cadastro</Text>
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Nome"
                    onChangeText={nome => this.setState({ nome })}
                />
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Endereço"
                    onChangeText={endereco => this.setState({ endereco })}
                />
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Cidade"
                    onChangeText={cidade => this.setState({ cidade })}
                />
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="CEP"
                    onChangeText={cep => this.setState({ cep })}
                />
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Telefone"
                    onChangeText={telefone => this.setState({ telefone })}
                />
                <View style={this.props.styles.buttonContainer}>
                    <Button title="Imprimir" onPress={this.imprimirDados} />
                    <Button title="Voltar" onPress={() => this.props.onVoltar()} />
                    <Button 
                        title="Sair" 
                        onPress={() => {
                            if (Platform.OS === 'android') {
                                BackHandler.exitApp();
                            } else {
                                Alert.alert('Sair', 'Para sair, feche o app manualmente.');
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default CadastroScreen;
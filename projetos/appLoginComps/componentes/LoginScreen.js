import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        console.log('LoginScreen: constructor');
    }

    componentDidMount() {
        console.log('LoginScreen: componentDidMount');
    }

    componentWillUnmount() {
        console.log('LoginScreen: componentWillUnmount');
    }

    render() {
        console.log('LoginScreen: render');
        return (
            <View style={this.props.styles.container}> 
                <Text style={this.props.styles.title}>Login</Text> 
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Usuario" 
                    onChangeText={username => this.setState({ username })} 
                />
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Senha" 
                    secureTextEntry 
                    onChangeText={password => this.setState({ password })} 
                />
                <Button 
                    title="Entrar" 
                    onPress={() => this.props.onLogin(this.state.username, this.state.password)}
                />
            </View>
        );
    }
}

export default LoginScreen;
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './componentes/LoginScreen';
import CadastroScreen from './componentes/CadastroScreen';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '', password: '' };
        console.log('App: constructor');
    }

    componentDidMount() {
        console.log('App: componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('App: componentDidUpdate', prevState, this.state);
    }

    componentWillUnmount() {
        console.log('App: componentWillUnmount');
    }

    handleLogin = (username, password) => {
        this.setState({ loggedIn: true, username, password });
    };

    handleVoltar = () => {
        this.setState({ loggedIn: false, username: '', password: '' });
    };

    render() {
        console.log('App: render');
        return (
            <View style={styles.container}>
                {this.state.loggedIn ? (
                    <CadastroScreen 
                        onVoltar={this.handleVoltar} 
                        username={this.state.username}
                        password={this.state.password}
                        styles={styles} // Passa os estilos como prop
                    />
                ) : (
                    <LoginScreen 
                        onLogin={this.handleLogin} 
                        styles={styles} // Passa os estilos como prop
                    />
                )}
            </View>
        );
    }
}

// Estilos mantidos no App.js (inalterados)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});

export default App;
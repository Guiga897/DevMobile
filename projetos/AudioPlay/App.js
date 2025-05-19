import React, { useState, useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
    // Estados
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);

    // Carregar o som
    async function loadSound() {
        console.log('Carregando som...');
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('./assets/560446music.mp3')
            );
            setSound(sound);
            console.log('Som carregado');
        } catch (error) {
            console.error('Erro ao carregar o som:', error);
        }
    }

    // Reproduzir
    async function playSound() {
        if (sound) {
            console.log('Tocando som...');
            try {
                await sound.playAsync();
                setIsPlaying(true);
            } catch (error) {
                console.error('Erro ao tocar o som:', error);
            }
        }
    }

    // Pausar
    async function pauseSound() {
        if (sound && isPlaying) {
            console.log('Pausando som...');
            try {
                await sound.pauseAsync();
                setIsPlaying(false);
            } catch (error) {
                console.error('Erro ao pausar o som:', error);
            }
        }
    }

    // Descarregar
    async function unloadSound() {
        if (sound) {
            console.log('Descarregando som...');
            try {
                await sound.stopAsync();
                await sound.unloadAsync();
                setSound(null);
                setIsPlaying(false);
                console.log('Som descarregado');
            } catch (error) {
                console.error('Erro ao descarregar o som:', error);
            }
        }
    }

    // Loop
    async function toggleLooping() {
        if (sound) {
            try {
                const newLoopingState = !isLooping;
                await sound.setIsLoopingAsync(newLoopingState);
                setIsLooping(newLoopingState);
                console.log('Looping:', newLoopingState);
            } catch (error) {
                console.error('Erro ao definir looping:', error);
            }
        }
    }

    // Efeito para carregar/descarregar
    useEffect(() => {
        loadSound();
        return () => {
            console.log('Desmontando componente...');
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <Button
                title={isPlaying ? 'Pausar Som' : 'Tocar Som'}
                onPress={isPlaying ? pauseSound : playSound}
                disabled={!sound}
            />
            <Button
                title={isLooping ? 'Desativar Loop' : 'Ativar Loop'}
                onPress={toggleLooping}
                disabled={!sound}
            />
            <Button
                title="Descarregar Som"
                onPress={unloadSound}
                disabled={!sound}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
import React from "react";
import { View, Text } from "react-native";
import styles from './styles';

export default function Box({ children }) {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}
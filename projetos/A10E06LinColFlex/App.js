import React from "react";
import { View, StatusBar } from "react-native";
import styles from './styles';
import Box from './Box';
import Column from "./Column";
import Row from "./Row";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>1</Box>
          <Box>4</Box>
        </Column>
        <Column>
          <Box>5</Box>
          <Box>6</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>5</Box>
          <Box>6</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>7</Box>
          <Box>8</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>9</Box>
          <Box>10</Box>
        </Column>
        <Column>
          <Box>11</Box>
          <Box>12</Box>
        </Column>
      </Row>
    </View>
  );
}
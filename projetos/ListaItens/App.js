import {Text, View, FlatList} from "react-native";
import styles from "./styles";

const names = [
  "Carlos", "Ana", "João", "Fernanda", "Pedro", "Mariana", 
  "Lucas", "Juliana", "Ricardo", "Patrícia", "Gustavo", "Beatriz",
  "Rodrigo", "Camila", "Eduardo", "Isabela", "Marcos", "Larissa"
];

const data = new Array(100)
  .fill(null)
  .map((v, i) => ({
    key: i.toString(),
    value: names[Math.floor(Math.random() * names.length)]
  }));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}
import React from "react";
import { Text, FlatList } from "react-native";
import styles from "./styles";
import ListControls from "./ListControls";

export default function List({ data, onFilter, onSort, asc }) {
    return (
        <FlatList
            data={data}
            ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
            renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
        />
    );
}
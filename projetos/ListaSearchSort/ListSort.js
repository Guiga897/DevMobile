import React from "react";
import { Text } from "react-native";

const arrows = new Map([
    [true, "r"],
    [false, "x"],
]);

export default function ListSort({ onSort, asc }) {
    return (
        <Text onPress={onSort}>{arrows.get(asc)}</Text>
    );
}
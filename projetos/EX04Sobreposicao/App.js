import React, { useState } from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

const ipaRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0708046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 },
  ],
  strokeColor: "coral",
  strokeWidth: 4,
};

const stoutRegion = {
  coordinates: [
    { latitude: 43.8489744, longitude: -79.0693283 },
    { latitude: 43.8517168, longitude: -79.0710846 },
    { latitude: 43.8518954, longitude: -79.0715097 },
    { latitude: 43.8459251, longitude: -79.0615077 },
    { latitude: 43.8489744, longitude: -79.0693283 },
  ],
  strokeColor: "firebrick",
  strokeWidth: 4,
};

export default function PlottingOverlays() {
  const [ipaStyles, setIpaStyles] = useState([styles.ipatext, styles.boldtext]);
  const [stoutStyles, setStoutStyles] = useState([styles.stoutText]);
  const [overlays, setOverlays] = useState([ipaRegion]);

  function onClickIpa() {
    setIpaStyles([...ipaStyles, styles.boldText]);
    setStoutStyles([styles.stoutText]);
    setOverlays([ipaRegion]);
  }

  function onClickStout() {
    setStoutStyles([...stoutStyles, styles.boldText]);
    setIpaStyles([styles.ipatext]);
    setOverlays([stoutRegion]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onClickIpa}>
          <Text style={ipaStyles}>IPA Fans</Text>
        </Pressable>
        <Pressable onPress={onClickStout}>
          <Text style={stoutStyles}>Stout Fans</Text>
        </Pressable>
      </View>

      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002,
          longitudeDelta: 0.04,
        }}
      >
        {overlays.map((v, i) => (
          <Polygon
            key={i}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
      </MapView>
    </View>
  );
}
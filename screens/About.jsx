import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Boton from "../components/Boton";

export default function About({ setView }) {
  return (
    <>
      <View style={styles.about}>
        <Text>About</Text>
        <Boton text="Ir a Home" clic={() => setView("Home")} />
        <Boton text="Ir a Contact" clic={() => setView("Contact")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  about: {
    flex: 1,
    backgroundColor: "#765111",
  },
});

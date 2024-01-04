import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Boton from "../components/Boton";

export default function Contact({ setView }) {
  return (
    <>
      <View style={styles.contact}>
        <Text>Contact</Text>
        <Boton text="Ir a Home" clic={() => setView("Home")} />
        <Boton text="Ir a About" clic={() => setView("About")} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    backgroundColor: "#121888",
  },
});

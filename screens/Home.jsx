import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Boton from "../components/Boton";

export default function Home({ setView }) {
  return (
    <>
      <View style={styles.home}>
        <Boton text="Ir a About" clic={() => setView("About")} />
        <Boton text="Ir a Contact" clic={() => setView("Contact")} />
        <Text style={styles.text}>Home</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#354",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});

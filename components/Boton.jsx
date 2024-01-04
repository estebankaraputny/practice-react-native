import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default Boton = ({ text, clic }) => {
  return (
    <>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={clic}>
        <Text style={styles.boton}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#fff",
    color: "#000",
    margin: 5,
    padding: 15,
    borderRadius: 15,
    textAlign: "center",
  },
});

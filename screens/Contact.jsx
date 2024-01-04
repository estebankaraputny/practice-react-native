import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <>
      <View style={styles.contact}>
        <Text>Contact</Text>
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

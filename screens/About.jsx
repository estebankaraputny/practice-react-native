import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <>
      <View style={styles.about}>
        <Text>About</Text>
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

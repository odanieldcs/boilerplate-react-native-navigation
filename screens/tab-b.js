import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function TabBScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function TabCScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab C</Text>
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

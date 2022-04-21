import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate("CarSearch")} />
      <Button
        title="Recuperar senha"
        onPress={() => navigation.navigate("Forgot")}
      />
      <Button title="Cadastro" onPress={() => navigation.navigate("SignUp")} />
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

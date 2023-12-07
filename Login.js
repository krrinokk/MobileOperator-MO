import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if the entered username and password are valid
    if (login === "operator" && password === "12345") {
      // Valid credentials, navigate to the "Home" screen
      console.log("Успешный вход!");
      navigation.navigate("Home", { login });
    } else {
      // Invalid credentials, you can display an error message or take other actions
      console.log("Неправильный логин!");
      // For example, you can reset the password field
      setPassword("");
    }
  };

  return (
    <View style={styles.frame1}>
      <View style={styles.rectangle6} />
      <View style={styles.rectangle7}>
        <TextInput
          style={styles.loginInput}
          placeholder="Логин"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
      </View>
      <View style={styles.rectangle8}>
        <TextInput
          style={styles.parolInput}
          placeholder="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} // For password input
        />
      </View>
      <Text style={styles.mobileOperator}>MOBILE OPERATOR</Text>
       <Image
       
        source={{ uri: 'https://i.ibb.co/Wcb8v3C/logo.png' }}
        style={{ width: 150, height: 150,    left: 125,
          bottom: 528,
           }}
      />
      <View style={styles.rectangle9} />
     
      <TouchableOpacity onPress={handleLogin} style={styles.vojtiButton}>
        <Text style={styles.vojti}>Войти</Text>
      </TouchableOpacity>
      <Text style={styles.forOperators}>for operators</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  frame1: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 0,
    paddingBottom: 45,
  },
  rectangle6: {
    width: 428,
    height: 761,
    backgroundColor: "rgba(111, 75, 204, 1)",
    borderRadius: 84,
    position: "relative",
    left: -19,
  },
  rectangle7: {
    width: 302,
    height: 53,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    position: "absolute",
    left: 50,
    bottom: 428,
  },
  rectangle8: {
    width: 302,
    height: 53,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    position: "absolute",
    left: 50,
    bottom: 311,
  },
  loginInput: {
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: "700",
    color: "rgba(111, 75, 204, 1)",
    marginBottom: 0,
    marginLeft: 10,
    paddingTop: 5, 
  },
  parolInput: {
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: "700",
    color: "rgba(111, 75, 204, 1)",
    marginBottom: 0,
    marginLeft: 10,
    paddingTop: 5,
  },
  mobileOperator: {
    fontFamily: "Inter",
    fontSize: 38,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    position: "absolute",
    left: 23,
    top: 114,
  },
  rectangle9: {
    width: 428,
    height: 79,
    backgroundColor: "rgba(111, 75, 204, 1)",
    position: "absolute",
    left: 0,
    top: 0,
  },
  vojtiButton: {
    position: "absolute",
    left: 160,
    bottom: 215,
  },
  vojti: {
    fontFamily: "Inter",
    fontSize: 30,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    left: -8,
  },
  forOperators: {
    fontFamily: "Inter",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    fontStyle: "italic",
    position: "absolute",
    left: 117,
    top: 151,
  },
});

export default Login;

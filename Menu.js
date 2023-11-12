import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";


const handleReturnToTarif = () => {
    navigation.navigate("Tarif");
  };

  const handleReturnToDogovor = () => {
    navigation.navigate("Dogovor");
  };
  
  const handleReturnToClient = () => {
    navigation.navigate("Client");
  };
  const handleReturnToHome = () => {
    navigation.navigate("Home");
  };

const Menu = ({ navigation, currentDate, handleReturnToLogin, handleReturnToTarif, handleReturnToDogovor, handleReturnToClient, handleReturnToHome }) => {
  return (
    <View style={styles.flexWrapperTwo}>
      <View style={styles.rectangle15} />
      <View style={styles.rectangle15Two} />
      <View style={styles.rectangle15Three} />
      
      <Image
        style={styles.Client}
        source={{
          uri: "https://i.ibb.co/mymKLkx/image.png",
        }}
      />
    
    
      <Image
        style={styles.Home}
        source={{
          uri: "https://i.ibb.co/Pmz2PQf/image.png",
        }}
      />
    
    <Image
        style={styles.Tarif}
        source={{
          uri: "https://i.ibb.co/T8RM1Gc/image.png",
        }}
      />
      <Image
        style={styles.Dogovor}
        source={{
          uri: "https://i.ibb.co/W5HJLVd/image.png",
        }}
      />
  
      <TouchableOpacity onPress={handleReturnToHome}>
            <Text style={styles.glavnajaTwo}>Главная</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReturnToClient}>
      <Text style={styles.klientyTwo}>Клиенты</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReturnToDogovor}>
        <Text style={styles.dogovoraTwo}>Договора</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={handleReturnToTarif}>
        <Text style={styles.tarifyTwo}>Тарифы</Text>
      </TouchableOpacity>
  
   
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 58,
    bottom: 50,
    
  },
  Client: {
    width: 35,
    height: 40,
    position: "absolute",
    left: 140,
    bottom: 50,
    
  },
  Tarif: {
    width: 45,
    height: 40,
    position: "absolute",
    left: 225,
    bottom: 50,
    
  },
  Dogovor: {
    width: 33,
    height: 38,
    position: "absolute",
    left: 307,
    bottom: 50,
    
  },
  flexWrapperTwo: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  rectangle15: {
    width: 430,
    height: 60,
    backgroundColor: "rgba(111, 75, 204, 1)",
    position: "relative",
  },
  rectangle15Two: {
    width: 430,
    height: 57,
    backgroundColor: "rgba(111, 75, 204, 1)",
    position: "absolute",
    left: 0,
    top: 1,
  },
  rectangle15Three: {
    width: "430px",
    height: "60px",
    backgroundColor: "rgba(111, 75, 204, 1)",
    position: "absolute",
    left: 2,
    top: 1,
  },
  vector: {
    width: "8.53%",
    height: "46.05%",
    position: "absolute",
    left: 18,
    top: 5,
  },
  // Define other styles here

  klientyTwo: {
    height: 20,
    width: 67,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    position: "absolute",
    right: 255,
    bottom: -13, // Adjust the bottom value as needed
  },
  dogovoraTwo: {
    height: 20,
    width: 62,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    position: "absolute",
    right: 170,
    bottom: -13, // Adjust the bottom value as needed
  },
  tarifyTwo: {
      height: 20,
      width: 62,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: "800",
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      position: "absolute",
      right: 92,
      bottom: -13, // Adjust the bottom value as needed
    },
    glavnajaTwo: {
        height: 36,
        width: 64,
        fontFamily: "Open Sans",
        fontSize: 14,
        fontWeight: "800",
        lineHeight: "normal",
        color: "rgba(255, 255, 255, 1)",
        position: "absolute",
        right: 335,
        bottom: -29, // Adjust the bottom value as needed
      },
});

export default Menu;

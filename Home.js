import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu"; // Import the Menu component



const Home = ({ route, navigation }) => {
  const { login } = route.params;
  const handleReturnToLogin = () => {
    navigation.navigate("Login");
  };
  const handleReturnToTarif = () => {
    navigation.navigate("Tarif");
  };
  const handleReturnToDogovor = () => {
    navigation.navigate("Dogovor");
  };
  const handleReturnToClient = () => {
    navigation.navigate("Client");
  };
  const handleReturnToFrame2 = () => {
    navigation.navigate("Frame2");
  };
  moment.locale('ru');
  const currentDate = moment().format("DD MMMM YYYY [год], H:mm");

  return (
    <View style={styles.frame2}>
      <View style={styles.relativeWrapperTwo}>
        <Menu
          navigation={navigation}
          currentDate={currentDate}
          handleReturnToLogin={handleReturnToLogin}
          handleReturnToDogovor={handleReturnToDogovor}
          handleReturnToTarif={handleReturnToTarif}
          handleReturnToClient={handleReturnToClient}
          handleReturnToFrame2={handleReturnToFrame2}
        />
        {/* Include other elements specific to Frame2 */}
      </View>
      <View style={styles.relativeWrapperOne}>
        <View style={styles.flexWrapperOne}>
          <View style={styles.rectangle20} />
          <Text style={styles.dobroPozhalovatUser280923}>
            Добро пожаловать, operator!
          </Text>
          <Text style={styles.num28Sentjabrja2023God955}>
            {currentDate}
          </Text>
          <TouchableOpacity onPress={handleReturnToLogin}>
            <Text style={styles.vernutSjaKOknuVhoda}>Вернуться к окну входа</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
    frame2: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 0,
        flexDirection: "column",
        alignItems: "flex-start",
      },
        relativeWrapperTwo: {
          flexDirection: "row",
          alignItems: "flex-start",
          position: "absolute",
          left: -2,
          top: 868,
        },
        glavnaja: {
          height: 36,
          width: 64,
          fontFamily: "Open Sans",
          fontSize: 14,
          fontWeight: "800",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          position: "absolute",
          left: 11,
          bottom: 0,
        },
        klienty: {
          height: 36,
          width: 276,
          fontFamily: "Open Sans",
          fontSize: 14,
          fontWeight: "800",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          position: "absolute",
          right: 29,
          bottom: 0,
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
    
        vector: {
          width: "8.53%",
          height: "46.05%",
          position: "absolute",
          left: 18,
          top: 5,
        },
        vectorTwo: {
          width: "6.75%",
          height: "39.47%",
          position: "absolute",
          left: 137,
          top: 10,
        },
        folderOpenSolid1: {
          paddingVertical: 2.25,
          paddingHorizontal: 0,
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: 107,
          top: 4,
        },
        vectorThree: {
          flex: 1,
          alignSelf: "stretch",
          resizeMode: "cover",
        },
        vectorFour: {
          width: "6.75%",
          height: "46.05%",
          position: "absolute",
          right: 223,
          top: 5,
        },
        dogovora: {
          height: 36,
          width: 276,
          fontFamily: "Open Sans",
          fontSize: 14,
          fontWeight: "800",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          display: "flex",
          position: "absolute",
          right: 0,
          top: 40,
        },
        tarify: {
          height: 20,
          width: 62,
          fontFamily: "Open Sans",
          fontSize: 14,
          fontWeight: "800",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          display: "flex",
          position: "absolute",
          right: 99,
          top: 40,
        },
        vectorFive: {
          width: "8.53%",
          height: "46.05%",
          position: "absolute",
          left: 46,
          top: 4,
        },
        vectorSix: {
          width: "6.75%",
          height: "39.47%",
          position: "absolute",
          left: 139,
          top: 9,
        },
        folderOpenSolid1Two: {
          paddingVertical: 2.25,
          paddingHorizontal: 0,
          display: "flex",
          alignItems: "center",
          position: "absolute",
          right: 128,
          top: 3,
        },
        fileContractSolid1: {
          overflow: "hidden",
          position: "absolute",
          right: 234,
          top: 4,
        },
        vectorSeven: {
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 1,
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
            right: 75,
            bottom: -13, // Adjust the bottom value as needed
          },
          
        relativeWrapperOne: {
          marginBottom: 63,
          position: "relative",
        },
        num28Sentjabrja2023God955: {
          width: 411,
          fontFamily: "Inter",
          fontSize: 28,
          fontWeight: "700",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          position: "absolute",
          right: -19,
          top: 45,
        },
        flexWrapperOne: {
          backgroundColor: "rgba(111, 75, 204, 1)",
          
          borderRadius: 84,
          padding: 0,
          paddingBottom: 187,
          flexDirection: "column",
          alignItems: "flex-start",
          position: "relative",
          right: 20,
        },
        rectangle20: {
          width: 428,
          height: 79,
          backgroundColor: "rgba(111, 75, 204, 1)",
          marginBottom: 225,
        },
        dobroPozhalovatUser280923: {
          maxWidth: 361,
          fontFamily: "Inter",
          fontSize: 40,
          fontWeight: "800",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          marginBottom: 31,
          marginLeft: 30,
        },
        vernutSjaKOknuVhoda: {
          fontFamily: "Inter",
          fontSize: 24,
          fontWeight: "600",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          fontStyle: "italic",
          marginLeft: 73,
        },
        dljaProdolzhenijaRabotyVyberitePunktUp: {
          maxWidth: 402,
          fontFamily: "Inter",
          fontSize: 24,
          fontWeight: "600",
          lineHeight: "normal",
          color: "rgba(255, 255, 255, 1)",
          fontStyle: "italic",
          marginLeft: 20,
        },
      });
      


export default Home;

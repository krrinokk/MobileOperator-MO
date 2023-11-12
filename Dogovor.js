import React, { useState } from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu";
import { useNavigation } from '@react-navigation/native'; 


const Dogovor = () => {
  moment.locale('ru');
  const currentDate = moment().format("DD MMMM YYYY [год], H:mm");
const navigation = useNavigation();
    const handleReturnToTarif = () => {
        navigation.navigate("Tarif");
      };
      const handleReturnToDogovor = () => {
        navigation.navigate("Dogovor");
      };
      const handleReturnToClient = () => {
        navigation.navigate("Dogovor");
      };
      const handleOpenAddDogovor = () => {
        navigation.navigate("AddDogovor"); 
      };
      const handleReturnToHome = () => {
        navigation.navigate("Home");
      };
      
  return (
    <View style={styles.frame26}>
      <View style={styles.frame3}>
        <View style={styles.frame19}>
          <Text style={styles.glavnaja}>Главная</Text>
          <Text style={styles.dogovora}>Договора</Text>
          <View style={styles.flexWrapperOne}>
            <View style={styles.rectangle15} />
            <View style={styles.rectangle11} />
            <View style={styles.rectangle20} />
            <View style={styles.rectangle21} />
            <Text style={styles.dogovory}>ДОГОВОРЫ</Text>
            
            <Text style={styles.otkrytNovyjTarifnyjPlan}>
              Открыть новый тарифный план
            </Text>
            <View style={styles.rectangle25} />
            <View style={styles.rectangle37} />
            <Image
              source={{
                uri: "https://static.overlay-tech.com/assets/99d3420a-42df-4f4e-a657-968c749a8822.png"
              }}
              style={styles.image6}
            />
            <Text style={styles.dataZakljuchenija}>
              дата заключения
            </Text>
            <Text style={styles.num77686}>
              &#43;7***-***-***
            </Text>
       
            <Text style={styles.nomerKlienta}>
              номер клиента
            </Text>
   
            <Text style={styles.num999}>№</Text>
           
          
           
            
           
           
            
      <View style={styles.menuContainer}>
      <Menu
          navigation={navigation}
          currentDate={currentDate}
          handleReturnToTarif={handleReturnToTarif}
          handleReturnToDogovor={handleReturnToDogovor}
          handleReturnToClient={handleReturnToClient}
          handleReturnToHome={handleReturnToHome}
        />
      </View>
      
          
            <Text style={styles.simCard}>SIM-Card</Text>
    
            <Text style={styles.nomerTarifa}>
              номер тарифа
            </Text>
            <View style={styles.rectangle26} />
            <TouchableOpacity style={styles.dobavit} onPress={handleOpenAddDogovor}>
          <Text style={styles.text}>Добавить</Text>
        </TouchableOpacity>
            <View style={styles.clockSolid1} />
            <View style={styles.rectangle26Two} />
            <Text style={styles.populjarnyjTarif}>
              Популярный тариф
            </Text>
          </View>
        </View>
     
      </View>
    </View>
  );
};
const styles = {
    menuContainer: {
        position: "absolute",
        left: 0,
        bottom: 58,
        width: "100%",
        height: "100%",
      },
    frame26: {
      position: "absolute",
      left: "-3px",
      top: 0,
    },
    frame3: {
      position: "relative",
    },
    frame19: {
      position: "absolute",
      left: "-2px",
      top: 0,
    },
    glavnaja: {
      height: 36,
      width: 64,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      display: "flex",
      position: "absolute",
      left: 39,
      bottom: -15,
    },
    dogovora: {
      height: 36,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      display: "flex",
      position: "absolute",
      right: -63,
      bottom: -16,
    },
    flexWrapperOne: {
      padding: "0 0 15px 2px",
      position: "relative",
    },
    rectangle15: {
      width: 430,
      height: 60,
      backgroundColor: "rgba(111, 75, 204, 1)",
      position: "absolute",
      left: 0,
      bottom: 15,
    },
    rectangle11: {
      width: 428,
      height: 926,
      backgroundColor: "rgba(255, 255, 255, 1)",
      position: "relative",
    },
    rectangle20: {
      width: 428,
      height: 90,
      backgroundColor: "rgba(111, 75, 204, 1)",
      position: "absolute",
      right: 0,
      top: 0,
    },
    rectangle21: {
      width: 363,
      height: 365,
      backgroundColor: "rgba(255, 255, 255, 1)",
      position: "absolute",
      left: 33,
      top: 280,
    },
    dogovory: {
      fontFamily: "Open Sans",
      fontSize: 32,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      position: "absolute",
      left: 114,
      top: 45,
    },
    otkrytNovyjTarifnyjPlan: {
      maxWidth: 248,
      fontFamily: "Inter",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      fontStyle: "italic",
      position: "absolute",
      right: 61,
      bottom: 146,
    },
    rectangle25: {
      width: 393,
      height: 41,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: 40,
      position: "absolute",
      right: 16,
      top: 130,
    },
    rectangle37: {
        width: 343,
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 20,
        position: 'absolute',
        left: 24,
        bottom: 160,
        borderWidth: 6,
        borderColor: 'rgba(246, 246, 246, 1)',
    },
    pngwing14: {
      width: 20,
      height: 20,
      position: "absolute",
      right: 28,
      top: 142,
    },
    pngwing15: {
      width: 36,
      height: 36,
      position: "absolute",
      right: 35,
      top: 132,
    },
    image2: {
      width: 118,
      height: 75,
      position: "absolute",
      left: 41,
      top: 188,
    },
    image6: {
      width: 54,
      height: 53,
      position: "absolute",
      right: 70,
      top: 301,
    },
    dataZakljuchenija: {
      height: 36,
      width: 232,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 51,
      top: 382,
    },
    num77686: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 33,
      top: 446,
    },
    num34: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 38,
      bottom: 393,
    },
    nomerKlienta: {
      height: 36,
      width: 246,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 82,
      bottom: 393,
    },
    num77634349: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 43,
      bottom: 318,
    },
    num021023: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 38,
      top: 382,
    },
    num999: {
      height: 36,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 36,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 38,
      top: 301,
    },
    vector: {
      width: "10%",
      height: "3.72%",
      position: "absolute",
      left: 46,
      bottom: 36,
    },
    vectorTwo: {
      width: "7.91%",
      height: "3.19%",
      position: "absolute",
      left: 139,
      bottom: 36,
    },
    folderOpenSolid1: {
      padding: "2.25px 0",
      position: "absolute",
      right: 54,
      bottom: 36,
    },
    vectorThree: {
      width: "100%",
      height: "100%",
    },
    penSolid1: {
      padding: "0.03px 0.03px 0 0",
      position: "absolute",
      right: 75,
      bottom: 253,
    },
    fileContractSolid1: {
      overflow: "hidden",
      position: "absolute",
      right: 160,
      bottom: 36,
    },
    vectorFour: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 1,
    },
    klienty: {
      height: 36,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      display: "flex",
      position: "absolute",
      right: 29,
      bottom: 0,
    },
    tarify: {
      height: 20,
      width: 62,
      fontFamily: "Open Sans",
      fontSize: 14,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(255, 255, 255, 1)",
      display: "flex",
      position: "absolute",
      right: 46,
      bottom: 16,
    },
    simCard: {
      height: 36,
      width: 246,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 17,
      bottom: 317,
    },
    num34Two: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 44,
      bottom: 249,
    },
    nomerTarifa: {
      height: 36,
      width: 246,
      fontFamily: "Open Sans",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 76,
      bottom: 249,
    },
    rectangle26: {
      width: 33,
      height: 31,
      backgroundColor: "rgba(241, 241, 241, 1)",
      borderRadius: 40,
      position: "absolute",
      left: 30,
      top: 196,
    },
    dobavit: {
      height: 36,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 20,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 71,
      top: 200,
    },
    text: {
        height: 36,
        width: 276,
        fontFamily: "Open Sans",
        fontSize: 20,
        fontWeight: 800,
        lineHeight: "normal",
        color: "rgba(30, 30, 30, 1)",
        display: "flex",
        position: "absolute",
   
      },
    clockSolid1: {
      width: 39,
      height: 34,
      position: "absolute",
      left: 35,
      top: 230,
    },
    rectangle26Two: {
      width: 33,
      height: 31,
      backgroundColor: "rgba(241, 241, 241, 1)",
      borderRadius: 40,
      position: "absolute",
      left: 30,
      top: 132,
    },
    populjarnyjTarif: {
      height: 36,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 20,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 73,
      top: 137,
    },
    image8: {
      width: 183,
      height: 17,
      position: "absolute",
      right: -166,
      top: 264,
    },
  };
  
export default Dogovor;

import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu";

moment.locale('ru');
const currentDate = moment().format("DD MMMM YYYY [год], H:mm");

const Client = ({ navigation }) => {
  const handleReturnToTarif = () => {
    navigation.navigate("Tarif");
  };
  const handleReturnToDogovor = () => {
    navigation.navigate("Dogovor");
  };
  const handleAddClick = () => {
    navigation.navigate("AddClient");
  };
  const handleReturnToClient = () => {
    navigation.navigate("Client");
  };
  const handleReturnToFrame2 = () => {
    navigation.navigate("Frame2");
  };
  return (
    <View style={styles.frame26}>
      <View style={styles.frame3}>
        <View style={styles.frame19}>
          <View style={styles.flexWrapperOne}>
            <View style={styles.rectangle15} />
            <View style={styles.rectangle11} />
            <View style={styles.rectangle20} />
            <View style={styles.rectangle21} />
            <Text style={styles.clients}>КЛИЕНТСКАЯ БАЗА</Text>
            <Text style={styles.otkrytNovyjTarifnyjPlan}>Открыть новый тарифный план</Text>
            <View style={styles.rectangle25} />
            <View style={styles.pngwing14} />
            <View style={styles.pngwing15} />
            <View style={styles.rectangle26} />
            <View style={styles.rectangle37} />

          
       
            <Text style={styles.balance}>
             Р
            </Text>
   
            <Text style={styles.num999}>№</Text>
           
          
            <Image
              style={styles.pngwing19}
              source={{ uri: "https://static.overlay-tech.com/assets/37f29226-098f-4176-95b7-4d2dc6f94c4d.png" }}
            />

            <Image
              style={styles.image2}
              source={{ uri: "https://static.overlay-tech.com/assets/9007b6c4-bdfa-4877-ba7e-2201a3be44ab.png" }}
            />
            <Image
              style={styles.image3}
              source={{ uri: "https://static.overlay-tech.com/assets/b515bfad-d66c-478d-8bc1-455b5317afe4.png" }}
            />
            <Text style={styles.not_active}>Неактивные</Text>
            <Text style={styles.active}>Активные</Text>
         

            <TouchableOpacity style={styles.button} onPress={handleAddClick}>
              <Text style={styles.dobavit}>Добавить</Text>
            </TouchableOpacity>

            <Text style={styles.vvediteNazvanieTarifa}>Введите ФИО клиента...</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <Menu
          navigation={navigation}
          currentDate={currentDate}
          handleReturnToTarif={handleReturnToTarif}
          handleReturnToClient={handleReturnToClient}
          handleReturnToDogovor={handleReturnToDogovor}
          handleReturnToFrame2={handleReturnToFrame2}
        />
      </View>
      <View style={styles.flexWrapperTwo}>
        <View style={styles.rectangle15Two} />
       
       
        <View style={styles.folderOpenSolid1Two}>
        
        </View>
        <View style={styles.fileContractSolid1}>
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    left: 0,
    bottom: -870,
    width: "100%",
    height: "100%",
  },
  num999: {
    height: 36,
    width: 276,
      lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 55,
    top: 381,
    fontFamily: "Open Sans",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: "normal",
    right: 77,
    color: "rgba(30, 30, 30, 1)",
  },
  balance: {
    height: 36,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 245,
    top: 581,
  },
  frame26: {
    marginLeft: -3,
    position: "relative",
  },
  rectangle37: {
    width: 343,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    position: 'absolute',
    left: 32,
    top: 360,
    
    borderWidth: 6,
    borderColor: 'rgba(246, 246, 246, 1)',
  },
  frame3: {
    position: "relative",
  },
  frame19: {
    position: "absolute",
    left: -2,
    top: 0,
  },
  glavnaja: {
    height: 36,
    width: 64,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    display: "flex",
    position: "absolute",
    left: 9,
    bottom: -15,
  },
  klienty: {
    height: 36,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    display: "flex",
    position: "absolute",
    right: 33,
    bottom: -15,
  },
  flexWrapperOne: {
    padding: 0,
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
    left: 2,
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
  clients: {
    fontFamily: "Open Sans",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    position: "absolute",
    left: 45,
    top: 47,
  },
  otkrytNovyjTarifnyjPlan: {
    maxWidth: 248,
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(255, 255, 255, 1)",
    fontStyle: "italic",
    position: "absolute",
    left: 121,
    bottom: 146,
  },
  rectangle25: {
    width: 393,
    height: 41,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 40,
    position: "absolute",
    left: 21,
    top: 130,
  },
  pngwing14: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 100,
    top: 142,
  },
  pngwing15: {
    width: 36,
    height: 36,
    position: "absolute",
    right: 107,
    top: 132,
  },
  rectangle26: {
    width: 393,
    height: 41,
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderRadius: 40,
    position: "absolute",
    left: 21,
    top: 119,
  },
  pngwing19: {
    width: 34.32,
    height: 34.32,
    position: "absolute",
    right: 98.68,
    top: 122.68,
  },
  image1: {
    width: 406,
    height: 491,
    position: "absolute",
    left: 12,
    bottom: 176,
  },
  rectangle27: {
    width: 354,
    height: 442,
    backgroundColor: "rgba(255, 255, 255, 1)",
    position: "absolute",
    left: 41,
    bottom: 198,
  },
  image2: {
    width: 157,
    height: 28,
    position: "absolute",
    left: 215,
    top: 240,
  },
  image3: {
    width: 157,
    height: 28,
    position: "absolute",
    left: 27,
    top: 240,
  },
  not_active: {
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(0, 0, 0, 1)",
    position: "absolute",
    right: 63,
    top: 210,
  },
  active: {
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    position: "absolute",
    left: 44,
    top: 210,
  },
  image6: {
    width: 54,
    height: 53,
    position: "absolute",
    right: 90,
    top: 301,
  },
  button: {
    height: 36,
    width: 276,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    display: "flex",
    position: "absolute",
    right: 15,
    top: 175,
    justifyContent: "center",
    alignItems: "center",
  },
  dobavit: {
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: "normal",
    right: 77,
    color: "rgba(30, 30, 30, 1)",
  },
  vvediteNazvanieTarifa: {
    height: 36,
    width: 247,
    fontFamily: "Open Sans",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(143, 133, 133, 1)",
    display: "flex",
    position: "absolute",
    left: 44,
    top: 130,
  },
});

export default Client;
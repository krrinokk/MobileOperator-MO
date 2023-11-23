import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu";
import { Card } from 'react-native-elements';

moment.locale('ru');
const currentDate = moment().format("DD MMMM YYYY [год], H:mm");

const Client = ({ navigation }) => {
  const [cardData, setCardData] = useState([
    {
      isEditing: false,

    },
  ]);
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode 
  const [cardCount, setCardCount] = useState(1); // State to track the number of cards

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
  const handleRedactirovatClick = (index) => {
    const updatedCardData = [...cardData];
    updatedCardData[index].isEditing = !updatedCardData[index].isEditing;
    setCardData(updatedCardData);
  };
  const handleDeleteClick = (index) => {
    setCardData((prevCardData) => {
      const updatedCardData = [...prevCardData];
      updatedCardData.splice(index, 1); // Remove the card at the specified index
      return updatedCardData;
    });
  };

  const handleAdd1Click = () => {
    const newCard = {
      isEditing: true, // Set isEditing to true for the newly added card
      balance: "",
      fio: "",
      num999: "",
    };
  
    setCardData((prevCardData) => [newCard, ...prevCardData]);
    setCardCount(cardCount + 1);
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
            {/* <View style={styles.rectangle37} /> */}
           
            <View style={styles.cardForContainer}>
  <ScrollView style={styles.cardScrollView} contentContainerStyle={styles.cardScrollContainer}>
    {cardData.map((card, index) => (
      <Card key={index} containerStyle={styles.cardContainer}>
        <Text style={styles.balance}>Р</Text>
        <Text style={styles.num999}>№</Text>
        <TouchableOpacity onPress={() => handleRedactirovatClick(index)}>
          <Image
            style={styles.redactirovat}
            source={{ uri: "https://i.ibb.co/fvWPsby/image.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteClick(index)}>
              <Image
                style={styles.delete}
                source={{ uri: "https://i.ibb.co/SVmDTwG/pngwing-com-8.png" }}
              />
            </TouchableOpacity>
        {card.isEditing ? (
          <>
            <TextInput
              style={styles.inputBalance}
              onBlur={() => setIsEditing(false)}
            />
            <TextInput
              style={styles.inputFIO}
              onBlur={() => setIsEditing(false)}
            />
            <TextInput
              style={styles.inputnum999}
              onBlur={() => setIsEditing(false)}
            />
          </>
        ) : null}
      </Card>
    ))}
  </ScrollView>
</View>

       

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
         

            <TouchableOpacity style={styles.button} onPress={handleAdd1Click}>
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
  inputBalance: {
    height: 40,
    width: 130,
    borderWidth: 2, // Толщина рамки
    borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
    borderRadius: 100, // Закругленные углы рамки
    borderColor: "black",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "800",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 10,
    top: 250,
  },
  inputFIO: {
    height: 40,
    width: 290,
    borderWidth: 2, // Толщина рамки
    borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
    borderRadius: 100, // Закругленные углы рамки
    borderColor: "black",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "800",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 15,
    top: 140,
  },
  inputnum999: {
    height: 40,
    width: 130,
    borderWidth: 2, // Толщина рамки
    borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
    borderRadius: 100, // Закругленные углы рамки
    borderColor: "black",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "800",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 60,
    top: 30,
  },
 redactirovat: {
    width: 45,
    height: 45,
    position: "absolute",
    left: 265,
    top: 10,
  },
 delete: {
    width: 45,
    height: 45,
    position: "absolute",
    left: 265,
    top: 280,
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cardForContainer: {
    width: 400,
    height: 500,
    position: 'absolute',
    left: 0,
    top: 270,
  },
  cardScrollView: {
    flex: 1,
  },
  cardScrollContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContainer: {
    width: 360,
    height: 380,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    borderWidth: 6,
    borderColor: 'rgba(246, 246, 246, 1)',
  },
  menuContainer: {
    position: "absolute",
    left: 0,
    bottom: -870,
    width: "100%",
    height: "100%",
  },
  num999: {
    height: 36,
    width: 45,
      lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 5,
    top: 30,
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
    left: 155,
    top: 250,
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

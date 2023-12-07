import React, { useState,  useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu";
import { Card } from 'react-native-elements';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const Dogovor = () => {
  const route = useRoute(); // use useRoute hook to get access to route object
  const [mostPopularTariffText, setMostPopularTariffText] = useState(""); // New state for the most popular tariff text
  const { login } = route.params || {};
  const [cardData, setCardData] = useState([
    {
    
    },
  ]);

    const getDogovors = async () => {
      try {
        const response = await axios.get("http://172.20.10.9:5050/api/Dogovors");
        const fetchedCardData = response.data;
  
        const mostPopularTariffText = getMostPopularTariff(fetchedCardData);
        setMostPopularTariffText(mostPopularTariffText);
        setCardData(fetchedCardData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    useEffect(() => {
    getDogovors();
  }, []);
  const renderCardContent = (договор, index) => (
    
    <View>
      <Text style={styles.num999} >№ {договор.номер_договора}</Text>
      <Text style={styles.dataZakljuchenija}>
  {` ${new Date(договор.дата_заключения).toLocaleDateString()} дата заключения`}
</Text>

<Text style={styles.dataRastorzhenia}>
  {`${new Date(договор.дата_расторжения).toLocaleDateString()} дата расторжения`}
</Text>

<TouchableOpacity onPress={() =>  handleDeleteClick(договор.номер_договора, index)}>
              <Image
                style={styles.delete}
                source={{ uri: "https://i.postimg.cc/2y6kh701/pngwing-com-8.png" }}
              />
            </TouchableOpacity>
      <Text style={styles.num77686} >+ {договор.номер_телефона}</Text>
      <Text style={styles.simCard} >{договор. серийный_номер_сим_карты} - SIM-Card</Text>
      <Text style={styles.nomerKlienta} >№ {договор.номер_клиента_FK} клиента</Text>
      <Text style={styles.nomerTarifa} >№ {договор.код_тарифа_FK} тарифа</Text>
    </View>
  );
 
  const [cardCount, setCardCount] = useState(1); // State to track the number of cards
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode 
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
        navigation.navigate("Client");
      };

      const handleReturnToHome = () => {
        navigation.navigate("Home", { login });
      };
      const handleRedactirovatClick = (index) => {
        const updatedCardData = [...cardData];
        updatedCardData[index].isEditing = !updatedCardData[index].isEditing;
        setCardData(updatedCardData);
      };
      const handleDeleteClick = async (номер_договора, index) => {
        try {
          const response = await fetch(`http://172.20.10.9:5050/api/dogovors/${номер_договора}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            console.log('Договор успешно удален на сервере');
            await getDogovors();
            setCardData((prevCardData) => {
              const updatedCardData = [...prevCardData];
              updatedCardData.splice(index, 1);
              return updatedCardData;
            });
          } else {
            console.error('Ошибка при удалении договора на сервере:', response.status);
          }
        } catch (error) {
          console.error('Ошибка при отправке запроса:', error.message);
        }
      };
    
    
      const handleAddClick = () => {
        navigation.navigate("AddDogovor");
      };
      const getMostPopularTariff = (data) => {
        const tariffMap = new Map();
        data.forEach(dogovor => {
          const tariffCode = dogovor.код_тарифа_FK;
          if (tariffMap.has(tariffCode)) {
            tariffMap.set(tariffCode, tariffMap.get(tariffCode) + 1);
          } else {
            tariffMap.set(tariffCode, 1);
          }
        });
      
        let maxTariffCode;
        let maxTariffCount = 0;
      
        tariffMap.forEach((count, code) => {
          if (count > maxTariffCount) {
            maxTariffCode = code;
            maxTariffCount = count;
          }
        });
      
        return `Популярный тариф №${maxTariffCode} \n подключений - ${maxTariffCount}`;
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
      
      <View style={styles.cardForContainer}>
      <ScrollView style={styles.cardScrollView} contentContainerStyle={styles.cardScrollContainer}>
                {cardData.map((card, index) => (
                  <Card key={index} containerStyle={styles.cardContainer}>
                   {renderCardContent(card)}
             
      



           
      </Card>
        ))}
              </ScrollView>
              </View>    
           
         
            <View style={styles.rectangle26} />
            <TouchableOpacity style={styles.dobavit} onPress={handleAddClick}>
          <Text style={styles.text}>Заключить договор</Text>
        </TouchableOpacity>
            <View style={styles.clockSolid1} />
            <View style={styles.rectangle26Two} />
            <Text style={styles.populjarnyjTarif}>
            {mostPopularTariffText}
            </Text>
          </View>
        </View>
     
      </View>
    </View>
  );
};
const styles = {
  delete: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 275,
    top: 390,
  },
  inputdataZakljuchenija: {
    height: 40,
    width: 105,
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
    right: 210,
      top: 65,
  },
  inputnomerKlienta: {
    height: 40,
    width: 90,
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
    right: 225,
    top: 185,
  },
  inputnomerTarifa: {
    height: 40,
    width: 95,
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
    right: 220,
    top: 330,
  },
  inputsimCard: {
    height: 40,
    width: 120,
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
    right: 195,
    top: 260,
  },
  inputnum77686: {
    height: 40,
    width: 250,
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
    left: 33,
      top: 126,
  },
  inputnum999: {
    height: 40,
    width: 100,
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
    left: 65,
    top: 0,
  },
  redactirovat: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 275,
    top: 0,
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
    height: 525,
    position: 'absolute',
    left: 0,
    top: 250,
  
   
  },
  cardScrollView: {
    flex: 1,
  },
  cardScrollContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContainer: {
  
    width: 350,
  
    height: 470,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    borderWidth: 6,
    borderColor: 'rgba(246, 246, 246, 1)',
  },
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
      height: 120,
      width: 302,
      fontFamily: "Open Sans",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 15,
      top: 70,
    },
    dataRastorzhenia: {
      height: 120,
      width: 302,
      fontFamily: "Open Sans",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      right: 10,
      top: 125,
    },
    num77686: {
      height: 36,
      width: 247,
      fontFamily: "Open Sans",
      fontSize: 28,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 43,
      top: 173,
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
      right: 60,
      top: 235,
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
      bottom: 310,
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
      width: 130,
      fontFamily: "Open Sans",
      fontSize: 36,
      fontWeight: 800,
      lineHeight: "normal",
      color: "rgba(30, 30, 30, 1)",
      display: "flex",
      position: "absolute",
      left: 10,
      top: 10,
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
      right: 60,
      top: 290,
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
      right: 60,
      top: 355,
    },
    rectangle26: {
      width: 33,
      height: 31,
      backgroundColor: "rgba(111, 75, 204, 1)",
      borderRadius: 40,
      position: "absolute",
      left: 30,
      top: 215,
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
      top: 216,
    },
    text: {
        height: 36,
        width: 276,
        fontFamily: "Open Sans",
        fontSize: 24,
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
      backgroundColor: "rgba(111, 75, 204, 1)",
      borderRadius: 40,
      position: "absolute",
      left: 30,
      top: 136,
    },
    populjarnyjTarif: {
      height: 50,
      width: 276,
      fontFamily: "Open Sans",
      fontSize: 18,
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

import React, { useState,  useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";

import moment from "moment";
import 'moment/locale/ru';
import Menu from "./Menu";
import { Card } from 'react-native-elements';
import axios from 'axios';
moment.locale('ru');
const currentDate = moment().format("DD MMMM YYYY [год], H:mm");

const Tarif = ({ navigation }) => {
  const [originalCardData, setOriginalCardData] = useState([]);
  const [cardData, setCardData] = useState([
    {
      isEditing: false,
    
    },
  ]);
  const [filterStatus, setFilterStatus] = useState('unlocked'); // Добавлено состояние для фильтрации
  const filteredТарифs = cardData.filter((тариф) => {
    if (filterStatus === 'all') {
      return true;
    } else if (filterStatus === 'locked') {
      return тариф.статус === 'Locked';
    } else if (filterStatus === 'unlocked') {
      return тариф.статус === 'Unlocked';
    }
    return false;
  });

  useEffect(() => {
    const getTarifs = async () => {
      try {
        const response = await axios.get("http://172.20.10.9:5050/api/Тарифs");
        setCardData(response.data);
        setOriginalCardData(response.data); // Save the original data
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
   
    getTarifs();
  }, []);
// Функция поиска тарифа по названию
const searchТариф = (value) => {
  const lowercaseValue = value.toLowerCase();
  if (lowercaseValue === '') {
    setCardData(originalCardData); // Reset to original data when input is empty
  } else {
    const filteredData = originalCardData.filter(
      (тариф) => тариф.название_тарифа.toLowerCase().includes(lowercaseValue)
    );
    setCardData(filteredData);
  }
};

  
  const renderCardContent = (тариф) => (
    <View>
      <Text style={styles.num999} >№ {тариф.код_тарифа}</Text>
      <Text style={styles.bezlimit} > {тариф.название_тарифа}</Text>
      <Text style={styles.minutaTown}>{тариф.минута_межгород_стоимость} Р за минуту{"\n"}между городами</Text>
      <Text style={styles.minutaRouming}>{тариф.минута_международная_стоимость} Р за минуту{"\n"}в роуминге</Text>
           <Text style={styles.Cost}>{тариф.стоимость_перехода} Р/месяц</Text>
    </View>
  );
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode 
  const [cardCount, setCardCount] = useState(1); // State to track the number of cards
  const handleReturnToHome = () => {
    navigation.navigate("Home");
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
  const handleRedactirovatClick = (index) => {
    const updatedCardData = [...cardData];
    updatedCardData[index].isEditing = !updatedCardData[index].isEditing;
    setCardData(updatedCardData);
  };
  const handleDeleteClick = async (код_тарифа, index) => {
    try {
      const response = await fetch(`http://172.20.10.9:5050/api/тарифs/${код_тарифа}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Тариф успешно удален на сервере');
        await getКлиентs();
        setCardData((prevCardData) => {
          const updatedCardData = [...prevCardData];
          updatedCardData.splice(index, 1);
          return updatedCardData;
        });
      } else {
        console.error('Ошибка при удалении тарифа на сервере:', response.status);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error.message);
    }
  };


  const handleAdd1Click = () => {
    navigation.navigate("AddTarif");
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
            <Text style={styles.tarifnyePlany}>ТАРИФНЫЕ ПЛАНЫ</Text>
            <Text style={styles.otkrytNovyjTarifnyjPlan}>Открыть новый тарифный план</Text>
            <View style={styles.rectangle25} />
            <View style={styles.pngwing14} />
            <View style={styles.pngwing15} />
            <View style={styles.poisk} />
       


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
             <Text style={styles.arhivnye} onPress={() => setFilterStatus('locked')}>
       Архивные
      </Text>
      <Text style={styles.aktivnye} onPress={() => setFilterStatus('unlocked')}>
        Активные
      </Text>
         

          
            <TouchableOpacity style={styles.button} onPress={handleAdd1Click}>
              <Text style={styles.dobavit}>Добавить</Text>
            </TouchableOpacity>
         
            <TextInput
  style={styles.vvediteNazvanieTarifa}
  onChangeText={(text) => {
    searchТариф(text);
  }}
  placeholder="Введите название тарифа..."
/>
          </View>
        </View>
      </View>

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
          {filteredТарифs.map((card, index) => (

                  <Card key={index} containerStyle={styles.cardContainer}>
                   {renderCardContent(card)}
              
        <TouchableOpacity onPress={() => handleDeleteClick(тариф.код_тарифа, index)}>
              <Image
                style={styles.delete}
                source={{ uri: "https://i.postimg.cc/2y6kh701/pngwing-com-8.png" }}
              />
            </TouchableOpacity>
               
            <Text style={styles.minutaTown}>
          
            </Text>
            <Text style={styles.minutaRouming}>
          
            </Text>
         
            {card.isEditing ? (
                  <>
                  <TextInput
                    style={styles.inputminutaTown}
             
                    onBlur={() => setIsEditing(false)}
                  />
                    <TextInput
                    style={styles.inputNumber}
             
                    onBlur={() => setIsEditing(false)}
                  />
                  <TextInput
                    style={styles.inputminutaRouming}
                   
                    onBlur={() => setIsEditing(false)}
                  />
                    <TextInput
                    style={styles.inputCost}
                   
                    onBlur={() => setIsEditing(false)}
                  />
             </>
        ) : null}
      </Card>
    ))}
              </ScrollView>
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
  num999: {
    height: 36,
    width: 90,
      lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 5,
    top: 0,
    fontFamily: "Open Sans",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: "normal",
    right: 77,
    color: "rgba(30, 30, 30, 1)",
  },
  delete: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 275,
    top: 370,
  },
  inputNumber: {
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
    left: 40,
    top: 10,
  },
  inputminutaRouming: {
    height: 40,
    width: 110,
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
    left: 0,
    top: 240,
  },
  inputminutaTown: {
    height: 40,
    width: 110,
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
    left: 0,
    top: 145,
  },
  inputCost: {
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
    left: 0,
    top: 351,
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
    height: 500,
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
    width: 360,
    height: 450,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    borderWidth: 6,
    borderColor: 'rgba(246, 246, 246, 1)',
  },
  Cost: {
    height: 60,
    width: 270,
      lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 10,
    top: 331,
    fontFamily: "Open Sans",
    fontSize: 36,
    fontWeight: "800",
    lineHeight: "normal",
   
    color: "rgba(30, 30, 30, 1)",
  },
  bezlimit: {
    height: 36,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 33,
    fontWeight: "800",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 15,
    top: 80,
  },
  vnutriSeti: {
    height: 36,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 155,
    top: 80,
  },
  minutaTown: {
    height: 70,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 125,
    top: 145,
  },
  minutaRouming: {
    height: 70,
    width: 276,
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 125,
    top: 240,
  },
  menuContainer: {
    position: "absolute",
    left: 0,
    bottom: -870,
    width: "100%",
    height: "100%",
  },
  frame26: {
    marginLeft: -3,
    position: "relative",
  },
  rectangle37: {
    width: 343,
    height: 500,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    position: 'absolute',
    left: 32,
    bottom: 160,
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
  tarifnyePlany: {
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
  poisk: {
    width: 360,
    height: 41,
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderRadius: 40,
    position: "absolute",
    left: 21,
    top: 119,
  },
  pngwing19: {
    width: 33,
    height: 32,
    position: "absolute",
    right: 58.68,
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
  arhivnye: {
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "normal",
    color: "rgba(0, 0, 0, 1)",
    position: "absolute",
    right: 80,
    top: 210,
  },
  aktivnye: {
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
    right: 80,
    color: "rgba(30, 30, 30, 1)",
  },
  vvediteNazvanieTarifa: {
    height: 40,
    width: 290,
 
    borderColor: "black",
    fontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: "800",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 44,
    top: 120,
  },
});

export default Tarif;

import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import moment from "moment";
import 'moment/locale/ru';
import { Card } from 'react-native-elements';
import Menu from './Menu'
import axios from 'axios';
moment.locale('ru');
const currentDate = moment().format("DD MMMM YYYY [год], H:mm");

const Client = ({ navigation, setКлиентs, }) => {
  const [cardData, setCardData] = useState([]);
  const [originalCardData, setOriginalCardData] = useState([]);
  const existingCard = {
    isEditing: true,
    баланс: '',
    фио: '',
    номер_клиента: '',
  };
  const [filterStatus, setFilterStatus] = useState('Активные'); // Добавлено состояние для фильтрации

  const filteredКлиентs = cardData.filter((клиент) => {
    if (filterStatus === 'Активные') {
      return клиент.баланс > 0;
    } else if (filterStatus === 'Неактивные') {
      return клиент.баланс <= 0;
    }
    return false;
  });
  //Функция поиска тарифа по названию
  const searchКлиент = (value) => {
    const lowercaseValue = value.toLowerCase();
    if (lowercaseValue === '') {
      setCardData(originalCardData); // Reset to original data when input is empty
    } else {
      const filteredData = originalCardData.filter(
        (клиент) => клиент.фио.toLowerCase().includes(lowercaseValue)
      );
      setCardData(filteredData);
    }
  };
  
  useEffect(() => {
    const getКлиентs = async () => {
      try {
        const response = await axios.get("http://172.20.10.9:5050/api/Клиентs");
        setCardData(response.data);
        setOriginalCardData(response.data); // Save the original data
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    getКлиентs();
  }, []);

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

  const  handleAddClick = () => {
    navigation.navigate("AddClient");
  };


  const handleRedactirovatClick = async (номер_клиента, index) => {
    try {
      const клиент = cardData[index];
  
    
      const response = await fetch(`http://172.20.10.9:5050/api/клиентs/${номер_клиента}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache', // Add this header to prevent caching
  },
  body: JSON.stringify({
    баланс: клиент.баланс,
    фио: клиент.фио,
    номер_клиента: клиент.номер_клиента,
    // Include other fields as needed
  }),
});

if (response.ok) {
  console.log('Клиент успешно обновлен на сервере');
  // Refresh data from the server
} else {
  console.error('Ошибка при обновлении клиента на сервере:', response.status);
}

  
      // Toggle isEditing property
      setCardData((prevCardData) => {
        const updatedCardData = [...prevCardData];
        updatedCardData[index].isEditing = !клиент.isEditing;
        return updatedCardData;
      });
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error.message);
    }
  };
  
  
  

  const handleDeleteClick = async (номер_клиента, index) => {
    try {
      const response = await fetch(`http://172.20.10.9:5050/api/клиентs/${номер_клиента}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Клиент успешно удален на сервере');
        await getКлиентs();
        setCardData((prevCardData) => {
          const updatedCardData = [...prevCardData];
          updatedCardData.splice(index, 1);
          return updatedCardData;
        });
      } else {
        console.error('Ошибка при удалении клиента на сервере:', response.status);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error.message);
    }
  };


  const handleAdd1Click = async () => {
    // Check if the first card is already in editing mode
    if (cardData.length > 0 && cardData[0].isEditing) {
      // Send request to save data
      const newCard = cardData[0];
  
      try {
        const response = await fetch('http://172.20.10.9:5050/api/клиентs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCard),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('Клиент успешно добавлен на сервере:', responseData);
          // Refresh data from the server
          await getКлиентs();
        } else {
          console.error('Ошибка при добавлении клиента на сервер:', response.status);
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error.message);
      }
    }
  
    // Add a new card with input fields to the state at the beginning
    const newCard = {
      баланс: '', // Empty or default value for баланс
      фио: '', // Empty or default value for фио
      номер_клиента: '', // Empty or default value for номер_клиента
    };
  
    // Display the new card at the top
    setCardData((prevCardData) => [newCard, ...prevCardData]);
  };
  




  const renderCardContent = (клиент, index) => (
    <View>
        
  
          <TouchableOpacity onPress={() => handleDeleteClick(клиент.номер_клиента, index)}>
            <Image
              style={styles.delete}
              source={{ uri: 'https://i.postimg.cc/2y6kh701/pngwing-com-8.png' }}
            />
          </TouchableOpacity>
      {клиент.isEditing ? (
        <>
         <TextInput
  style={styles.inputBalance}
  onChangeText={(text) => {
    setCardData((prevCardData) => {
      const updatedCardData = [...prevCardData];
      updatedCardData[index].баланс = text;
      return updatedCardData;
    });
  }}
  value={клиент.баланс}
  keyboardType="numeric"
/>
<TextInput
  style={styles.inputFIO}
  onChangeText={(text) => {
    setCardData((prevCardData) => {
      const updatedCardData = [...prevCardData];
      updatedCardData[index].фио = text;
      return updatedCardData;
    });
  }}
  value={клиент.фио}
/>
<TextInput
  style={styles.inputnum999}
  onChangeText={(text) => {
    setCardData((prevCardData) => {
      const updatedCardData = [...prevCardData];
      updatedCardData[index].номер_клиента = text;
      return updatedCardData;
    });
  }}
  value={клиент.номер_клиента}
  keyboardType="numeric"
/>
        </>
      ) : (
        <>
          <Text style={styles.num999}>№ {клиент.номер_клиента}</Text>
          <Text style={styles.balance}>{клиент.баланс} Р</Text>
          <Text style={styles.fio}>{клиент.фио}</Text>
  
        
        </>
      )}
    </View>
  );
  
  
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
            <Text style={styles.not_active} onPress={() => setFilterStatus('Неактивные')}>
        Неактивные
      </Text>
      <Text style={styles.active} onPress={() => setFilterStatus('Активные')}>
        Активные
      </Text>
            <View style={styles.cardForContainer}>
            <ScrollView style={styles.cardScrollView} contentContainerStyle={styles.cardScrollContainer}>
  {[...filteredКлиентs, ...cardData.filter((card) => !filteredКлиентs.includes(card))].map((card, index) => (
    <Card key={index} containerStyle={styles.cardContainer}>
      {renderCardContent(card, index)}
      
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
   

            <TouchableOpacity style={styles.button} onPress={handleAddClick}>
              <Text style={styles.dobavit}>Добавить</Text>
            </TouchableOpacity>

            <TextInput
  style={styles.inputFIO}
  onChangeText={(text) => {
    searchКлиент(text);
  }}
  placeholder="Введите ФИО клиента..."
/>
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
    width: 40,
    height: 40,
    position: "absolute",
    left: 275,
    top: 10,
  },
 delete: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 275,
    top: 290,
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
    width: 90,
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
  fio: {
    height: 36,
    width: 300,
      lineHeight: "normal",
    color: "rgba(30, 30, 30, 1)",
    display: "flex",
    position: "absolute",
    left: 5,
    top: 150,
    fontFamily: "Open Sans",
    fontSize: 24,
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
    top: 220,
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

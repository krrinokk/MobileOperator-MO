import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AddClient = ({ addКлиент }) => {

  const [номер_клиента, setНомерКлиента] = useState(""); // состояние номера клиента
  const [баланс, setБаланс] = useState(""); // состояние баланса клиента
  const [фио, setФИО] = useState(""); // состояние ФИО клиента
  const navigation = useNavigation();

  const goBackToClient = () => {
    navigation.navigate('Client');
  };

  const handleAddClick = async () => {
    const Клиент = {
      номер_клиента,
      баланс,
      фио,
    };
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Клиент),
    };
  
    try {
      const response = await fetch("http://172.20.10.9:5050/api/клиентs/", requestOptions);
  
      if (!response.ok) {
        // Check for an error status and handle it
        console.error('Ошибка при добавлении клиента на сервер:', response.status);
        const errorText = await response.text();
        console.log('Error response text:', errorText);
        return;
      }
  
      const data = await response.json();
  
      console.log(data);
  
      // If response is successful, call addКлиент function
      addКлиент(data);
    } catch (error) {
      // Handle general errors
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  
    return (
        <View>

          <View style={styles.flexWrapperOne}>
          
            <View style={styles.rectangle11} />
            <View style={styles.rectangle20} />
          
            <Text style={styles.tarifnyePlany}>КЛИЕНТСКАЯ БАЗА</Text>
            <View style={styles.rectangle15Two} />
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/b8f74e51-8ed7-46b7-8ab6-797e9b88ac1e.svg",
              }}
              style={styles.vector}
            />
           
      

           <View style={styles.rectangle32} />

<TouchableOpacity onPress={handleAddClick}>
<Text style={styles.podkljuchit}>Добавить</Text>
</TouchableOpacity>

         
           <View style={styles.rectangleNazad} />

<TouchableOpacity onPress={goBackToClient}>
<Text style={styles.nazad}>Назад</Text>
</TouchableOpacity>
            
            <Text style={styles.dobavlenieClienta}>Добавление клиента</Text>
         
       
          
        
         
            <TextInput
  style={styles.input_balance}
  value={баланс}
  onChangeText={(text) => setБаланс(text)}
  keyboardType="numeric"
/>
<TextInput
  style={styles.input_FIO}
  value={фио}
  onChangeText={(text) => setФИО(text)}
/>
<TextInput
  style={styles.input_nomerClienta}
  value={номер_клиента}
  onChangeText={(text) => setНомерКлиента(text)}
  keyboardType="numeric"
/>

     

            <Text style={styles.nomerClienta}>номер {"\n"} клиента</Text>
            <Text style={styles.balance}>первоначальный баланс{"\n"}клиента</Text>
            
          </View>
        </View>
      );
    };

            const styles = StyleSheet.create({
             
               
                    input_balance: {
                      height: 33,
                      width: 100,
                      borderWidth: 2, // Толщина рамки
                      borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
                      borderRadius: 20, // Закругленные углы рамки
                      borderColor: "rgba(111, 75, 204, 1)",
                      fontFamily: "Open Sans",
                      fontSize: 20,
                      fontWeight: "800",
                      color: "rgba(30, 30, 30, 1)",
                      display: "flex",
                      position: "absolute",
                      right: 270,
                      top: 390,
                      },
                      input_nomerClienta: {
                        height: 33,
                        width: 100,
                        borderWidth: 2, // Толщина рамки
                        borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
                        borderRadius: 20, // Закругленные углы рамки
                        borderColor: "rgba(111, 75, 204, 1)",
                        fontFamily: "Open Sans",
                        fontSize: 20,
                        fontWeight: "800",
                        color: "rgba(30, 30, 30, 1)",
                        display: "flex",
                        position: "absolute",
                        right: 270,
                        top: 307,
                        },
                  input_FIO: {
                    height: 36,
                    width: 236,
                    borderWidth: 2, // Толщина рамки
                    borderColor: 'rgba(20, 10, 10, 10)', // Цвет рамки
                    borderRadius: 20, // Закругленные углы рамки
                    borderColor: "rgba(111, 75, 204, 1)",
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 95,
                    top: 230, 
                  },
                glavnaja: {
                    height: 36,
                    width: 64,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    position: "absolute",
                    left: 9,
                    bottom: -15,
                  },
                  dogovora: {
                    height: 36,
                    width: 86,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    position: "absolute",
                    right: 128,
                    bottom: -16,
                  },
                  flexWrapperOne: {
                    marginLeft: -5,
                    padding: "0 73px 15px 3px",
                    position: "relative",
                  },
                  rectangle15: {
                    width: 430,
                    height: 60,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    position: "absolute",
                    left: 1,
                    bottom: 15,
                  },
                  rectangle11: {
                    width: 427,
                    height: 926,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    position: "relative",
                  },
                  rectangle20: {
                    width: 427,
                    height: 90,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    position: "absolute",
                    left: 3,
                    top: 0,
                  },
                  rectangle21: {
                    width: 346,
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
                  rectangle15Two: {
                    width: 430,
                    height: 60,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    position: "absolute",
                    left: 0,
                    bottom: 15,
                  },
                  vector: {
                    width: "8.55%",
                    height: "3.72%",
                    position: "absolute",
                    left: 17,
                    bottom: 36,
                  },
                  vectorTwo: {
                    width: "6.76%",
                    height: "3.19%",
                    position: "absolute",
                    left: 136,
                    bottom: 36,
                  },
                  folderOpenSolid1: {
                    padding: "2.25px 0",
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    right: 107,
                    bottom: 36,
                  },
                  vectorThree: {
                    flex: 1,
                    alignSelf: "stretch",
                    objectFit: "cover",
                  },
                  vectorFour: {
                    width: "6.76%",
                    height: "3.72%",
                    position: "absolute",
                    right: 223,
                    bottom: 36,
                  },
                  rectangle37: {
                    width: 358,
                    height: 507,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 44,
                    top: 184,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  rectangle38: {
                    width: 296,
                    height: 54,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 58,
                    top: 205,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  rectangle39: {
                    width: 120,
                    height: 36,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 58,
                    top: 305,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  rectangle40: {
                    width: 120,
                    height: 36,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 58,
                    top: 386,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  rectangle41: {
                    width: 120,
                    height: 36,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 57,
                    bottom: 417,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  rectangle42: {
                    width: 120,
                    height: 36,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    left: 57,
                    bottom: 327,
                    border: "6px solid rgba(246, 246, 246, 1)",
                  },
                  dogovoraTwo: {
                    height: 36,
                    width: 276,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                  },
                  tarify: {
                    height: 20,
                    width: 62,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 99,
                    bottom: 16,
                  },
                  rectangle31: {
                    width: 187,
                    height: 25,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    position: "absolute",
                    left: 77,
                    top: 220,
                  },
                  dobavlenieClienta: {
                    height: 36,
                    width: 311,
                    fontFamily: "Open Sans",
                    fontSize: 28,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 55,
                    top: 166,
                  },
                  rectangle32: {
                    width: 190,
                    height: 47,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    right: 102,
                    bottom: 765,
                  },
                  podkljuchit: {
                    height: 36,
                    width: 174,
                    fontFamily: "Open Sans",
                    fontSize: 24,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 83,
                    bottom: 765,
                  },
                  rectangleNazad: {
                    width: 190,
                    height: 47,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    right: 182,
                    bottom: 150,
                  },
                  nazad: {
                    height: 36,
                    width: 174,
                    fontFamily: "Open Sans",
                    fontSize: 24,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 140,
                    bottom: 150,
                  },
                  vectorFive: {
                    width: "8.55%",
                    height: "3.72%",
                    position: "absolute",
                    left: 46,
                    bottom: 36,
                  },
                  vectorSix: {
                    width: "6.76%",
                    height: "3.19%",
                    position: "absolute",
                    left: 139,
                    bottom: 36,
                  },
                  folderOpenSolid1Two: {
                    padding: "2.25px 0",
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    right: 127,
                    bottom: 36,
                  },
                  fileContractSolid1: {
                    overflow: "hidden",
                    position: "absolute",
                    right: 233,
                    bottom: 36,
                  },
                  vectorSeven: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 1,
                  },
                  glavnajaTwo: {
                    height: 36,
                    width: 64,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 39,
                    bottom: 0,
                  },
                  klienty: {
                    height: 36,
                    width: 276,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 105,
                    bottom: 0,
                  },
                  klientyTwo: {
                    height: 36,
                    width: 74,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 125,
                    bottom: 0,
                  },
                  tarifyTwo: {
                    height: 20,
                    width: 62,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "800",
                    color: "rgba(255, 255, 255, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 119,
                    bottom: 16,
                  },
                 FIO: {
                    height: 36,
                    width: 236,
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(143, 133, 133, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 105,
                    top: 227,
                  },
                  nomerClienta: {
                    height: 360,
                    width: 235,
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 20,
                    top: 303,
                  },
                 balance: {
                    height: 360,
                    width: 235,
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 20,
                    top: 386,
                  },
                  zaEzhemesjachnujuPlatu: {
                    height: 36,
                    width: 235,
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 20,
                    bottom: 429,
                  },
                  gigabajt: {
                    height: 33,
                    width: 235,
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 20,
                    bottom: 350,
                  },
                });

export default AddClient;

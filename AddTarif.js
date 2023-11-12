import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Import the necessary functions from React Navigation
const AddTarif = () => {
    const [tariffName, setTariffName] = useState(""); 
    const [minutesBetweenCities, setMinutesBetweenCities] = useState("");
    const [minutesInRoaming, setMinutesInRoaming] = useState("");
    const [monthlyFee, setMonthlyFee] = useState("");
    const [gigabytes, setGigabytes] = useState("");
    const navigation = useNavigation(); // Initialize the navigation hook

    const goBackToTarif = () => {
      navigation.navigate('Tarif'); // Navigate back to Tarif
    };
    return (
        <View>
          <Text style={styles.glavnaja}>Главная</Text>
          <Text style={styles.dogovora}>Договора</Text>
          <View style={styles.flexWrapperOne}>
            <View style={styles.rectangle15} />
            <View style={styles.rectangle11} />
            <View style={styles.rectangle20} />
            <View style={styles.rectangle21} />
            <Text style={styles.tarifnyePlany}>ТАРИФНЫЕ ПЛАНЫ</Text>
            <View style={styles.rectangle15Two} />
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/b8f74e51-8ed7-46b7-8ab6-797e9b88ac1e.svg",
              }}
              style={styles.vector}
            />
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/e6042b06-df73-4e68-bb54-a3eb255f4ac2.svg",
              }}
              style={styles.vectorTwo}
            />
            <View style={styles.folderOpenSolid1}>
              <Image
                source={{
                  uri:
                    "https://static.overlay-tech.com/assets/093ad885-a4b3-4cb0-b96f-c4acb71bbdcc.svg",
                }}
                style={styles.vectorThree}
              />
            </View>
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/0d90833f-eb8c-41bf-8bbb-b8f00168b67e.svg",
              }}
              style={styles.vectorFour}
            />
            <View style={styles.rectangle37} />
            <View style={styles.rectangle38} />
            <View style={styles.rectangle39} />
            <View style={styles.rectangle40} />
            <View style={styles.rectangle41} />
            <View style={styles.rectangle42} />
            <Text style={styles.dogovoraTwo}>Договора</Text>
            <Text style={styles.tarify}>Тарифы</Text>
            <View style={styles.rectangle31} />
            <Text style={styles.dobavlenieTarifa}>Добавление тарифа</Text>
            <View style={styles.rectangle32} />
            <Text style={styles.podkljuchit}>Подключить</Text>
            <View style={styles.rectangleNazad} />

            <TouchableOpacity onPress={goBackToTarif}>
            <Text style={styles.nazad}>Назад</Text>
            </TouchableOpacity>
           
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/127f3bb0-cd43-44d3-b894-d8f244a2256b.svg",
              }}
              style={styles.vectorFive}
            />
            <Image
              source={{
                uri:
                  "https://static.overlay-tech.com/assets/9c4f553b-d2a6-4c87-a2ea-65c3d8e167b0.svg",
              }}
              style={styles.vectorSix}
            />
            <View style={styles.folderOpenSolid1Two}>
              <Image
                source={{
                  uri:
                    "https://static.overlay-tech.com/assets/b091bbc0-4a4c-41f2-913e-de845d183330.svg",
                }}
                style={styles.vectorThree}
              />
            </View>
            <View style={styles.fileContractSolid1}>
              <Image
                source={{
                  uri:
                    "https://static.overlay-tech.com/assets/3827740a-5b1d-4612-9591-39539f436507.svg",
                }}
                style={styles.vectorSeven}
              />
            </View>
            <Text style={styles.glavnajaTwo}>Главная</Text>
            <Text style={styles.klienty}>Клиенты</Text>
            <Text style={styles.klientyTwo}>Клиенты</Text>
            <Text style={styles.tarifyTwo}>Тарифы</Text>
         
        <TextInput
          style={styles.nazvavie_input}

          value={tariffName}
          onChangeText={(text) => setTariffName(text)}
        />
          {/* За минуту между городами */}
          <TextInput
          style={styles.input_minutesTown}
       
          value={minutesBetweenCities}
          onChangeText={(text) => setMinutesBetweenCities(text)}
        />

        {/* За минуту в роуминге */}
        <TextInput
          style={styles.input_minutesInRoaming}
       
          value={minutesInRoaming}
          onChangeText={(text) => setMinutesInRoaming(text)}
        />

        {/* За ежемесячную плату */}
        <TextInput
          style={styles.input_monthlyFee}
        
          value={monthlyFee}
          onChangeText={(text) => setMonthlyFee(text)}
        />

        {/* Гигабайт */}
        <TextInput
          style={styles.input_gigabytes}
         
          value={gigabytes}
          onChangeText={(text) => setGigabytes(text)}
        />

            <Text style={styles.zaMinutuMezhduGorodami}>за минуту {"\n"} между городами</Text>
            <Text style={styles.zaMinutuVRouminge}>за минуту{"\n"}в роуминге</Text>
            <Text style={styles.zaEzhemesjachnujuPlatu}>
              за ежемесячную плату
            </Text>
            <Text style={styles.gigabajt}>гигабайт</Text>
          </View>
        </View>
      );
    };

            const styles = StyleSheet.create({
                input_gigabytes: {
                  height: 33,
                  width: 100,
                  borderWidth: 2, // Толщина рамки
                  borderColor: "rgba(111, 75, 204, 1)",
                  borderRadius: 20, // Закругленные углы рамки
                  fontFamily: "Open Sans",
                  fontSize: 20,
                  fontWeight: "800",
                  color: "rgba(30, 30, 30, 1)",
                  display: "flex",
                  position: "absolute",
                  right: 270,
                  bottom: 355,
                  },
                  input_monthlyFee: {
                    height: 33,
                    width: 100,
                    borderWidth: 2, // Толщина рамки
                    borderColor: "rgba(111, 75, 204, 1)",
                    borderRadius: 20, // Закругленные углы рамки
                    
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    right: 270,
                    bottom: 431,
                    },
                    input_minutesInRoaming: {
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
                      input_minutesTown: {
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
                  nazvavie_input: {
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
                  dobavlenieTarifa: {
                    height: 36,
                    width: 311,
                    fontFamily: "Open Sans",
                    fontSize: 28,
                    fontWeight: "800",
                    color: "rgba(30, 30, 30, 1)",
                    display: "flex",
                    position: "absolute",
                    left: 60,
                    top: 166,
                  },
                  rectangle32: {
                    width: 190,
                    height: 47,
                    backgroundColor: "rgba(111, 75, 204, 1)",
                    borderRadius: 20,
                    position: "absolute",
                    right: 102,
                    bottom: 245,
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
                    right: 102,
                    bottom: 245,
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
                    right: 145,
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
                  nazvanieTarifa: {
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
                  zaMinutuMezhduGorodami: {
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
                  zaMinutuVRouminge: {
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

export default AddTarif;

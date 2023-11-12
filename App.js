import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Home from "./Home";
import Tarif from "./Tarif";
import AddTarif from "./AddTarif";
import Dogovor from "./Dogovor";
import AddDogovor from "./AddDogovor";
import Client from "./Client";
import AddClient from "./AddClient";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
  <Stack.Screen
    name="Login"
    component={Login}
    options={{ headerShown: false }}
  />
    <Stack.Screen
    name="Home"
    component={Home}
    options={{ headerShown: false }}
  />
   <Stack.Screen
    name="Tarif"
    component={Tarif}
    options={{ headerShown: false }}
  />

<Stack.Screen
    name="AddTarif"
    component={AddTarif}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="Dogovor"
    component={Dogovor}
    options={{ headerShown: false }}
  />
    <Stack.Screen
    name="AddDogovor"
    component={AddDogovor}
    options={{ headerShown: false }}
  />
      <Stack.Screen
    name="Client"
    component={Client}
    options={{ headerShown: false }}
  />
     <Stack.Screen
    name="AddClient"
    component={AddClient}
    options={{ headerShown: false }}
  />
</Stack.Navigator>
    </NavigationContainer>
  );
}

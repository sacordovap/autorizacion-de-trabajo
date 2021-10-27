import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import DatosSolicitante from "./src/screens/DatosSolicitante/DatosSolicitante";

 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
//cannot read  propierties  of undefinied (reading navigate)

function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Datos-Solicitante"
        component={DatosSolicitante} />

    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

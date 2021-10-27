import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatosSolicitante from "./src/screens/DatosSolicitante/DatosSolicitante";
import AprobacionArea from "./src/screens/AprobacionArea/AprobacionArea";
import ExtensionPermisoTrabajo from "./src/screens/ExtensionPermisoTrabajo/ExtensionPermisoTrabajo";
import CierreAutorizacionTrabajo from "./src/screens/CierreAutorizacionTrabajo/CierreAutorizacionTrabajo";



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
        
        <Stack.Screen name="ExtensionPermisoTrabajo"
        component={ExtensionPermisoTrabajo} />
     
      <Stack.Screen name="Cierre Trabajo"
        component={CierreAutorizacionTrabajo} />
      <Stack.Screen name="Datos-Solicitante"
        component={DatosSolicitante} />
        <Stack.Screen name="Aprobacion Area"
        component={AprobacionArea} />

        

     
     
      
       
      



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

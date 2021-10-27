import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatosSolicitante from "./src/screens/DatosSolicitante/DatosSolicitante";
import AprobacionArea from "./src/screens/AprobacionArea/AprobacionArea";
import ExtensionPermisoTrabajo from "./src/screens/ExtensionPermisoTrabajo/ExtensionPermisoTrabajo";
import CierreAutorizacionTrabajo from "./src/screens/CierreAutorizacionTrabajo/CierreAutorizacionTrabajo";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Formulario from './src/screens/Form_Solicitud/Fomulario';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator();
//cannot read  propierties  of undefinied (reading navigate)

function MyStack() {
  return (
    //Aqui por mientras alternas las plantallas de vista
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home"
        component={Home} />
      <Stack.Screen name="Aprobacion Area"
        component={AprobacionArea} />
      <Stack.Screen name="Formulario"
        component={Formulario} />
      <Stack.Screen name="Datos-Solicitante"
        component={DatosSolicitante} />
      <Stack.Screen name="ExtensionPermisoTrabajo"
        component={ExtensionPermisoTrabajo} />
      <Stack.Screen name="Cierre Trabajo"
        component={CierreAutorizacionTrabajo} />
      

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

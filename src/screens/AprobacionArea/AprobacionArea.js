import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./AprobacionStyle";



function AprobacionArea(props) {
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Aprobacion del Dueño del Area</Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Datos del Solicitante</Text>
        <Text style={styles.supervisorAcargo}>
          Supervisor de Responsable del Area
        </Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor"
          maxLength={140}
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          style={styles.ingresoSupervisor}
        ></TextInput>
       
        <Text style={styles.nCelular}>N° Celular</Text>
        <TextInput
          keyboardType="numeric" 
          placeholder="Ingrese celular del supervisor"
          maxLength={12}
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="phoneNumber"
          style={styles.ingresoCelular}
        ></TextInput>
        
        
       
       
        
      </View>
    </ScrollView>
  );
}

export default AprobacionArea;

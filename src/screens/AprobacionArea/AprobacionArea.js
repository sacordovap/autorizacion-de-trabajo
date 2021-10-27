import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./AprobacionStyle";



function AprobacionArea(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> </Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Aprobacion del Dueño del Area</Text>
        <Text style={styles.supervisorAcargo}>Supervisor de Responsable del Area</Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor"
          spellCheck={true}
          style={styles.ingresoSupervisor}
        ></TextInput>
        <Text style={styles.nCelular}>N° Celular</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Ingrese celular del supervisor"
          maxLength={12}
          dataDetector="phoneNumber"
          style={styles.ingresoCelular}
        ></TextInput>
        <View style={styles.textInputStack}>          
        </View>
      </View>
    </View>
  );
}

export default AprobacionArea;

import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Cierrestyle";



function CierreAutorizacionTrabajo(props) {
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cierre de Autorizacion de Trabajo</Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Datos del Solicitante</Text>
        <Text style={styles.supervisorAcargo}>
        ¿Han sido cerrados todos los permisos de trabajo?
        </Text>
        <Text style={styles.fecha}>Si</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.fecha}>No</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        
        <Text style={styles.supervisorAcargo}>
        ¿Se ha culminado el trabajo de acuerdo a lo planificado?
        </Text>
        <Text style={styles.fecha}>Si</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.fecha}>No</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.supervisorAcargo}>
        ¿Se entrega el àrea en codiciones adecuadas?
        </Text>
        <Text style={styles.fecha}>Si</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.fecha}>No</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Marque"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="check-circle-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        
        
        <Text style={styles.supervisorAcargo1}>Supervisor de Marcobre del Trabajo</Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor"
      
          maxLength={140}
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          editable={true}
          style={styles.ingresoSupervisor1}

         
        ></TextInput>
        <Text style={styles.supervisorAcargo1}>Supervisor Responsable del Area</Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor del area"
      
          maxLength={140}
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          editable={true}
          style={styles.ingresoSupervisor1}

         
        ></TextInput>
      </View>
    </ScrollView>
  );
}

export default  CierreAutorizacionTrabajo;

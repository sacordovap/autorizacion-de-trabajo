import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Extensionstyle";



function ExtensionPermisoTrabajo(props) {
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> </Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Extension del Permiso de Trabajo</Text>
        <Text style={styles.supervisorAcargo}>
         Descripcion del motivo
        </Text>
        <TextInput
          placeholder="Ingrese el motivo"
          multiline={true}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          style={styles.ingresoMotivo}
        ></TextInput>
       
        <Text style={styles.fecha}>Hora de Inicio</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Seleccione hora Inicio"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="clock-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.fecha}>Hora de Fin</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Seleccione hora Fin"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="clock-o"
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
        <Text style={styles.supervisorAcargo1}>Supervisor Responsable del area </Text>
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
      </View>
    </ScrollView>
  );
}

export default  ExtensionPermisoTrabajo;

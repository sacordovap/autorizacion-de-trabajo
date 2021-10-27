import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./DatosStyle";



function DatosSolicitante(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Autorización de trabajo</Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Datos del Solicitante</Text>
        <Text style={styles.supervisorAcargo}>
          Supervisor de Marcobre Responsable
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
          placeholder="Ingrese celular del supervisor"
          maxLength={140}
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="phoneNumber"
          style={styles.ingresoCelular}
        ></TextInput>
        <Text style={styles.fecha}>Fecha</Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Seleccione la fecha"
            editable={false}
            style={styles.textInput}
          ></TextInput>
          <FontAwesomeIcon
            name="calendar-times-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.supervisorAcargo1}>Supervisor Ejecutante</Text>
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
        <Text style={styles.fechaInicio}>Fecha Inicio</Text>
        <View style={styles.fechaInicioInputStack}>
          <TextInput
            placeholder="Seleccione fecha de inicio"
            editable={false}
            style={styles.fechaInicioInput}
          ></TextInput>
          <MaterialCommunityIconsIcon
            name="calendar-multiple"
            style={styles.iconoFecha1}
          ></MaterialCommunityIconsIcon>
        </View>
        <Text style={styles.fechaFin}>Fecha Fin</Text>
        <View style={styles.fechaFinInputStack}>
          <TextInput
            placeholder="Seleccione fecha de fin"
            editable={false}
            style={styles.fechaFinInput}
          ></TextInput>
          <MaterialCommunityIconsIcon
            name="calendar-multiple-check"
            style={styles.iconoFecha2}
          ></MaterialCommunityIconsIcon>
        </View>
        <Text style={styles.descripcionDelTrabajo}>
          Descripción del trabajo
        </Text>
        <TextInput
          placeholder="Ingrese la descripción"
          editable={true}
          spellCheck={true}
          style={styles.descripcionInput}
        ></TextInput>
        <Text style={styles.area}>Area</Text>
        <TextInput
          placeholder="Area a Intervenir"
          editable={true}
          multiline={false}
          spellCheck={true}
          style={styles.areaIntervenirInput}
        ></TextInput>
        <Text style={styles.permisos}>Permisos que se requieren</Text>
        <View style={styles.permisosBox}></View>
      </View>
    </ScrollView>
  );
}

export default DatosSolicitante;

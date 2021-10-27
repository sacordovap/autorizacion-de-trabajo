import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Extensionstyle";



function ExtensionPermisoTrabajo(props) {
  console.log(props);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState('date2');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };


  //
  const showDatepicker = () => {
    showMode('date');

  };
  const showTimepicker = () => {
    showMode('time');
  };

  //

  const showDatepicker2 = () => {
    showMode2('date2');
  };
  const showTimepicker2 = () => {
    showMode2('time');
  };

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
            value={date.getHours() + ":" + date.getMinutes()}
            editable={false}
            style={styles.textInput}
          ></TextInput>
           <TouchableOpacity onPress={showTimepicker}><FontAwesomeIcon
            name="clock-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon></TouchableOpacity>
        </View>
        <Text style={styles.fecha}>Hora de Fin</Text>
        <View style={styles.textInputStack}>
         <TextInput
            placeholder="Seleccione hora Fin"
            editable={false}
            value={date2.getHours() + ":" + date2.getMinutes()}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity onPress={showTimepicker2}><FontAwesomeIcon
            name="clock-o"
            style={styles.iconoFecha}
          ></FontAwesomeIcon></TouchableOpacity>
        </View>
        <Text style={styles.supervisorAcargo1}>Supervisor de Marcobre del Trabajo</Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor"
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
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          editable={true}
          style={styles.ingresoSupervisor1}         
        ></TextInput>
         {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange} />
        )}
        {show2 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date2}
            mode={mode2}
            is24Hour={true}
            display="default"
            onChange={onChange2} />
        )}
      </View>
    </ScrollView>
  );
}

export default  ExtensionPermisoTrabajo;

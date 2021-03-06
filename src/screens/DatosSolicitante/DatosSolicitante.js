import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  CheckBox,
  Button,
  Modal,
  LogBox
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from '@react-native-community/datetimepicker';
import FeatherIcon from "react-native-vector-icons/Feather";
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import styles from "./DatosStyle";
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

function DatosSolicitante(props) {
 

  console.log(props);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState('date2');

  const [date3, setDate3] = useState(new Date());
  const [mode3, setMode3] = useState('date3');

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

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
  const onChange3 = (event, selectedDate) => {
    const currentDate = selectedDate || date3;
    setShow3(Platform.OS === 'ios');
    setDate3(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
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

  //

  const showDatepicker3 = () => {
    showMode3('date3');

  };
  const showTimepicker3 = () => {
    showMode3('time');
  };



  //checkbox
  const data = [
    { id: 1, txt: 'trabajo en espacios confinados', isChecked: false },
    { id: 2, txt: 'permiso aislamiento, bloqueo', isChecked: false },
    { id: 3, txt: 'Operaciones de Izaje', isChecked: false },
    { id: 4, txt: 'trabajo en altura', isChecked: false },
    { id: 5, txt: 'Trabajo en caliente', isChecked: false },
    { id: 6, txt: 'Trabajos electricos', isChecked: false },
    { id: 7, txt: 'Trabajos de instalacion', isChecked: false },
  ];


  const [products, setProducts] = useState(data);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };
  
  let selected = products.filter((product) => product.isChecked);
  console.log(selected);
  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <Text>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };
  return (

    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Autorizaci??n de trabajo</Text>

      <View style={styles.contenedorData}>
 
        <Text style={styles.subtitulo}>Datos por parte del Solicitante</Text>
        <Text style={styles.supervisorAcargo}>
          Supervisor de Marcobre Responsable
        </Text>
        <TextInput
          placeholder="Ingrese nombre del supervisor"
          multiline={false}
          spellCheck={true}
          textBreakStrategy="simple"
          dataDetector="all"
          defaultValue=""
          style={styles.ingresoSupervisor}
        ></TextInput>
        <Text style={styles.nCelular}>N?? Celular</Text>
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
        <Text style={styles.fecha}>Fecha </Text>
        <View style={styles.textInputStack}>
          <TextInput
            placeholder="Seleccione la fecha"
            editable={false}
            value={date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
            style={styles.textInput}
          ></TextInput>
          <TouchableOpacity onPress={showDatepicker}>
            <FontAwesomeIcon
              name="calendar-times-o"
              style={styles.iconoFecha}
            ></FontAwesomeIcon></TouchableOpacity>
        </View>

        <Text style={styles.supervisorAcargo1}>Supervisor Ejecutante</Text>
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
        <Text style={styles.fechaInicio}>Fecha y Hora de Inicio</Text>
        <View style={styles.fechaInicioInputStack}>
          <TextInput
            placeholder="Seleccione fecha de inicio"
            value={date2.getDate() + '/' + (date2.getMonth() + 1) + '/' + date2.getFullYear() +
              '  -  ' + date2.getHours() + ":" + date2.getMinutes()}
            editable={false}
            style={styles.fechaInicioInput}
          ></TextInput>
        </View>
        <View style={styles.fechaInicioInputStack}>
          <TouchableOpacity onPress={showDatepicker2}><MaterialCommunityIconsIcon
            name="calendar-multiple"
            style={styles.iconoFecha1}
          ></MaterialCommunityIconsIcon></TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker2}>
            <MaterialCommunityIconsIcon
              name="clock-outline"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon></TouchableOpacity></View>

        <Text style={styles.fechaFin}>Fecha y Hora de Fin</Text>
        <View style={styles.fechaFinInputStack}>
          <TextInput
            placeholder="Seleccione fecha de fin"
            value={date3.getDate() + '/' + (date3.getMonth() + 1) + '/' + date3.getFullYear() +
              '  -  ' + date3.getHours() + ":" + date3.getMinutes()}
            editable={false}
            style={styles.fechaFinInput}
          ></TextInput> 
        </View>
        <View style={styles.fechaFinInputStack}>
          <TouchableOpacity onPress={showDatepicker3} ><MaterialCommunityIconsIcon
            name="calendar-multiple-check"
            style={styles.iconoFecha2}
          ></MaterialCommunityIconsIcon></TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker3}>
            <MaterialCommunityIconsIcon
              name="clock-outline"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon></TouchableOpacity>
        </View>
        <Text style={styles.descripcionDelTrabajo}>
          Descripci??n del trabajo
        </Text>
        <TextInput
          placeholder="Ingrese la descripci??n"
          editable={true}
          multiline
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
        <View style={styles.permisosBox}>
        <View style={{ flex: 1 }}>{renderFlatList(products)}</View>
        </View>
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
        {show3 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date3}
            mode={mode3}
            is24Hour={true}
            display="default"
            onChange={onChange3} />
        )}
      </View>
    </ScrollView>
  );
}

export default DatosSolicitante;

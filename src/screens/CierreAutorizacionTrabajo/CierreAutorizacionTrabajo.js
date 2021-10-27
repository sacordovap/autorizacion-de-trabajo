import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';

import styles from "./Cierrestyle";



function CierreAutorizacionTrabajo(props) {


  const [value, setValue] = useState('yes')
  const [value2, setValue2] = useState('yes')
  const [value3, setValue3] = useState('yes')
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}> </Text>
      <View style={styles.contenedorData}>
        <Text style={styles.subtitulo}>Cierre de Autorizacion de Trabajo</Text>
        <Text style={styles.supervisorAcargo}>
          ¿Han sido cerrados todos los permisos de trabajo?
        </Text>
        <View style={styles.textInputStack}>
          <RadioButton.Group
            onValueChange={value => setValue(value)}
            value={value}      >
            <View>
              <Text>Si</Text>
              <RadioButton value="yes" />
            </View>
            <View>
              <Text>No</Text>
              <RadioButton value="no" />
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.supervisorAcargo}>
          ¿Se ha culminado el trabajo de acuerdo a lo planificado?
        </Text>
        <View style={styles.textInputStack}>
          <RadioButton.Group
            onValueChange={value => setValue2(value)}
            value={value2}      >
            <View>
              <Text>Si</Text>
              <RadioButton value="yes" />
            </View>
            <View>
              <Text>No</Text>
              <RadioButton value="no" />
            </View>
          </RadioButton.Group>
        </View>
        <Text style={styles.supervisorAcargo}>
          ¿Se entrega el àrea en codiciones adecuadas?
        </Text>
        <View style={styles.textInputStack}>
          <RadioButton.Group
            onValueChange={value => setValue3(value)}
            value={value3}      >
            <View>
              <Text>Si</Text>
              <RadioButton value="yes" />
            </View>
            <View>
              <Text>No</Text>
              <RadioButton value="no" />
            </View>
          </RadioButton.Group>
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
          style={styles.ingresoSupervisor2}
        ></TextInput>
      </View>
    </ScrollView>
  );
}

export default CierreAutorizacionTrabajo;

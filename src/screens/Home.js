import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";

function Home(props) {

  console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <ImageBackground
          source={require("../../assets/images/T2MDYDINPBHWNGA76MRDJARKGA.jpg")}
          resizeMode="cover"
          style={styles.background}
          imageStyle={styles.background_imageStyle}
        >
          <TouchableOpacity style={[styles.containerDocumentosRecientes, props.style, styles.cupertinoButtonInfo]}
          onPress={() =>
            props.navigation.navigate('Formulario')}
          >
            <Text style={styles.nuevoReporte}>NUEVA AUTORIZACION</Text>
          </TouchableOpacity>

        </ImageBackground>              
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerDocumentosRecientes: {
    backgroundColor: "rgba(239,173,51,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    opacity:80,
    paddingLeft: 16,
    paddingRight: 16
  },
  buscarDocumentos: {
    color: "#fff",
    fontSize: 14
  },
  containerSpeech: {
    backgroundColor: "rgba(1,123,146,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  nuevoReporte: {
    color: "#fff",
    fontSize: 14
  },
  background: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
    backgroundColor: "rgba(15,15, 15,0.10079999999999999)",
    bottom: 0
  },
  background_imageStyle: {
    opacity: 0.84
  },
  cupertinoButtonInfo: {
    height: 33,
    width: 207,
    marginTop: 449,
    marginLeft: 77
  },
  logo: {
    top: 16,
    width: 310,
    height: 270,
    position: "absolute",
    left: 20,

  },
  documentos_Recientes: {
    height: 32,
    width: 205,
    position: "absolute",
    top: 508,
    left: 78
  },
  backgroundStack: {
    width: 360,
    flex: 1
  }
});

export default Home;
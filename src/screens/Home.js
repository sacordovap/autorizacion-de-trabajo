import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";

function Home(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/fondo.jpg")}
                resizeMode="stretch"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <Image
                    source={require("../../assets/images/documento.png")}
                    resizeMode="contain"
                    style={styles.documento}
                ></Image>
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate('Formulario')
                    }><View style={styles.rect}>
                        <Text style={styles.nuevaAutorizacion}>NUEVA AUTORIZACION</Text>
                    </View></TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: "100%",
        marginTop: 23
    },
    image_imageStyle: {},
    documento: {
        width: 200,
        height: 200,
        marginTop: 164,
        marginLeft: 80
    },
    rect: {
        width: 251,
        height: 55,
        backgroundColor: "rgba(48,145,175,0.96)",
        borderWidth: 1,
        borderColor: "rgba(250,248,248,0.96)",
        borderRadius: 39,
        marginTop: 39,
        marginLeft: 54
    },
    nuevaAutorizacion: {
        color: "rgba(255,255,255,1)",
        textAlign: "center",
        fontSize: 16,
        opacity: 0.82,
        marginTop: 16,
    }
});

export default Home;

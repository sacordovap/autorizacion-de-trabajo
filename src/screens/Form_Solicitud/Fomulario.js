import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";
import AprobacionArea from "../AprobacionArea/AprobacionArea";
import CierreAutorizacionTrabajo from "../CierreAutorizacionTrabajo/CierreAutorizacionTrabajo";
import DatosSolicitante from "../DatosSolicitante/DatosSolicitante";
import ExtensionPermisoTrabajo from "../ExtensionPermisoTrabajo/ExtensionPermisoTrabajo";
import AwesomeAlert from 'react-native-awesome-alerts';

function Formulario(props) {
    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Swiper
                    from={0}
                    minDistanceForAction={0.1}
                    controlsProps={{
                        dotsTouchable: true,
                        prevPos: 'left',
                        nextPos: 'right',
                        nextTitle: '>',
                        nextTitleStyle: { color: '#E1DEDE', fontSize: 24, fontWeight: '500' },
                        PrevComponent: ({ onPress }) => (
                            <TouchableOpacity onPress={onPress}>
                                <Text style={{ color: '#E1DEDE', fontSize: 24, fontWeight: '500' }}>
                                    {'<'}
                                </Text>
                            </TouchableOpacity>
                        ),
                    }}
                >
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <DatosSolicitante />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <AprobacionArea />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <ExtensionPermisoTrabajo />
                    </View>
                    <View style={{ flex: 1, alignItems: "center", backgroundColor: 'rgba(0,0,0,0)' }}>
                        <CierreAutorizacionTrabajo />
                        <TouchableOpacity
                            style={[styles.containerGuardarDataInicial, styles.cupertinoButtonSuccess]}
                            onPress={() => {showAlert()}}
                    /*onPress={() => props.navigation.navigate('Preview', { formulario })}*/ >
                            <Text style={styles.guardarInformacion}>GUARDAR</Text>
                        </TouchableOpacity></View>

                </Swiper>
                <AwesomeAlert
                    show={Estado}
                    showProgress={false}
                    title="Registro de Autorización"
                    titleStyle={{ fontSize: 22, marginBottom: 10 }}
                    messageStyle={{ fontSize: 18, marginBottom: 10 }}
                    message="Esta seguro de guardar?"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No"
                    confirmText="Si"
                    cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
                    confirmButtonStyle={{ width: 100, alignItems: 'center' }}
                    confirmButtonColor="#AEDEF4"
                    cancelButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        hideAlert();
                    }}
                    onConfirmPressed={() => {
                        
        props.navigation.navigate('Home')
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    containerGuardarDataInicial: {
        backgroundColor: "rgba(1,123,146,1)",
        justifyContent: "center",
        borderRadius: 5,
    },
    guardarInformacion: {
        color: "#fff",
        fontSize: 15,

        textAlign: "center",
    },

    cupertinoButtonSuccess: {
        height: "5%",
        textAlign: "center",
        width: 80,
        left: 110,
        marginBottom: 5
    },
})

export default Formulario;
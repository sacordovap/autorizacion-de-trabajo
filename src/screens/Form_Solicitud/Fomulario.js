import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";
import AprobacionArea from "../AprobacionArea/AprobacionArea";
import CierreAutorizacionTrabajo from "../CierreAutorizacionTrabajo/CierreAutorizacionTrabajo";
import DatosSolicitante from "../DatosSolicitante/DatosSolicitante";
import ExtensionPermisoTrabajo from "../ExtensionPermisoTrabajo/ExtensionPermisoTrabajo";

function Formulario(props) {
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
                        nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                        PrevComponent: ({ onPress }) => (
                            <TouchableOpacity onPress={onPress}>
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                                    {'<'}
                                </Text>
                            </TouchableOpacity>
                        ),
                    }}
                >
                    <View style={{ flex: 1, alignItems: "center"}}>
                        <DatosSolicitante />
                    </View>
                    <View style={{ flex: 1, alignItems: "center"}}>
                        <AprobacionArea />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <ExtensionPermisoTrabajo />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <CierreAutorizacionTrabajo /></View>
                </Swiper>
            </View>
        </View>
    )
}


export default Formulario;
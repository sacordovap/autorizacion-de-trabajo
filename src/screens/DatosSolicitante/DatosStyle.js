import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop:21,
      },
      titulo: {
        color: "rgba(64,66,67,1)",
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 0,
        marginTop: 17,
      },
      contenedorData: {
        backgroundColor: "rgba(255,255,255,1)",
        overflow: "hidden",
        shadowColor: "rgba(155,155,155,1)",
        shadowOffset: {
          width: 1,
          height: 1
        },
        elevation: 0,
        shadowOpacity: 1,
        shadowRadius: 0,
        borderWidth: 2,
        borderColor: "rgba(241,241,241,1)",
        borderRadius: 6,
        marginBottom:50,
        marginTop: 17,
        marginLeft: 23,
        marginRight:23
      },
      subtitulo: {
        color: "rgba(155,155,155,1)",
        fontSize: 20,
        opacity: 0.9,
        marginTop: 13,
        marginLeft: 10
      },
      supervisorAcargo: {
        color: "#121212",
        marginTop: 20,
        marginLeft: 12
      },
      ingresoSupervisor: {
        color: "#121212",
        textAlign: "left",
        backgroundColor: "rgba(241,241,241,1)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        marginTop: 13,
        marginLeft: 12,
        marginRight:12,  
      },
      nCelular: {
        color: "#121212",
        marginTop: 18,
        marginLeft: 12
      },
      ingresoCelular: {
        color: "#121212",
        textAlign: "justify",
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5,
        marginTop: 11,
        marginLeft: 12,
        marginRight:12,     
      },
      fecha: {
        color: "#121212",
        marginTop: 15,
        marginLeft: 10
      },
      textInput: {
        top: 0,
        position: "absolute",
        color: "#121212",
        width: 240,
        left: 0,
        textAlign: "justify",
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5
      },
      iconoFecha: {
        left: 252,
        color: "rgba(108,100,100,1)",
        fontSize: 32,
        height: 32,
        width: 32
      },
      textInputStack: {
        width: 291,
        height: 40,
        marginTop: 11,
        marginLeft: 10
      },
      supervisorAcargo1: {
        color: "#121212",
        marginTop: 19,
        marginLeft: 11
      },
      ingresoSupervisor1: {
        color: "#121212",
        textAlign: "left",
        backgroundColor: "rgba(241,241,241,1)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        marginTop: 12,
        marginLeft: 12,
        marginRight:12,
      },
      fechaInicio: {
        color: "#121212",
        marginTop: 17,
        marginLeft: 12
      },
      fechaInicioInput: {
        top: 0,
        position: "absolute",
        color: "#121212",
        width: 200,
        left: 0,
        textAlign: "justify",
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5
      },
      iconoFecha1: {        
       top:3,
        left: 5,
        color: "rgba(108,100,100,1)",
        fontSize: 32,
        height: 35,
        width: 32
      },
      icon3: {
        top:3,
        color: "rgba(122,112,112,1)",
        left: 15,
        fontSize: 32,
        height: 35,
        width: 32,
      },
      fechaInicioInputStack: {
        height: 40,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12
      },
      fechaFin: {
        color: "#121212",
        marginTop: 17,
        marginLeft: 10
      },
      fechaFinInput: {
        top: 0,
        position: "absolute",
        color: "#121212",
        width: 200,
        left: 0,
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5
      },
      iconoFecha2: {          
        top: 2,
        left: 5,
        color: "rgba(108,100,100,1)",
        fontSize: 32,
        height: 35,
        width: 32
      },    
      fechaFinInputStack: {
        height: 40,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12
      },
      descripcionDelTrabajo: {
        color: "#121212",
        marginTop: 15,
        marginLeft: 11
      },
      descripcionInput: {
        color: "#121212",
        textAlign: "justify",
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 12,
        marginRight:12,
      },
      area: {
        color: "#121212",
        marginTop: 17,
        marginLeft: 10
      },
      areaIntervenirInput: {
        color: "#121212",
        textAlign: "justify",
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5,
        marginTop: 11,
        marginLeft: 12,
        marginRight:12,
      },
      permisos: {
        color: "#121212",
        marginTop: 18,
        marginLeft: 11
      },
      permisosBox: {
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5,
        margin:15
      },
      card: {
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
      },
      text: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
});
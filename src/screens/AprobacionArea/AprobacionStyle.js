import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)",     
      },
      titulo: {
        color: "rgba(64,66,67,1)",
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 0,
        marginTop: 38,
      },
      contenedorData: {
        height: 400,
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
        borderWidth: 1,
        borderColor: "rgba(241,241,241,1)",
        borderRadius: 6,
        marginTop: 17,
        marginLeft: 23,
        marginRight:23,
        marginBottom:50
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
        backgroundColor: "rgba(241,241,241,1)",
        borderWidth: 1,
        borderColor: "rgba(225,222,222,1)",
        borderRadius: 5,
        marginTop: 11,
        marginLeft: 12,
        marginRight:12,       
      },   
      textInputStack: {
        width: 291,
        height: 40,
        marginTop: 11,
        marginLeft: 10
      },   
});
import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  //GERAL
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: heightTotal * 1.2,
    width: widthTotal,
    alignItems: "center",
  },
  ScrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },

  //VIEW PRINCIPAL DA TELA
  main: {
    display: "flex",
    height: heightTotal * 1.6,
    width: widthTotal,
    alignItems: "center",
  },

  //INFORMAÇÕES DA CONTA/ EDITAVEL

  ChangableInfos: {
    width: widthTotal * 0.75,
    height: heightTotal * 0.7,
    borderRadius: 7,
    marginTop: 20,
    alignContent: "flex-start",
    alignItems: "center",
    boxShadow: "10px 10px 10px 10px  #dadada",
    marginBottom: 80,
  },
  TituloInfos: {
    width: widthTotal * 0.63,
    height: heightTotal * 0.05,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomColor: "#A0CEE1",
    borderWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  infos: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.6,
    alignItems: "flex-start",
    //backgroundColor:"#dadada",
    marginTop: 20,
  },
  textTitle: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 20,
  },
  viewcontainerbutton: {
    marginTop: 20,
    marginLeft: 40,
    alignContent: "center",
    alignItems: "center",
    width: widthTotal * 0.4,
    height: heightTotal * 0.05,
    //backgroundColor: "#000000",
  },
 
  //Changes
  TituloInfosFirst: {
    width: widthTotal * 1,   
    height: heightTotal * 0.07,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    flexDirection: "row",
    //backgroundColor: "#E66F51",
  },

  textTitleFirst: {
    fontFamily: "Inter",
    fontSize: 18,
    //paddingLeft: 20,
  },

  headerContainer: {
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.08,
    justifyContent: "center",
    flexDirection: "row",
  },
  txthead: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.035,
    marginLeft: 100,
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 12,

  },
  icon: {
    justifyContent: "center",
  },

  avaliacoes: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.27,
    alignItems: "flex-start",
    backgroundColor:"#ffffff",
    marginTop: 20,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    flexDirection: "column",
  },
  cabecalho: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.07,
    alignItems: "flex-start",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "row",
  },
  cabecalhotexto:{
    padding: 10,
    //fontWeight: "bold",
    fontSize: 14,
  },
  cabecalhoicon: {
    marginLeft:10,
    marginTop: 5,
  },
  corpo: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.16,
    alignItems: "center",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    //borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "column",
    textAlign: "center",
    justifyContent:"center",
    fontFamily: "Montserrat",
    padding: 10,
    fontSize: 14,
    fontWeight: "medium",
  },
  final: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.02,
    alignItems: "center",
    //backgroundColor:"#2f2f94",
    justifyContent: "center",
    borderRadius: 15,
    //borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "column",
  },
  finalicon: {
    marginLeft:190,
  },

});
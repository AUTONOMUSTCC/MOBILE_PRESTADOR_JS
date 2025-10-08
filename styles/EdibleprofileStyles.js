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
    height: heightTotal * 1.2,
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
    height: heightTotal * 0.62,
    alignItems: "flex-start",
  },
  textTitle: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 20,
  },
  Label: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "medium",
    paddingLeft: 20,
    paddingTop: 10,
  },
  input: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.045,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginTop: 5,
    borderRadius: 6,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    color: "#000",
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "medium",
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
  //BOTAO
  buttonContainer: {
    borderRadius: 7,
    //opacity: 0.5,
    alignItems: "left",
    justifyContent: "center",
    //padding: 20,
    width: widthTotal * 0.5,
    height: heightTotal * 0.05,
    //backgroundColor: "#E66F51",
  },
  
  text: {
    color: "#00bb54",
    fontSize: 15,
    textAlign: "left",
    fontWeight:"bold",
  },

  //Changes
  TituloInfosFirst: {
    width: widthTotal * 1,   
    height: heightTotal * 0.07,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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

  ChangableInfosSecond: {
    width: widthTotal * 0.75,
    height: heightTotal * 0.25,
    borderRadius: 7,
    marginTop: 20,
    alignContent: "flex-start",
    alignItems: "center",
    boxShadow: "10px 10px 10px 10px  #dadada",
    marginBottom: 80,
    
  },

  textSecond: {
    color: "#FF0000",
    fontSize: 15,
    textAlign: "left",
    fontWeight:"bold",
  },

});
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
  //HEADER DA TELA
  head: {
    display: "flex",
    flexDirection: "row",
    height: heightTotal * 0.1,
    width: widthTotal * 0.9,
    alignItems: "center",
  },
  Titulo: {
    width: widthTotal * 0.4,
    textAlign: "justify",
    height: heightTotal * 0.05,
  },
  Title: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Inter",
  },
  type: {
    color: "#696969",
    fontSize: 15,
    fontFamily: "Inter",
  },
  settings: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.05,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  //VIEW PRINCIPAL DA TELA
  main: {
    display: "flex",
    height: heightTotal ,
    width: widthTotal,
    alignItems: "center",
  },

  //PRIMEIRAS INFORMAÇÕES DO PROFISSIONAL
  maininfos: {
    display: "flex",
    height: heightTotal * 0.15,
    width: widthTotal * 0.9,
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 40,
  },
  profilePicture: {
    width: widthTotal * 0.25,
    height: heightTotal * 0.12,
    alignContent: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  Profileimg: {
    width: widthTotal * 0.25,
    height: heightTotal * 0.12,
    contentFit: "contain",
  },
  circle: {
    backgroundColor: "#FFC300",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200 / 2,
  },
  informations: {
    width: widthTotal * 0.3,
    height: heightTotal * 0.15,
    alignItems: "center",
    paddingTop: 10,
    marginLeft: 5,
  },
  Name: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  Aval: {
    color: "#767676",
    fontSize: 11,
    fontFamily: "Inter",
  },
  Identification: {
    height: heightTotal * 0.1,
    width: widthTotal * 0.3,
    alignItems: "flex-start",
    marginLeft: 6,
  },
  CountAval: {
    margin: 0,
    color: "#8A8A8A",
    fontSize: 9,
    fontFamily: "Inter",
  },
  Location: {
    height: heightTotal * 0.1,
    width: widthTotal * 0.31,
    alignItems: "flex-start",
    marginTop: 4,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 0,
  },
  Local: {
    color: "#767676",
    fontSize: 13,
    fontFamily: "Inter",
    paddingLeft: 2,
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
  },
  TituloInfos: {
    width: widthTotal * 0.63,
    height: heightTotal * 0.05,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomColor: "#FFC100",
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
});

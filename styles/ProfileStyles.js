import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("window").width;
const heightTotal = Dimensions.get("window").height;

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
    height: heightTotal * 0.12,
    width: widthTotal * 0.9,
    alignItems: "center",
    marginTop: '10%',
    paddingLeft: 5,
  },
  Titulo: {
    width: widthTotal * 0.35,
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
    height: heightTotal,
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
    marginTop: 20,
  },
  background: {
    width: widthTotal * 0.26,
    height: heightTotal * 0.125,
    backgroundColor: "#A0CEE1",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#A0CEE1",
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
    paddingTop: 0,
    marginLeft: 5,
  },
  Name: {
    color: "#000",
    fontSize: 15,
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
    paddingTop: 0,
    marginLeft: 0,
  },
  Local: {
    color: "#767676",
    fontSize: 15,
    fontFamily: "Inter",
    paddingLeft: 2,
  },

//INFORMAÇÕES DA CONTA/ EDITAVEL

  ChangableInfos: {
    width: widthTotal * 0.75,
    height: heightTotal * 0.65,
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
    fontSize: 12,
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
    borderBottomColor: "#dadada",
    borderWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    //opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    //padding: 20,
    width: widthTotal * 0.35,
    height: heightTotal * 0.03,
    //backgroundColor: "#E66F51",
    //boxShadow: "2px 2px 2px 2px  #dadada",
    marginBottom: 20,
    
  },
  
  text: {
    //color: "#E66F51",
    margin: 0,
    color: "#000000",
    fontSize: 13,
    fontFamily: "Inter",
    padding: 10,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.3,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomColor: "#A0CEE1",
    borderWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  modalContentCabecalho: {
    width: widthTotal * 0.45,
    height: heightTotal * 0.08,
    padding: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  modalContentCorpo: {
    width: widthTotal * 0.7,
    height: heightTotal * 0.15,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

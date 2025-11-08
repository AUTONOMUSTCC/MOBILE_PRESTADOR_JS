import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A0CEE1",
    height: heightTotal * 0.6,
    width: widthTotal,
  },
  /*PESQUISA */
  TituloInfosFirst: {
    width: widthTotal * 0.7,   
    height: heightTotal,
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
    //backgroundColor: "#E66F51",
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
  /* Corpo da tela */
  body: {
    height: heightTotal * 1,
    width: widthTotal,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  /*PRIMEIRO CARROUSEL  */
  view1: {
    width: width,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
  },

  text: {
    fontFamily: "Inter",
    fontSize: 17,
    fontWeight: "bold",
    color: "#36394A",
    marginBottom: 10,
    alignSelf: "flex-start",
    left: 20,
  },
  /*Informações passoais  */
  viewcontrolPOSTS: {
    width: widthTotal * 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: heightTotal * 0.1,
    borderStyle: "solid",
    borderColor: "#BFBFBF",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  esquerda: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width * 0.3,
    height: heightTotal * 0.09,
  },

  centro: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.25,
    height: heightTotal * 0.085,
    flex: 1,
  },

  direita: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width * 0.3,
    height: heightTotal * 0.09,
  },

  textotop: {
    color: "#666D80",
    textAlign: "center",
    fontSize: 12,
    paddingBottom: 10,
    left: 5,
  },

  texto: {
    textAlign: "center",
    color: "#666D80",
    fontSize: 11,
    marginTop: 5,
  },

  imgIcon: {
    backgroundColor: "005500",
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  /*SEGUNDO CARROUSEL  */
  CarouselServicos: {
    width: width,
    marginTop: 20,
    marginBottom: 0,
  },
  /*TERCEIRO CARROUSEL  */
  CarouselCategorias: {
    width: width,
    marginTop: 20,
    marginBottom: 0,
  },




  ChangableInfos: {
    width: widthTotal * 0.9,
    height: heightTotal * 0.25,
    borderRadius: 7,
    marginTop: 20,
    alignContent: "flex-start",
    alignItems: "center",
    boxShadow: "10px 10px 10px 10px  #dadada",
    marginBottom: 20,
    padding: 20,
  },
  cabecalho: {
    //marginTop: 10,
    width: widthTotal * 0.9,
    height: heightTotal * 0.07,
    alignItems: "flex-start",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "row",
  },

  cabecalho1: {
    marginLeft: 10,
    width: widthTotal * 0.7,
    height: heightTotal * 0.08,
    alignItems: "left",
    //backgroundColor:"#E66F51",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "column",
  },
  cabecalho2: {
    marginTop: 10,
    width: widthTotal * 0.7,
    height: heightTotal * 0.02,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "row",
  },
  infos: {
    marginRight: 5,
    marginLeft: 5,
    width: widthTotal * 0.2,
    height: heightTotal * 0.02,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#F0EFF1",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
  },
  infotext: {
    fontSize: 8,
  },
  CountAval: {
    margin: 0,
    color: "#8A8A8A",
    fontSize: 9,
    fontFamily: "Inter",
  },
  cabecalhotexto:{
    //fontWeight: "bold",

    fontSize: 14,
  },
  cabecalhoicon: {
    marginLeft:10,
    //marginTop: 5,
  },
  corpo: {
    marginTop: 10,
    width: widthTotal * 0.8,
    height: heightTotal * 0.09,
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
    fontSize: 12,
    fontWeight: "medium",
  },
  final: {
    marginTop: 10,
    width: widthTotal * 0.8,
    height: heightTotal * 0.03,
    alignItems: "left",
    //backgroundColor:"#2f2f94",
    justifyContent: "center",
    borderRadius: 20,
    //borderColor: "#000000",
    //borderWidth: 1,
  },
  button: {
    width: widthTotal * 0.2,
    height: heightTotal * 0.03,
    alignItems: "center",
    backgroundColor:"#A0CEE1",
    justifyContent: "center",
    borderRadius: 20,
    //borderColor: "#000000",
    //borderWidth: 1,
  },
  buttontext: {
    fontSize: 10,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: widthTotal,
    height: heightTotal * 0.08,
    //backgroundColor: "#daf542",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 100,
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "00",
    //borderBottomColor: "#A0CEE1",
    //borderWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  /*modalContentCabecalho: {
    width: widthTotal * 0.03,
    height: heightTotal * 0.04,
    //backgroundColor: "#42f5c2",
    //padding: 10,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  }, */

  modalContentCorpo: {
    width: widthTotal,
    height: heightTotal * 0.65,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  modalArrow: {
    width: widthTotal,
    height: heightTotal * 0.01,
    //backgroundColor: "#f54266",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },

  modalCidades: {
    width: widthTotal,
    height: heightTotal * 0.2,
    //backgroundColor: "#dada",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  modalPreferencia: {
    width: widthTotal,
    height: heightTotal * 0.12,
    //backgroundColor: "#e042f5",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  modalPrebut: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.09,
    //backgroundColor: "#f59942",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  buttonPre: {
    width: widthTotal * 0.2,
    height: heightTotal * 0.04,
    alignItems: "center",
    //backgroundColor:"#fff",
    justifyContent: "center",
    borderRadius: 10,
    //borderColor: "#000000",
    //borderWidth: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#dadada",
  },
  buttontextPre: {
    fontSize: 14,
  },

  modalFiltrar: {
    width: widthTotal,
    height: heightTotal * 0.25,
    //backgroundColor: "#425af5",
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  textmodal: {
    //color: "#E66F51",
    margin: 0,
    color: "#000000",
    fontSize: 13,
    fontFamily: "Inter",
    padding: 10,
  },
});

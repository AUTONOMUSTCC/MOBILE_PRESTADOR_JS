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

  pesquisaContainer: {
    width: widthTotal,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#A0CEE1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputPesquisa: {
    flex: 1,
    height: heightTotal * 0.045,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 14,
    paddingHorizontal: 10,
    marginRight: 10,
    display: "flex",
    flexDirection: "row",
    width: widthTotal * 0.8,
    borderWidth: 1,
    textAlign: "left",
    alignContent: "center",
    alignItems: "center",
    borderColor: "#9e9e9eff",
  },
  entry: {
    display: "flex",
    width: widthTotal * 0.7,
    height: heightTotal * 0.03,
    alignItems: "flex-end",
    paddingLeft: 10,
    paddingBottom: 2,
    paddingTop: 0,
    margin: 0,
    fontSize: 12,
    textAlign: "justify",
    justifyContent: "center",
  },
  icons: {
    display: "flex",
    flex: "30%",
    width: widthTotal * 0.04,
    height: heightTotal * 0.02,
  },

  bellimg: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  body: {
    height: heightTotal *0.9,
    width: widthTotal ,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  view1: {
    width: width,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
  },

  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "bold",
    color: "#36394A",
    marginBottom: 10,
    alignSelf: "flex-start",
    left: 20,
  },

  viewcontrolPOSTS: {
    width: widthTotal * 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: heightTotal * 0.1,
    borderStyle: "solid",
    borderColor: "#BFBFBF",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 0,
    marginBottom: 20,
  },

  direita: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width * 0.3,
    height: heightTotal * 0.09,
  },

  centro: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width * 0.3,
    height: heightTotal * 0.09,
  },

  esquerda: {
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
    fontSize: 12,
    marginTop: 5,
  },

  imgIcon: {
    backgroundColor: "005500",
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  CarouselServicos: {
    width: width,
    marginTop: 20,
    marginBottom: 0,
  },

  CarouselCategorias: {
    width: width,
    marginTop: 20,
    marginBottom: 0,
  },
});

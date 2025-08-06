import { Dimensions, StyleSheet } from "react-native";
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  //GERAL
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    display: "flex",
  },
  //VIEW IMG
  viewimg: {
    marginTop: '30%',
    width: widthTotal,
    height: heightTotal * 0.25,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  introducao: {
    width: widthTotal * 0.8,
    height: heightTotal * 0.24,
    contentFit: "contain",
  },

  //VIEW INTRODUCAO
  ViewIntro: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    width: widthTotal,
    height: heightTotal * 0.3,
  },
  titulo: {
    width: widthTotal * 0.8,
    textAlign: "left",
    fontWeight: "600",
    fontSize: 22,
    color: "#000",
    paddingBottom: "2%",
  },
  texto: {
    color: "#36394A",
    fontFamily: "Poppins, Regular",
    fontSize: 20,
    width: widthTotal * 0.8,
    textAlign: "left",
  },

  //VIEW BUTTON

  btnContainer: {
    width: widthTotal,
    height: heightTotal * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '15%',
  },
  button: {
    borderRadius: 80,
    width: widthTotal * 0.5,
    height: heightTotal * 0.06,
    backgroundColor: "#A0CEE1",
    color: "#000",
    fontWeight: "bold",
    justifyContent: "center",
  },
  text: {
    color: "#00000",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "inter",
  },
});

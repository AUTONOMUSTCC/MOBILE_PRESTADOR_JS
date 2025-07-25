import { Dimensions, StyleSheet } from "react-native";

const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  },
  icon: {
    justifyContent: "center",
  },

  //VIEW 2
  view2container: {
    width: widthTotal,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: heightTotal * 0.5,
  },
  //VIEW 4
  view4container: {
    width: widthTotal * 0.9,
    height: heightTotal * 0.06,
    display: "flex",
    alignItems: "flex-start",
  },

  //VIEW 5
  view5container: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: widthTotal * 0.85,
    height: heightTotal * 0.1,
  },
  input: {
    width: 40,
    height: 55,
    margin: 8,
    borderWidth: 1,
    borderColor: "#929292",
    borderRadius: 10,
    padding: 20,
  },
  //VIEW 3
  view3container: {
    alignContent: "center",
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.1,
  },
  //BOTAO
  buttonContainer: {
    //flex: 1/2,
    //flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: widthTotal,
    height: heightTotal * 0.09,
  },
  
  text: {
    color: "#000000",
    fontSize: 10,
    textAlign: "center",
  },


  //TEXTO

  text2: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  text3: {
    color: "#929292",
    fontSize: 10,
    textAlign: "justify",
  },

  //TEXTO
  view6container: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  text4: {
    color: "#000000",
    fontSize: 10,
    textAlign: "justify",
  },
  btn6Container: {
    //flex: 1/2,
    //flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  button: {
    borderRadius: 10,
    boxShadow: "10px 10px 10px #dadada",
    width: 150,
    height: 40,
    backgroundColor: "#A0CEE1",
    color: "#000",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },
  //RECUPERAR SENHA
  reenvia: {
    fontSize: 10,
    color: "#A0CEE1",
  },
});

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

  //HEADER
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

  //VIEW 3

  view3container: {
    alignContent: "center",
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.1,
  },
  view5container: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "left",
    width: widthTotal * 0.8,
    height: heightTotal * 0.15,
  },

  cadeado: {
    width: 16,
    height: 16,
    marginRight: 5,
    marginBlockStart: 1,
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

  button: {
    borderRadius: 10,
    boxShadow: "10px 10px 10px #dadada",
    width: 150,
    height: 40,
    backgroundColor: "#A0CEE1",
    color: "#000",
    justifyContent: "center",
  },
  //RECUPERAR SENHA

  forgotContainer: {
    flex: 1,
    alignItems: "end",
  },
  forgot: {
    fontSize: 10,
    color: "#C8593D",
  },

  //TEXTO
  view4container: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
  },

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
    padding: 20,
    backgroundColor: "#000000",
  },
  text: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },

  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#929292",
    paddingLeft: 10,
    flexDirection: "row",
    alignContent: 'center',
    alignItems: 'center',
  },
  entry: {
    display: "flex",
    width: widthTotal * 0.6,
    height: heightTotal * 0.04,
    alignItems: "flex-end",
    fontSize: 12,
    textAlign: "justify",
    justifyContent: "center",
    marginLeft: 10,
  },
  //RECUPERAR SENHA
  reenvia: {
    fontSize: 10,
    color: "#C8593D",
  },
});

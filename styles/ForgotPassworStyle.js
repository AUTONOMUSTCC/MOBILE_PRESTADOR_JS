import { StyleSheet, Dimensions } from "react-native";

const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    display: "flex",
    width: widthTotal,
    height: heightTotal,
    backgroundColor: "#fff",
    alignItems: "center",
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

  //TEXTO
  view4container: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
  },

  text2: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  text3: {
    color: "#929292",
    fontSize: 10,
    textAlign: "justify",
  },

  //VIEW 3

  view3container: {
    alignContent: "center",
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.1,
  },
  /*
  view3container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.25,
    paddingTop: 15,
    marginTop: 20,
  },*/
  inputteste: {
    display: "flex",
    flexDirection: "row",
    width: widthTotal * 0.8,
    height: heightTotal * 0.05,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#929292",
    padding: 10,
    textAlign: "left",
    alignContent: "center",
    alignItems: "center",
  },
  entry: {
    display: "flex",
    width: widthTotal * 0.7,
    height: heightTotal * 0.045,
    alignItems: "flex-end",
    paddingBottom: 2,
    margin: 10,
    fontSize: 12,
    textAlign: "justify",
    justifyContent: "center",
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
  button: {
    boxShadow: "10px 10px 10px #dadada",
    borderRadius: 80,
    width: 150,
    height: 40,
    backgroundColor: "#A0CEE1",
    color: "#000",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 10,
    textAlign: "center",
  },

  input: {
    color: "#000000",
    fontSize: 10,
    textAlign: "center",
  },
  /*
  
  //RECUPERAR SENHA

  /*forgotContainer: {
    flex: 1,
    alignItems: "end",
  },*/
  /*forgot: {
    fontSize: 10,
    color: "#C8593D",
  },

 */
});

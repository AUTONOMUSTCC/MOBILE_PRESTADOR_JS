import { StyleSheet, Dimensions } from "react-native";
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;
export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    display: "flex",
  },
  //VIEW 2
  personagem: { width: 240, height: 198 },
  view2container: {
    display: "flex",
    alignContent: "center",
    width: widthTotal,
    height: heightTotal * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  //VIEW 3
  view3container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.25,
    paddingTop: 15,
    marginTop: 20,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    width: widthTotal * 0.8,
    height: heightTotal * 0.04,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
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
    paddingLeft: 0,
    paddingBottom: 2,
    paddingTop: 0,
    margin: 10,
    fontSize: 12,
    textAlign: "justify",
    justifyContent: "center",
  },
  //BOTAO
  buttonContainer: {
    width: widthTotal,
    height: heightTotal * 0.1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    borderRadius: 56,
    width: 327,
    height: 52,
    backgroundColor: "#A0CEE1",
    color: "#000",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  //RECUPERAR SENHA
  forgotContainer: { width: widthTotal * 0.8, alignItems: "flex-end" },
  forgotBTN: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "center",
    padding: widthTotal * 0.02,
  },
  forgot: { color: "#94B9C8", textAlign: "end", fontSize: 10 },
});

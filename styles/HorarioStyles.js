import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const heigth = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    width: width,
    height: heigth * 0.95,
  },

  containerTitle: {
    marginTop: 20,
    width: width * 0.9,
    height: heigth * 0.07,
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "#980dd4",
  },
  Title: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
  },
  //Subtitulo
  containersubTitle: {
    width: width * 0.8,
    height: heigth * 0.08,
    alignContent: "center",
    justifyContent: "center",
    //backgroundColor: "#980dd4",

  },

  Subtitle: {
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "light",
    color: "#000",
    textAlign: "center",
    padding: 5,
  },

  containerWeek: {
    width: width,
    height: heigth * 0.08,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#fff",
  },
  weekbuttonscontainer: {
    width: width * 0.8,
    height: heigth * 0.06,
    borderRadius: 12,
    borderColor: "#E9E9E9",
    borderWidth: 2,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    width: width * 0.1,
    margin: 1,
    borderRadius: 5,
  },
  buttonSelected:{
    backgroundColor: "#C8593D",
    width: width * 0.095,
    height: heigth * 0.04,
    margin: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },
  button: {
    width: width * 0.095,
    height: heigth * 0.04,
    margin: 1,
    borderRadius: 5,
    backgroundColor: "#A0CEE1",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },

  //ESCOLHA OS HORÁRIOS 
  containerTime: {
    marginTop: 20,
    width: width * 0.8,
    height: heigth * 0.5,
    borderRadius: 12,
    borderColor: "#E9E9E9",
    borderWidth: 2,
    alignContent:'center',
  },


  //Style dos botões de horaário

  option: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    paddingVertical: 8,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555",
    marginRight: 8,
  },
  circleSelected: {
    backgroundColor: "#A0CEE1", // bolinha preenchida quando selecionado
  },
  timeoptions: {
    marginTop: 20,
    width: width * 0.78,
    height: heigth * 0.4,

  },
  containerOptTime: {
    paddingLeft: 30,
  },

  //botão de salvar

  containerButton:{
    width: width,
    height: heigth * 0.15,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  BtnSalvar:{
    width: width * 0.4,
    height: heigth * 0.04,
    margin: 1,
    borderRadius: 50,
    backgroundColor: "#A0CEE1",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
  },
});

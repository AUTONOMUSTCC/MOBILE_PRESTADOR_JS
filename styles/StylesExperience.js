import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    alignItems: "center",
    width: width,
    height: height,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: width * 0.9,
    height: height * 0.05,
    alignItems: "center",
    display: "flex",
    marginTop: 10,
    marginLeft: 25,
    alignContent: "flex-start",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  icon: {
    height: height * 0.03,
    width: width * 0.4,
  },

  TitleContainer: {
    width: width * 0.9,
    height: height * 0.1,
    justifyContent: "center",
    alignContent: "flex-start",
    marginTop: 20,
  },
  TitleText: {
    color: "#000",
    fontSize: 22,
    textAlign: "left",
  },
  SubTitleContainer: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.15,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  SubTitleText: {
    width: width * 0.735,
    height: height * 0.15,
    color: "#000",
    fontSize: 14,
    textAlign: "left",
  },

  //Adicionar experiencia

  ExperienceContainer: {
    width: width * 0.9,
    height: height * 0.1,
    alignItems: "flex-start",
    alignContent: "flex-start",
    verticalAlign: "middle",
    justifyContent: "center",
  },

  AddExperience: {
    width: width * 0.6,
    height: height * 0.04,
    backgroundColor: "#A0CEE1",
    borderRadius: 4,
    justifyContent: "center",
    verticalAlign: "middle",
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 8,
  },
  BtnTextAdd: {
    textAlign: "justify",
    justifyContent: "center",
    verticalAlign: "middle",
    textAlignVertical: "center",
  },
  //Botão

  BtnContainer: {
    width: width,
    alignItems: "flex-end",
    height: height * 0.1,
    justifyContent: "center",
    paddingRight: "5%",
  },
  btn: {
    backgroundColor: "#A0CEE1",
    width: width * 0.35,
    height: height * 0.04,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    fontSize: 14,
    fontWeight: "500",
  },

  //Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // fundo escuro
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  modalSubtitle: {
    fontSize: 12,
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#474545ff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: "top",
    color: '#ddd',
  },
  addButton: {
    backgroundColor: "#A0CEE1",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: "center",
  },
  addButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  //Resposta do modal 
  containeraftermodal:{
    width: width *0.8,
    height: height * 0.3,
    alignItems: 'center',
    justifyContent:'flex-start',
  },
});

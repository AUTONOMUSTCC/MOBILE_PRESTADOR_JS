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
    height: height * 0.15,
    justifyContent: "center",
    alignContent: "flex-start",
    marginTop: 20,
    paddingLeft: 10,
  },
  TitleText: {
    color: "#000",
    fontSize: 20,
    textAlign: "left",
    width: width * 0.8,
  },
  SubTitleContainer: {
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.15,
    justifyContent: "center",
    alignContent: "flex-start",
    paddingLeft: 10,
  },
  SubTitleText: {
    width: width * 0.755,
    height: height * 0.2,
    color: "#000",
    fontSize: 15,
    textAlign: "left",
  },

  //Adicionar experiencia botão

  ExperienceContainer: {
    width: width * 0.9,
    height: height * 0.07,
    alignItems: "flex-start",
    alignContent: "flex-start",
    verticalAlign: "middle",
    justifyContent: "center",
    paddingLeft: 10,
  },

  AddExperience: {
    width: width * 0.45,
    height: height * 0.045,
    backgroundColor: "#A0CEE1",
    borderRadius: 4,
    justifyContent: "center",
    verticalAlign: "middle",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: 8,
  },
  BtnTextAdd: {
    textAlign: "justify",
    justifyContent: "center",
    verticalAlign: "middle",
    textAlignVertical: "center",
    paddingLeft: 20,
  },

  //Botão de próximo
  BtnContainer: {
    width: width,
    alignItems: "flex-end",
    height: height * 0.1,
    justifyContent: "center",
    paddingRight: "5%",
    backgroundColor: "#A0CEE1",
  },
  btn: {
    backgroundColor: "#A0CEE1",
    width: width * 0.3,
    height: height * 0.04,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    fontSize: 14,
    fontWeight: "500",
  },

  //CHECKBOXES COM OPÇÃO DE MODO DE TRABALHO

  Modecontainer: {
    width: width * 0.85,
    height: height * 0.1,
    marginTop: 5,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  Viewvaluesinput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 40,
    width: 200,
    marginTop: 10,
  },

  ViewCheck: {
    height: 24,
    width: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginTop: 5,
  },
  ViewCheckSquare: {
    width: 22,
    height: 22,
    backgroundColor: "#A0CEE1",
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
    borderColor: "#ddd",
    padding: 20,
    alignItems: "flex-start",
  },
  ModalHeader: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#ddd",
    paddingBottom: 5,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "semibold",
    marginBottom: 0,
    textAlign: "flex-start",
    marginRight: 30,
    marginBottom: 5,
    width: "70%",
  },
  modalSubtitle: {
    fontSize: 12,
    color: "#000",
    marginBottom: 15,
    textAlign: "justify",
    width: "55%",
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
    color: "#000",
  },
  addButton: {
    backgroundColor: "#A0CEE1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },

  //Resposta do modal
  containeraftermodal: {
    width: width * 0.9,
    height: height * 0.3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Containercard: {
    flexDirection: "row",
    width: width * 0.85,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#C7C7C7",
    alignContent: "center",
    margin: 3,
    backgroundColor: "#fff",
    padding: 2,
  },

  TxtExperience: {
    color: "#000",
    fontSize: 14,
    width: width * 0.75,
    textAlign: "justify",
  },
  icone: {
    paddingRight: 5,
    paddingTop: 2,
  },
});

import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A0Cee1",
    width: widthTotal,
  },

  pesquisaContainer: {
    width: widthTotal,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#A0Cee1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputPesquisa: {
    flex: 1,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 14,
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9e9e9eff",
  },

  TituloInfosFirst: {
    width: widthTotal * 0.7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  textTitleFirst: {
    fontFamily: "Inter",
    fontSize: 18,
  },

  headerContainer: {
    alignItems: "center",
    width: widthTotal,
    height: 70,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 40,
  },

  icon: {
    justifyContent: "center",
  },

  /* CORPO */
  body: {
    flex: 1,
    width: widthTotal,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },

  /* CARD DO ANÚNCIO */
  ChangableInfos: {
    width: widthTotal * 0.9,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    padding: 15,

    /* Sombra correta */
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  cabecalho: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  cabecalho1: {
    marginLeft: 10,
    width: "80%",
    flexDirection: "column",
  },

  cabecalho2: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  infos: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#F0EFF1",
    borderRadius: 15,
    marginHorizontal: 4,
  },

  infotext: {
    fontSize: 10,
  },

  cabecalhotexto: {
    fontSize: 15,
    fontWeight: "500",
  },

  CountAval: {
    color: "#8A8A8A",
    fontSize: 10,
    marginTop: 2,
  },

  corpo: {
    width: "100%",
    marginTop: 10,
  },

  corpodescricao: {
    fontSize: 12,
    color: "#333",
    lineHeight: 17,
  },

  final: {
    width: "100%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  button: {
    width: 90,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A0Cee1",
    borderRadius: 20,
  },

  buttontext: {
    fontSize: 10,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    width: widthTotal,
    borderRadius: 20,
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContentCorpo: {
    width: widthTotal,
    height: heightTotal * 0.65,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  modalArrow: {
    width: widthTotal,
    height: 30,
    padding: 20,
    justifyContent: "center",
  },

  modalCidades: {
    width: widthTotal,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  modalPreferencia: {
    width: widthTotal,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  modalPrebut: {
    flexDirection: "row",
    marginTop: 10,
  },

  buttonPre: {
    width: widthTotal * 0.2,
    height: heightTotal * 0.04,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dadada",
    marginRight: 10,
  },

  modalFiltrar: {
    width: widthTotal,
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen").height;
const {width} = Dimensions.get("screen").width;
export default StyleSheet.create({
  //GERAL
container: {
    flex: 1,
    backgroundColor: "#ff000f",
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  scroll: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    width: width ,
    height: height * 0.05,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginTop: 20,
    marginBottom: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  nome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  mensagem: {
    fontSize: 12,
    color: "#777",
  },
});

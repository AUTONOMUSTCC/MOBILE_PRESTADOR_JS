import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen").height;
const { width } = Dimensions.get("screen").width;
export default StyleSheet.create({
  //GERAL
  container: {
    display: 'flex',
    flex: 1,
  },
  
  scroll: {
    display: 'content',
    paddingBottom: 0,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    height: height * 0.4,
    alignItems: 'center',
    backgroundColor: '#fff',
    
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
    width: width *0.8,
    height: height *0.05,
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

import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen").height;
const { width } = Dimensions.get("screen").width;
export default StyleSheet.create({
  //GERAL
  container: {
    display: 'flex',
    //flex: 1,
        backgroundColor: '#fff',

  },

  scroll: {
    display: 'content',
    paddingBottom: 2,
    paddingLeft: 20,
    backgroundColor: '#fff',
    marginBottom: "10%",
   marginLeft: '5%'
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: width,
    height: '5%',
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    alignContent: 'center',
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
    width: width * 0.8,
    height: height * 0.05,
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
  button: {
    width: 80,
    height: 20,
    marginLeft: 20,
    alignItems: "center",
    backgroundColor:"#A0CEE1",
    justifyContent: "center",
    borderRadius: 20,
    //borderColor: "#000000",
    //borderWidth: 1,
  },
  buttontext: {
    fontSize: 14,
  },
});

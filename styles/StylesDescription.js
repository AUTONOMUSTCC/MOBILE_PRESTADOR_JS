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

  TitleContainer:{
    width: width * 0.9,
    height: height * 0.1,
    backgroundColor: "#5511aa",
    justifyContent: 'center',
    alignContent: 'flex-start',
  },

  TitleText:{
    color: '#000',
    fontSize: 20,
    textAlign: 'justify',
  },
  SubTitleContainer:{
    width: width * 0.9,
    height: height * 0.2,
    backgroundColor: "#44aaca",
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  SubTitleText:{
    color: '#000',
    fontSize: 14,
    textAlign: 'justify',
  }
});

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
    justifyContent: 'center',
    alignContent: 'flex-start',
    marginTop: 10,
  },
  TitleText:{
    color: '#000',
    fontSize: 22,
    textAlign: 'left',
  },
  SubTitleContainer:{
    marginTop: 10,
    width: width * 0.9,
    height: height * 0.15,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  SubTitleText:{
    width: width * 0.8,
    height: height * 0.15,
    color: '#000',
    fontSize: 14,
    textAlign: 'left',
  },
  DescriptionContainer:{
    marginTop:10,
    width: width,
    height:  height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DescriptionInput:{
    width: width * 0.9,
    height:  height * 0.4,
    borderColor: "#BFBFBF",
    borderWidth: 1,
    borderRadius: 9,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: "#333",
    textAlign: 'left',
    padding: 10,
    backgroundColor: '#aacda2',
  },

   //Botão

   BtnContainer:{
    width: width,
    alignItems: 'flex-end',
    height: height * 0.055, 
    justifyContent:'center',
    paddingRight: "5%",
  },
  btn:{
    backgroundColor:"#A0CEE1",
    width: width * 0.4,
    height: height * 0.04,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnText:{
    fontSize: 14,
    fontWeight: '500',
  },
});

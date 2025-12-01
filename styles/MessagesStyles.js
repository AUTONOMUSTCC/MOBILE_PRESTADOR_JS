import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: heightTotal * 0.6,
    width: widthTotal,
  },
  /*PESQUISA */
 profileImage: {
  width: 55,
  height: 55,
  borderRadius: 55 / 2,
},

   imageContainer: {
    alignItems: "center",
    marginTop: -60,
  },
 
  TituloInfosFirst: {
    width: widthTotal * 0.8,   
    height: heightTotal * 0.05,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    //backgroundColor: "#e32293",
  },

  textTitleFirst: {
    fontFamily: "Inter",
    fontSize: 18,
    //paddingLeft: 20,
  },

  txthead: {
    width: widthTotal * 0.5,
    height: heightTotal * 0.035,
    marginLeft: 100,
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 12,

  },
  icon: {
    justifyContent: "center",
  },

  textTitleBody: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 20,
    

  },
  /* Corpo da tela */
  body: {
    height: heightTotal * 1,
    width: widthTotal,
    backgroundColor: "#fff",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  TituloInfosBody: {
    width: widthTotal * 1,   
    height: heightTotal * 0.05,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    //backgroundColor: "#de0bb4",
  },
  TituloInfosIcon: {
    width: widthTotal * 0.1,   
    height: heightTotal * 0.03,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    //backgroundColor: "#E66F51",
  },
  TituloInfosText: {
    width: widthTotal * 0.8,   
    height: heightTotal * 0.03,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    //backgroundColor: "#1f18b5",
  },

  textTitleBody: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "bold",
    //paddingLeft: 20,
  },


  container2: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  // Cabeçalho
  headerContainer2: {
    width: widthTotal ,
    height: heightTotal * 0.1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    marginRight: 10,
  },
  headerInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
 avatarContainer: {
  width: 55,
  height: 55,
  borderRadius: 55 / 2,
  overflow: "hidden", // ESSENCIAL!
  justifyContent: "center",
  alignItems: "center",
},
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  statusIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  statusText: {
    fontSize: 13,
    marginTop: 2,
  },
  typingText: {
    color: "gray",
    fontStyle: "italic",
  },
  unreadText: {
    fontSize: 12,
    color: "#000",
    marginTop: 2,
  },
  unreadContainer: {
    width: widthTotal * 0.06,
    height: heightTotal * 0.03,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    backgroundColor: "#E66F51",
    borderRadius: 25,
  },
  timeContainer: {
    height: heightTotal * 0.03, 
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  timeText: {
    fontSize: 14,
    color: "#666",
  },
  avatarContainer2: {
    width: widthTotal * 0.4,
    height: heightTotal * 0.07,    
    //backgroundColor: "#000",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    display: "flex",
    flexDirection: "column"
  },

});

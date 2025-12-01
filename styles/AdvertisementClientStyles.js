import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
  },
  headerBackground: {
    height: 150,
    backgroundColor: "#6B4A00",
    alignItems: "left",
    justifyContent: "flex-start",
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  header: {
    width: widthTotal * 0.8,
    height: 60,
    //backgroundColor: "#6B4A00",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  
  profileCard: {
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: widthTotal * 0.9,
    height: heightTotal * 2.1,
    marginTop: -50,
    marginLeft: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: -60,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },
  RowName: {
    alignItems: "center",
    justifyContent: "center",
    //padding:1, 
  },
  Row: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25, 
  },
  ratingRow: {
    flexDirection: "colum",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    //padding: 1, 
  },

  ratingNumber: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 12,
  },
  reviewCount: {
    marginLeft: 20,
    textAlign: "center",
    color: "gray",
    //marginBottom: 8,
    fontSize: 12,

  },
  profileName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    padding:10, 

  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 45,
  },
  tag: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 10,
    color: "#555",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  contactButtonText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 12,
  },
  grayButton: {
    borderColor: "#000000",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  grayButtonText: {
    color: "#333",
    fontSize: 12,
  },
  responseBox: {
    alignSelf: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  responseText: {
    color: "#555",
    fontSize: 12,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    lineHeight: 20,
  },
  list: {
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    marginBottom: 6,
  },
  containerAval: {
    alignItems: "center",
    flexDirection: "row",
    width: widthTotal * 0.8,
    //backgroundColor: "#fc0390",
  }, 
  reviewCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewName: {
    flex: 1,
    fontWeight: "bold",
  },
  reviewText: {
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
  /*profileCard: {
    width: widthTotal * 0.6,
    height: heightTotal * 1.7,
    borderRadius: 7,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "10px 10px 10px 10px  #dadada",
  },*/

  infos: {
    width: widthTotal * 0.7,
    height: heightTotal * 0.6,
    alignItems: "flex-start",
    //backgroundColor:"#dadada",
    marginTop: 20,
  },
  textTitle: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: 15,
    paddingLeft: 20,
  },
  viewcontainerbutton: {
    marginTop: 20,
    marginLeft: 40,
    alignContent: "center",
    alignItems: "center",
    width: widthTotal * 0.4,
    height: heightTotal * 0.05,
    //backgroundColor: "#000000",
  },
 
  //Changes
  TituloInfosFirst: {
    width: widthTotal * 1,   
    height: heightTotal * 0.07,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    flexDirection: "row",
    //backgroundColor: "#E66F51",
  },

  textTitleFirst: {
    fontFamily: "Inter",
    fontSize: 18,
    //paddingLeft: 20,
  },

  headerContainer: {
    alignItems: "center",
    width: widthTotal,
    height: heightTotal * 0.08,
    justifyContent: "center",
    flexDirection: "row",
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

  avaliacoes: {
    width: widthTotal * 0.7,
    height: heightTotal * 0.25,
    alignItems: "flex-start",
    backgroundColor:"#ffffff",
    marginTop: 20,
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    flexDirection: "column",
  },
  cabecalho: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.07,
    alignItems: "flex-start",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "row",
  },
  cabecalhotexto:{
    padding: 10,
    //fontWeight: "bold",
    fontSize: 14,
  },
  cabecalhoicon: {
    marginLeft:10,
    marginTop: 5,
  },
  corpo: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.16,
    alignItems: "center",
    //backgroundColor:"#2f2f94",
    borderRadius: 15,
    //borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "column",
    textAlign: "center",
    justifyContent:"center",
    fontFamily: "Montserrat",
    padding: 10,
    fontSize: 14,
    fontWeight: "medium",
  },
  final: {
    width: widthTotal * 0.65,
    height: heightTotal * 0.02,
    alignItems: "center",
    //backgroundColor:"#2f2f94",
    justifyContent: "center",
    borderRadius: 15,
    //borderColor: "#000000",
    //borderWidth: 1,
    flexDirection: "column",
  },
  finalicon: {
    marginLeft:190,
  },
});

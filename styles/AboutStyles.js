import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginBottom: 40,
    marginTop: 10,
  },
  profileImage: {
    justifyContent: "center",
    width: 110,
    height: 110,
    borderRadius: 45,
  },
  statusBox: {
    alignItems: "flex-end",
    width: widthTotal * 0.26,
    //marginTop: 60,
    //backgroundColor: "#fc0390",
  },
  statusBox3: {
    alignItems: "flex-end",
    width: widthTotal * 0.25,
    marginLeft: 15,
    //backgroundColor: "#fc0390",
  },
  statusTitle: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    fontSize: 12,
  },
  statusButton: {
    backgroundColor: "#FFEAA7",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  statusButtonText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 10,

  },
  tagsContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: "#ececec",
    color: "#555",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "#000",
    marginTop: 10,
    //marginBottom: 10,
  },
  paragraph: {
    color: "#333",
    fontSize: 14,
    lineHeight: 20,
    //marginBottom: 10,
    padding: 20,
  },
  list: {
    //marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    //marginBottom: 6,
    padding: 20,
  },
  

  ChangableInfos: {
    width: widthTotal * 0.9,
    height: heightTotal * 2.5,
    borderRadius: 7,
    marginTop: 20,
    alignContent: "flex-start",
    alignItems: "center",
    boxShadow: "10px 10px 10px 10px  #dadada",
  },
});
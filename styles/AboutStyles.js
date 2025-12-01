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
    marginTop: "10%",
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
    paddingLeft: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 10,
  },

  profileImage: {
    justifyContent: "center",
    width: 90,
    height: 90,
    borderRadius: 65,
  },

  statusBox: {
    alignItems: "flex-end",
    width: widthTotal * 0.26,
  },

  statusBox3: {
    alignItems: "flex-end",
    width: widthTotal * 0.25,
    marginLeft: 15,
  },

  statusTitle: {
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    fontSize: 12,
  },

  statusButton: {
    backgroundColor: "#FFEaA7",
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
    flexWrap: "wrap",
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
  },

  paragraph: {
    color: "#333",
    fontSize: 14,
    lineHeight: 20,
paddingTop: 5,
 width: width * 0.8,
    textAlign: 'justify',
  },

  listItem: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
    width: width * 0.8,
    textAlign: 'justify',
    paddingTop: 5,

  },

  button: {
    width: widthTotal * 0.2,
    height: heightTotal * 0.03,
    alignItems: "center",
    backgroundColor: "#A0CEE1",
    justifyContent: "center",
    borderRadius: 20,
  },

  ChangableInfos: {
    width: widthTotal * 0.92,
    borderRadius: 7,   // ← MANTIDO do jeito que estava
    marginTop: 0,
    paddingTop: 10,
    alignContent: "flex-start",
    alignItems: "center",

    // Sombras corretas p/ React Native
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,

    // ❗ Removido para evitar travar o ScrollView
    // height: heightTotal * 0.9,

    paddingBottom: "40%",
  },

  profilePicture:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },
});

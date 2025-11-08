import { Dimensions, StyleSheet } from "react-native";

export const { width } = Dimensions.get("window");
const widthTotal = Dimensions.get("screen").width;
const heightTotal = Dimensions.get("screen").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4F4",
      },
      // Cabeçalho
      headerContainer: {
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
        position: "relative",
        marginRight: 10,
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
      // Mensagens
      messageContainer: {
        maxWidth: "75%",
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
      },
      sentMessage: {
        backgroundColor: "#A0CEE1",
        alignSelf: "flex-end",
      },
      receivedMessage: {
        backgroundColor: "#E66F51",
        alignSelf: "flex-start",
      },
      messageText: {
        color: "#fff",
      },
      // Input
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderColor: "#ddd",
      },
      input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#F1F1F1",
        borderRadius: 20,
        marginRight: 10,
      },
      sendButton: {
        backgroundColor: "",
        padding: 10,
        borderRadius: 20,
      },
});
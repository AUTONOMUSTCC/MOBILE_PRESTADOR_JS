import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get("screen").height;
const { width } = Dimensions.get("screen").width;


export default StyleSheet.create({
    //GERAL 
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignContent: "center",
        width: width,
        height: height,
    },
    header: {
        flexDirection: "row",
        width: width *0.9,
        height: height * 0.1,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#552244',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        paddingLeft: '25%',
        height: height * 0.1,
        width: width,
    },
    icon: {
        height: height * 0.2,
        width: width,
        backgroundColor: '#554466',
    },
    Titlecontainer: {
        width: width * 0.7,
        height: height * 0.1,
        alignItems: 'center',
        backgroundColor: '#5522255',
    },
    Title:{
        fontSize: 25,
        fontWeight: "bold",
        color: "#000",
    },
})
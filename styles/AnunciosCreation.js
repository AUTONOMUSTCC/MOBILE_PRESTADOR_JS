import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get("window");


export default StyleSheet.create({
    //GERAL 
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignContent: 'flex-start',
        alignItems: "flex-start",
        width: width,
        height: height,
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        width: width *0.9,
        height: height * 0.05,
        alignItems: 'center',
        display: 'flex',
        marginTop: 10,
        marginLeft: 25,
        alignContent: 'flex-start',
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
    //CORPO DA PÁGINA

    Titlecontainer: {
        width: width * 0.65,
        height: height * 0.1,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: "flex-start",
        paddingLeft: 20,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: 5,

    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    SubtitleContainer: {
        width: width * 0.8,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: "flex-start",
        marginLeft: '5%',
    },
    Subtitle: {
        fontSize: 14,
        fontWeight: "Medium",
        color: "#000",
    },
    caracterIcon: {
        marginLeft: "10%",
        width: width * 0.8,
        height: height * 0.3,
        margin: 10,
        alignItems: 'center',
    },
    ContainerQuestion:{
        width: width * 0.85,
        height: height * 0.08,
        marginLeft: 15,
        borderColor: "#9C9C9C",
        borderBottomWidth: 1,
    },

    //Escolher o tipo de trabalho 
    TxtQuestion:{
        fontSize:20,
    },
    ContainerOptions:{
        flexDirection:'row',
        width: width,
        height: height * 0.4,
        marginTop: 10,
        alignContent: "center",
    },
    Category:{
        width: width * 0.5,
        alignContent: 'center',
        alignItems: 'center',
    },
    instructionLabel:{
        color: "#9C9C9C",
        fontSize: 13,
        paddingTop: 15,
    },
    Specialties:{
        width: width * 0.5,
        backgroundColor: '#ff553f',
        alignContent: 'center',
        alignItems: 'center',
    },
    Options:{
        alignItems: "flex-start",
        alignContent: 'center',
        width: width * 0.45,
        height: height * 0.3,
        marginTop: "15%",
        marginLeft: "10%",
        borderRightColor: "#9C9C9C",
        borderRightWidth: 2,
    },
    txtoptions:{
        fontSize: 14,
    }
})
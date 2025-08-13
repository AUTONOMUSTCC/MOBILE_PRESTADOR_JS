import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("screen").width;
const heigth = Dimensions.get("screen").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#550022',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerTitle:{
        width: width * 0.8,
        height: heigth * 0.1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff552f',
    },
    Title:{
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#000',
        textAlign: 'center'
    },

    containersubTitle:{
        width: width,
        height: heigth * 0.15,
        alignContent: 'center',
        justifyContent: 'center', 
    },
    Subtitle:{
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 'light',
        color: '#000',
        textAlign: 'justify'
    },
   
    containerWeek:{
        width: width,
        height: heigth * 0.15,
        alignContent: 'center',
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    weekbuttonscontainer:{
        width: width * 0.7,
        height: heigth * 0.2,
        borderRadius: 12,
        borderColor: "#E9E9E9",
        borderWidth: 2,
        flexDirection: 'row',
    },
    botao:{
        width: width * 0.1,
        height: heigth * 0.05,
        backgroundColor: "#FFEEB8",
        borderRadius: 5,
    },

});
import react from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("screen").width;
const heigth = Dimensions.get("screen").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    containerTitle:{
        width: width *0.9 ,
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
        height: heigth * 0.1,
        alignContent: 'center',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        backgroundColor:'#fff',
    },
    weekbuttonscontainer:{
        width: width * 0.8,
        height: heigth * 0.07,
        borderRadius: 12,
        borderColor: "#E9E9E9",
        borderWidth: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    day:{
        backgroundColor: "#aa3344",
        width: width * 0.1,
        margin: 1,
        borderRadius: 5,
    },
 
});
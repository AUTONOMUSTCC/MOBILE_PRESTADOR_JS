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
        width: width,
        height: heigth,
    },

    containerTitle: {
        paddingTop: 10,
        width: width * 0.9,
        height: heigth * 0.1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center'
    },
    //Subtitulo
    containersubTitle: {
        width: width * 0.9,
        height: heigth * 0.1,
        alignContent: 'center',
        justifyContent: 'center',
    },

    Subtitle: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 'light',
        color: '#000',
        textAlign: 'center',
        padding: 5,

    },

    containerWeek: {
        width: width,
        height: heigth * 0.08,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#fff',
    },
    weekbuttonscontainer: {
        width: width * 0.85,
        height: heigth * 0.07,
        borderRadius: 12,
        borderColor: "#E9E9E9",
        borderWidth: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    day: {
        width: width * 0.1,
        margin: 1,
        borderRadius: 5,

    },
    containerTime: {
        marginTop: 20,
        width: width * 0.85,
        height: heigth * 0.1,
        borderRadius: 12,
        borderColor: "#E9E9E9",
        borderWidth: 2,
    },
});
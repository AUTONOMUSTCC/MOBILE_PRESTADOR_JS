import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    text: {
      color: '#727272',
      fontSize: 15,
    },
    
    button: {
  
     position: 'absolute',
     bottom: 0,
     left: 0,
     flex: 1 /4 ,
     
    },
    
    // HEADER 
    logo: {
      width: 159,
      height: 131,
      contentFit: 'contain',
    },
    logotext: {
      fontSize: 40,
      color: '#000',
      fontWeight: 'bold',
    },
    us: {
      fontSize: 40,
      color:'#A0CEE1',
      },
    imageContainer: {
      flex: 1/2,
      flexDirection: "column",
      alignItems: 'center',
      contentFit: 'center',
    },
  
    //BOTAO-SETA
    
    buttonContainer:{
      //flex: 1/2,
      //flexDirection: "column",
      alignItems: "center",
      justifyContent:'center',
    },
  
  buttonLabel: {
      color: '#fff',
      fontSize: 16,
  },
  buttonIcon: {
      paddingRight: 8,
  },
  });
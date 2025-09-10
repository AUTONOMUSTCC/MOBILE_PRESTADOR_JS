import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { height, width } = Dimensions.get("window");

export default function Experience({experiencia}){
  
    const Experiencia = (experiencia) => {
        if (!experiencia) return null;
        return(
            <View style={styles.Containercard}>
                <AntDesign name="check" size={20} color="black" />
                <Text style={styles.TxtExperience}> {experiencia} </Text>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
 
    Containercard: {
        width: width * 0.7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#333',
    },
    TxtExperience:{
        color: '#000',
        fontSize: 14,
    },

});


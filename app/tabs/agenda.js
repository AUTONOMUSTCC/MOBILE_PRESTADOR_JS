import React from 'react';
import { Text, View,} from 'react-native';


import styles from "../../styles/ChatStyles.js";

export default function Agenda(){
    return(
        
        <View styles={styles.container}>
            <View className="header" styles={styles.head}>
                <View className="Titulo">
                    <Text styles={styles.name}>Meu perfils</Text>
                    <Text styles={styles.type}>Profissional</Text>
                </View>
                <View className="settings">
                    
                </View>
            </View>
            <View className="main">
                <View className="profilePicture">
                    <View className="img">

                    </View>
                    <View className="Maininfos">
                        <Text styles={styles.name}>LETICIA</Text>
                        <Text styles={styles.text}>Avaliações</Text>
                        <Text styles={styles.aval}> (3 Avaliações) </Text>
                    </View>
                </View>
                <View className="informations">

                </View>
            </View>

        </View>
    );
}
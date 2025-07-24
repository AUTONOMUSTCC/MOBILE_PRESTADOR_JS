import React from 'react';
import { Text, View, Pressable, Image} from 'react-native';

import styles from '../styles/introductionStyles';
import { Link } from 'expo-router';
import Header from "../componentes/Head";



const introd = require('../assets/images/EquipeIntro.png');

export default function Intro(){
    return(
        <View style={styles.container}>
            <Header/>
            <View className='viewimg' style={styles.viewimg}>
                <Image source={introd} style={styles.introducao}/>   
            </View>

            <View className='introdução' style={styles.ViewIntro}>
                <Text style={styles.titulo}>Descubra novas oportunidades de trabalho</Text>
                <Text style={styles.texto}>Aqui você conecta suas habilidades diretamente com quem precisa dos seus serviços.
                Crie seu perfil, destaque suas especialidades e começe a receber solicitações de clientes reais.</Text>
            </View>
            
            <View className='Button' style={styles.btnContainer}>
                <Link href="/login" asChild>
                    <Pressable style={styles.button}>
                       <Text style={styles.text}>Começar</Text>  
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}
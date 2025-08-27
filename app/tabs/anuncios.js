import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from "react";
import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View, } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/AnunciosCreation.js";
const caracther = require("../../assets/images/CaractherCreateImage.png");

export default function Anuncios() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const [color, setCor] = useState('black'); // Cor inicial

    const handlePressIn = () => {
        setCor('#0090CA'); // Cor quando pressionado
    };

    const handlePress = (text) => {
        console.log('Categoria selecionada:', text); // Aqui você pode capturar o valor do texto
    };

    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <SafeAreaView
                style={[
                    styles.container,
                    { paddingTop: insets.top, paddingBottom: insets.bottom },
                ]}
            >
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="chevron-back" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerTitle}>Voltar</Text>
                </View>


                {/* Corpo da página */}
                <ScrollView>
                    <View style={styles.Titlecontainer}>
                        <Text style={styles.Title} >
                            Para criar seu anúncio, responda algumas questões
                        </Text>
                    </View>
                    <View style={styles.SubtitleContainer}>
                        <Text style={styles.Subtitle}>
                            Não se preocupe, todas as informações poderão ser alteradas futuramente
                        </Text>
                    </View>
                    <View style={styles.caracterIcon}>
                        <Image source={caracther}></Image>
                    </View>
                    <View style={styles.ContainerQuestion}>
                        <Text style={styles.TxtQuestion}>
                            Que tipo de trabalho você está aqui para fazer?                       
                             </Text>
                    </View>
                    {/*Seleção de categoria e especialidades*/}
                    <View style={styles.ContainerOptions}>
                        <View style={styles.Category}>
                            <Text style={styles.instructionLabel}>Selecione 1 categoria</Text>
                            <View style={styles.Options}>
                                <TouchableOpacity style={{
                                    color: color,
                                    margin: 5,
                                    padding: 5,
                                }}
                                    onPressIn={handlePressIn} // Muda a cor quando pressionado
                                    onPress={() => handlePress('Tecnologia e TI')}
                                >
                                    <Text style={styles.txtoptions}>Tecnologia e TI</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.Specialties}>
                            <Text style={styles.instructionLabel}>Selecione até 3 especialidades</Text>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}
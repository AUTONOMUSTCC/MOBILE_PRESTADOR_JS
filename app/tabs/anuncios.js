import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/AnunciosCreation.js";


export default function Anuncios() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={[
                    styles.container,
                    { paddingTop: insets.top, paddingBottom: insets.bottom },
                ]}
            >
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
                <View style={styles.header}>
                    <View style={styles.icon}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.headerTitle}>Voltar</Text>
                </View>
                {/* Corpo da página */}
                <View style={styles.Titlecontainer}>
                   <Text style={styles.Title} >
                   Para criar seu anúncio, responda algumas questões
                   </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
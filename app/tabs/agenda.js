import React, { useState } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

import styles from "../../styles/AgendaStyles.js";

export default function Agenda() {
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState(null);

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const handlePress = (day) => {
        setSelected(day);
    }
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <SafeAreaView style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
                <View style={styles.containerTitle}>
                    <Text style={styles.Title}>Configure sua disponibilidade semanal</Text>
                </View>

                <View style={styles.containersubTitle}>
                    <Text style={styles.Subtitle}>Escolha os dias e horários que você ESTÁ disponível para agendamentos</Text>
                </View>

                {/*Corpo da tela */}
                <View style={styles.containerWeek}>
                    <View style={styles.weekbuttonscontainer}>
                        {days.map((day, index) => (
                            <View key={index} style={styles.day}>
                                <Button color={'#A0CEE1'} title={day} titleStyle={{ color: 'black' }} onPress={() => handlePress(day)} />
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.containerTime}>
                    <Text style={styles.Subtitle}>
                        Selecione os horários que você possui DISPONÍVEL nas segundas-feiras
                    </Text>
                    <View>
                        <RadioButton
                            value="first"
                           
                        />
                    </View>

                </View>

                <View style={styles.containerButton}></View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
import React, { useState } from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from "../../styles/AgendaStyles";

export default function Agenda() {
    const insets = useSafeAreaInsets();
        const [selected, setSelected] = useState(null);
      
        const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
      
        const handlePress = (day) => {
          setSelected(day);
        }
    return (
        <SafeAreaProvider>
            <SafeAreaView styles={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <StatusBar  barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.containerTitle}>
                <Text style={styles.Title}>Configure sua disponibilidade semanal</Text>
            </View>

            <View style={styles.containersubTitle}>
                <Text>Escolha os dias e horários que você ESTÁ disponível para agendamentos</Text>
            </View>

            <View style={styles.containerWeek}>
                <View style={styles.weekbuttonscontainer}>
                        {days.map((day, index) => (
                            <View key={index} style={styles.botao}>
                                <Button title={day} onPress={() => handlePress(day)} />
                            </View>
                        ))}
                </View>
            </View>

            <View style={styles.containerTime}></View>

            <View style={styles.containerButton}></View>
            </SafeAreaView>       
        </SafeAreaProvider>
    );
}
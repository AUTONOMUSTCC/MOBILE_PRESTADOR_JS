import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import api from "../../services/api.js";
import styles from "../../styles/AgendaStyles.js";

export default function Agenda() {
  const insets = useSafeAreaInsets();
  const [selectedDayId, setSelectedDayId] = useState([]); // dia selecionado
  const [selectedtime, setTimeselected] = useState([]); // horários
  const [disabledDays, setDisabledDays] = useState([]);

  //CRIAR A AGENDA PARA CADA DIA DA SEMANA
  const IncluirAgenda = async (selectedDayId, selectedtime) => {
    const idUsuarioStr = await AsyncStorage.getItem("idUsuario");
    const id = idUsuarioStr ? parseInt(idUsuarioStr, 10) : 0;
    const diasemana = Number(selectedDayId[0]);
    //const horarios = selectedtime.map(String).join(",");

    try {
      setDisabledDays((prev) => [...prev, diasemana]);
      const requests = selectedtime.map(async (horario) => {
        const incluir = {
          idPrestador: id,
          diaSemana: diasemana,
          horario: horario,
        };
        console.log("Enviando:", incluir);
        const response = await api.post("/api/AgendaPrestador", incluir);
        return response.data;
      });

      // Aguarda todas terminarem
      const results = await Promise.all(requests);

      console.log("Todas as agendas foram criadas com sucesso:", results);
      await AsyncStorage.setItem("IdAgenda", JSON.stringify(results));

      setTimeselected([]);
    } catch (e) {
      console.error(e);
    }
  };

  // Dias da semana com IDs únicos
  const days = [
    { id: 1, label: "D" },
    { id: 2, label: "S" },
    { id: 3, label: "T" },
    { id: 4, label: "Q" },
    { id: 5, label: "Q" },
    { id: 6, label: "S" },
    { id: 7, label: "S" },
  ];

  // Função chamada ao clicar num dia
  const handleDayPress = (dayId) => {
    setSelectedDayId((prevDays) => {
      // Se o dia já estiver no vetor, remove
      if (prevDays.includes(dayId)) {
        console.log("Dia desmarcado ID:", dayId);
        return prevDays.filter((id) => id !== dayId);
      }
      // Caso contrário, adiciona o novo dia
      else {
        Alert.alert(
          "Salve sua disponibilidade!", "antes de atualizar a agenda para o próximo dia clique no botão de salvamento "
        );
        console.log("Dia selecionado ID:", dayId);
        return [...prevDays, dayId];
      }
    });
  };

  // Função para alternar horários
  const toggleSelection = (time) => {
    if (selectedtime.includes(time)) {
      setTimeselected(selectedtime.filter((t) => t !== time));
    } else {
      setTimeselected([...selectedtime, time]);
    }
  };

  // Array de horários
  const times = [
    "00:00",
    "12:00",
    "01:00",
    "13:00",
    "02:00",
    "14:00",
    "03:00",
    "15:00",
    "04:00",
    "16:00",
    "05:00",
    "17:00",
    "06:00",
    "18:00",
    "07:00",
    "19:00",
    "08:00",
    "20:00",
    "09:00",
    "21:00",
    "10:00",
    "22:00",
    "11:00",
    "23:00",
  ];

  // Renderiza horários
  const renderItem = ({ item }) => {
    const isSelected = selectedtime.includes(item);
    return (
      <Pressable style={styles.option} onPress={() => toggleSelection(item)}>
        <View style={[styles.circle, isSelected && styles.circleSelected]} />
        <Text style={[styles.text, isSelected && styles.textSelected]}>
          {item}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <SafeAreaView
          style={[
            styles.container,
            { paddingTop: insets.top, paddingBottom: insets.bottom },
          ]}
        >
          <View style={styles.containerTitle}>
            <Text style={styles.Title}>
              Configure sua disponibilidade semanal
            </Text>
          </View>

          <View style={styles.containersubTitle}>
            <Text style={styles.Subtitle}>
              Escolha os dias e horários que você ESTÁ disponível para
              agendamentos
            </Text>
          </View>

          <View style={styles.containerWeek}>
            <View style={styles.weekbuttonscontainer}>
              {days.map((day) => {
                const isSelected = selectedDayId.includes(day.id);
                const isDisabled = disabledDays.includes(day.id);

                return (
                  <Pressable
                    key={day.id}
                    disabled={isDisabled}
                    style={[
                      styles.button,
                      isSelected && styles.buttonSelected,
                      isDisabled && { opacity: 0.5 },
                    ]}
                    onPress={() => handleDayPress(day.id)}
                  >
                    <Text
                      style={[styles.text, isSelected && styles.textSelected]}
                    >
                      {isDisabled ? day.label : day.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Horários */}
          <View style={styles.containerTime}>
            <Text style={styles.Subtitle}>
              Selecione os horários que você possui DISPONÍVEL
            </Text>
            <View style={styles.timeoptions}>
              <FlatList
                data={times}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item}-${index}`}
                numColumns={2}
                contentContainerStyle={styles.containerOptTime}
                scrollEnabled={false}
              />
            </View>
          </View>

          <View style={styles.containerButton}>
            <Pressable
              style={styles.BtnSalvar}
              onPress={() => IncluirAgenda(selectedDayId, selectedtime)}
            >
              <Text style={styles.Subtitle}>SALVAR</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

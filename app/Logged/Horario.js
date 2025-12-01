import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import VerticalTimeCarousel from "../../componentes/VerticalTimeCarousel.jsx";
import api from "../../services/api.js";
import styles from "../../styles/HorarioStyles.js";

export default function Agenda() {
  const { idPrestador } = useLocalSearchParams(); // id do prestador
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [selectedDayId, setSelectedDayId] = useState(null); // dia selecionado
  const [selectedTime, setSelectedTime] = useState([]); // horários escolhidos
  const [agenda, setAgenda] = useState([]); // todos horários compatíveis
  const [filteredTimes, setFilteredTimes] = useState([]); // horários do dia selecionado

  // Busca os horários compatíveis entre cliente e prestador
  const Agendar = async () => {
    const idUsuarioStr = await AsyncStorage.getItem("idUsuario");
    const idUsuario = idUsuarioStr ? parseInt(idUsuarioStr, 10) : 0;

    try {


      // Mantido o mesmo request que você já usa
      const request = await api.get("/api/HorariosCompativeis/", {
        params: {
          idCliente: idPrestador,
          idPrestador: idUsuario,
        },
      });
      console.log(request);
      const dados = request.data;

      if (Array.isArray(dados)) {
        setAgenda(dados);
        console.log("Horários compatíveis:", dados);
      } else {
        console.warn("Formato inesperado:", dados);
      }
    } catch (e) {
      console.error("Erro ao buscar horários:", e);
    }
  };

  // Lista de dias da semana
  const days = [
    { id: 1, label: "D" },
    { id: 2, label: "S" },
    { id: 3, label: "T" },
    { id: 4, label: "Q" },
    { id: 5, label: "Q" },
    { id: 6, label: "S" },
    { id: 7, label: "S" },
  ];

  // Ao clicar num dia, filtra os horários da API para aquele dia
  const handleDayPress = (dayId) => {
    setSelectedDayId(dayId);
    console.log("Dia selecionado:", dayId);
    const horariosDoDia = agenda.filter((a) => a.diaSemana === dayId)
      .map((a) => a.horario);

    setFilteredTimes(horariosDoDia);
    console.log("Horários disponíveis para o dia:", horariosDoDia);
  };

  //Alterna seleção de horários
  const toggleSelection = (time) => {
    if (selectedTime.includes(time)) {
      setSelectedTime(selectedTime.filter((t) => t !== time));
    } else {
      setSelectedTime([...selectedTime, time]);
    }
  };

  //Carrega os horários ao montar o componente
  useEffect(() => {
    Agendar();
  }, []);

  // Renderização dos horários
  const renderItem = ({ item }) => {
    const isSelected = selectedTime.includes(item);
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

      <SafeAreaView style={[styles.container]}>
        {/* Cabeçalho */}
        <View style={styles.containerTitle}>
          <Pressable onPress={() => router.back()}>
            <Arrowicon style={styles.icon} />
          </Pressable>
          <Text style={styles.Title}>Faça seu agendamento</Text>
        </View>

        <View style={styles.containersubTitle}>
          <Text style={styles.Subtitle}>
            Escolha entre os dias e horários compatíveis com o cliente
          </Text>
        </View>

        {/* Dias da semana */}
        <View style={styles.containerWeek}>
          <View style={styles.weekbuttonscontainer}>
            {days.map((day) => {
              const isSelected = selectedDayId === day.id;
              return (
                <Pressable
                  key={day.id}
                  style={[styles.button, isSelected && styles.buttonSelected]}
                  onPress={() => handleDayPress(day.id)}
                >
                  <Text
                    style={[styles.text, isSelected && styles.textSelected]}
                  >
                    {day.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Horários disponíveis */}
        <View style={styles.containerTime}>
          <Text style={styles.Subtitle}>Selecione o horário</Text>
          <View style={styles.timeoptions}>
            {filteredTimes.length > 0 ? (
              <VerticalTimeCarousel
                data={filteredTimes}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item}-${index}`}
              />
            ) : (
              <Text
                style={{ textAlign: "center", color: "#999", marginTop: 20 }}
              >
                {selectedDayId
                  ? "Nenhum horário disponível para este dia."
                  : "Selecione um dia para ver os horários."}
              </Text>
            )}
          </View>
        </View>

        {/* Botão Salvar */}
        <View style={styles.containerButton}>
          <Pressable
            style={styles.BtnSalvar}
            onPress={() =>  router.push({
                pathname: "./Menssages",
                params: {
                  idPrestador: idPrestador,
      },
              })}
          >
            <Text style={styles.Subtitle}>SALVAR</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

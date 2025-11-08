import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/StylesServiceMode.js";

const Card = ({ text }) => {
  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};
/*
const EnviarDados = async (topic, selectedmode) => {
  if (topic.length === 0 || !selectedmode) {
    Alert.alert("Preencha todos os campos para a criação");
    return;
  }
  setAbordagem(topic);
  setServicemode(selectedmode);
  console.log(topic, selectedmode);
  router.push("./ValueperHour");
};
*/

export default function ServiceMode() {
  const [desabilitado, setdesabilitado] = useState(false);
  const [selectedmode, setSelectedMode] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [topic, setTopic] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleAddExperience = () => {
    if (inputText.trim() !== "") {
      setTopic((prev) => [...prev, inputText.trim()]);
      setInputText("");
      setModalVisible(false);
    }
  };

  useEffect(() => {
    setdesabilitado(topic.length >= 5);
  }, [topic]);

  const handleSelectMode = (mode) => {
    setSelectedMode((prev) => (prev === mode ? null : mode));
  };

  const SalvarDados = async () => {
    if (selectedmode === null) {
      Alert.alert("Selecione um modo");
      return;
    }
    if (topic.length === 0) {
      Alert.alert("adicione pelo menos uma abordagem");
      return;
    }
    try {
      await AsyncStorage.setItem("abordagem", JSON.stringify(topic));
      await AsyncStorage.setItem("atendimento", selectedmode);
      console.log("Abordagem e atendimento salva com sucesso");
      router.push("./ValueperHour");
    } catch (error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Voltar</Text>
      </View>

      {/* Título */}
      <View style={styles.TitleContainer}>
        <Text style={styles.TitleText}>
          Fale sobre sua abordagem de trabalho, métodos para alcançar o objetivo
          do cliente e formas de atendimento
        </Text>
      </View>

      {/* Subtítulo */}
      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
          Aqui você deve escolher uma forma de atendimento (presencial, online,
          tanto faz/a combinar) e pode explicar como você trabalha, como lida
          com os clientes, quais etapas costuma seguir ou que tipo de relação
          profissional valoriza. Isso ajuda o cliente a entender o que esperar
          ao contratar seus serviços.
        </Text>
      </View>

      {/* Forma de atendimento */}
      <View style={styles.Modecontainer}>
        <Text style={styles.TitleText}>Forma de atendimento</Text>

        {["Remoto", "Híbrido", "Presencial"].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={styles.stylesToucheable}
            onPress={() => handleSelectMode(mode)}
          >
            <View style={styles.ViewCheck}>
              {selectedmode === mode && <View style={styles.ViewCheckSquare} />}
            </View>
            <Text>{mode}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão para adicionar abordagem */}
      <View style={styles.ExperienceContainer}>
        <Pressable
          disabled={desabilitado}
          onPress={() => setModalVisible(true)}
          style={[
            styles.AddExperience,
            desabilitado && { backgroundColor: "#d3d3d3" },
          ]}
        >
          <Entypo
            name="plus"
            size={20}
            color={desabilitado ? "#888" : "black"}
          />
          <Text style={[styles.BtnTextAdd, desabilitado && { color: "#888" }]}>
            {desabilitado ? "Limite atingido" : "Adicionar item"}
          </Text>
        </Pressable>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.ModalHeader}>
              <Text style={styles.modalTitle}>Adicione um item</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalSubtitle}>
              ATENÇÃO! Adicione um item por vez
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Liste seu modo de trabalho e sua abordagem que te diferencia dos demais"
              multiline
              numberOfLines={5}
              maxLength={150}
              value={inputText}
              onChangeText={setInputText}
            />

            <Pressable style={styles.addButton} onPress={handleAddExperience}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Lista de abordagens */}
      <View style={styles.containeraftermodal}>
        <FlatList
          data={topic}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card text={item} />}
        />
      </View>

      {/* Botão Próximo */}
      <View style={styles.BtnContainer}>
        <Pressable style={styles.btn} onPress={() => SalvarDados()}>
          <Text style={styles.BtnText}>Próximo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

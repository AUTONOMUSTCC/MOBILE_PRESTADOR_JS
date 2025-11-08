import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter, router } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
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
import { setQualities } from "../../services/Addcreation.js";
import styles from "../../styles/StylesHighLigths.js";

const Card = ({ text }) => {
  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};
/*
const salvarDestaques = async (topic) => {
  setQualities(topic);
  console.log("Qualidade adcionada:", topic);
  router.push("./ServiceMode");
};
*/
export default function HighLigths() {
  let [desabilitado, setdesabilitado] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [topic, setTopic] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    if (topic.length >= 5) {
      setdesabilitado(true);
    } else {
      setdesabilitado(false);
    }
  }, [topic]);

  const handleAddExperience = () => {
    if (inputText.trim() !== "") {
      setTopic((prev) => {
        const updated = [...prev, inputText.trim()];
        console.log("Qualidade adicionada:", updated);
        return updated;
      });
      setInputText("");
      setModalVisible(false);
    }
  };

  const SalvarDados = async() => {
     try{
      await AsyncStorage.setItem("qualidade", JSON.stringify(topic));
      console.log("Qualidade salva com sucesso");
      router.push("./ServiceMode");
    }
    catch(error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  }

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Voltar</Text>
      </View>

      <View style={styles.TitleContainer}>
        <Text style={styles.TitleText}>
          Por que me escolher? Destaque o que faz você se destacar
        </Text>
      </View>

      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
          Este é o momento de mostrar ao cliente o que torna seu trabalho único.
          Escreva sobre suas qualidades, formas de atendimento ou resultados que
          você costuma entregar e que o tornam singular.
        </Text>
      </View>

      <View style={styles.ExperienceContainer}>
        <Pressable
          disabled={desabilitado}
          onPress={() => setModalVisible(true)}
          style={[
            styles.AddExperience,
            desabilitado && { backgroundColor: "#d3d3d3" }, // cinza quando desabilitado
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
              placeholder="liste os principais destaques da sua carreira e o que te torna diferente dos demais"
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

      {/* Lista de Experiências */}
      <View style={styles.containeraftermodal}>
        <FlatList
          data={topic}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card text={item} />}
          contentContainerStyle={styles.containeraftermodal}
        />
      </View>

      <View style={styles.BtnContainer}>
        <Pressable style={styles.btn} onPress={() => SalvarDados()}>
          <Text style={styles.BtnText}>Próximo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

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
  View
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/StylesTopics.js";

const Card = ({ text }) => {
  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};
/*
const salvarHabilidade = async(topic) =>{
    setAbilitys(topic);
    console.log("habilidades adicionadas:", topic);
    router.push('./HighLigths');
}*/
//TELA DE HABILIDADES 
export default function Topicswork() {
  let [desabilitado, setdesabilitado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [topic, setTopic] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  
  const FANTASMA = () => {
    setTopic(["Capacidade de solucionar problemas técnicos de forma rápida e eficiente.", "React, Next.js, Node.js", "Banco de Dados MySQL, MongoDB"]);
  }

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
        console.log("habilidades adicionadas:", updated);
        return updated;
      });
      setInputText("");
      setModalVisible(false);
    } else {
      Alert.alert("Atenção", "Digite algo antes de adicionar.");
    }
  };

  const SalvarDados = async() => {
    try{
      await AsyncStorage.setItem("habilidades", JSON.stringify(topic));
      console.log("Habilidade salva com sucesso");
      router.push('./HighLigths');

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
          Escreva sobre o que você faz em tópicos para facilitar a compreensão
          do cliente
        </Text>
      </View>

      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
          Liste suas principais habilidades de forma direta e organizada. Use
          tópicos curtos e claros, como se estivesse explicando para alguém que
          quer entender rapidamente como você pode ajudar.
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
          <Entypo name="plus" size={20} color={desabilitado ? "#888" : "black"} />
          <Text
            style={[
              styles.BtnTextAdd,
              desabilitado && { color: "#888" },
            ]}
          >
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
              placeholder="liste suas principais habilidades e o que você faz"
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
        <Pressable
          style={styles.btn}
          onPress={() => SalvarDados()}
        >
          <Text style={styles.BtnText}>Próximo</Text>
        </Pressable>
      </View>
       <View style={styles.text}>
        <Pressable
          style={styles.text}
          onPress={() => FANTASMA()}
        >
          <Text style={styles.BtnText}>.</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

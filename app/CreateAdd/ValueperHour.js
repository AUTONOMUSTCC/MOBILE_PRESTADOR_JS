import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
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
import styles from "../../styles/StylesValueperHour.js";

const Card = ({ text }) => {
  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};

export default function ServiceMode() {
  const [selectedmode, setmode] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [topic, setTopic] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [value, setValue] = useState("");
 

  const formatCurrency = (text) => {
    // Remove tudo que não for número
    let num = text.replace(/\D/g, "");
    // Divide por 100 para ter centavos
    let val = (parseInt(num, 10) / 100).toFixed(2);
    // Troca ponto por vírgula
    val = val.replace(".", ",");
    // Adiciona separador de milhar
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return val;
  };

  const handleChange = (text) => {
    setValue(formatCurrency(text));
  };

  const handleAddExperience = () => {
    if (inputText.trim() !== "") {
      setTopic((prev) => {
        const updated = [...prev, inputText.trim()];
        console.log("Experiência adicionada:", updated);
        return updated;
      });
      setInputText("");
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top , paddingBottom: insets.bottom}]}>
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
          Quase tudo pronto! Vamos apenas definir o seu preço por hora de trabalho
        </Text>
      </View>

      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
         Informe quanto você cobra por hora pelos seus serviços. 
         Pense no valor que representa sua experiência, a qualidade do seu 
         atendimento e o tipo de solução que você oferece. Os clientes verão 
         essa taxa no seu perfil e nos resultados de pesquisa assim que você 
         publicar seu perfil. 
        </Text>
      </View>

      <View style={styles.Modecontainer}>
        <Text style={styles.TitleText}>Valor por Hora</Text>
         <View
      style={styles.Viewvaluesinput}
    >
      {/* Prefixo */}
      <Text style={{ marginRight: 4 }}>R$</Text>

      {/* Input editável */}
      <TextInput
        style={{ flex: 1, fontSize: 16 }}
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="0,00"
      />

      {/* Sufixo */}
      <Text style={{ marginLeft: 4 }}>/hr</Text>
    </View>
      </View>

      <View style={styles.ExperienceContainer}>
        <Pressable
          style={styles.AddExperience}
          onPress={() => setModalVisible(true)}
        >
          <Entypo name="plus" size={20} color="black" />
          <Text style={styles.BtnTextAdd}>Adicionar item</Text>
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
              placeholder="liste suas principais habilidades e o que te torna diferente dos demais"
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
          onPress={() => router.push("../CreateAdd/description")}
        >
          <Text style={styles.BtnText}>Próximo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
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
import styles from "../../styles/StylesValueperHour.js";
import {useRouter} from "expo-router";


//sets
import { setValor, CreateADPrestador } from "../../services/Addcreation.js";

const Card = ({ text }) => {

  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};

export default function ServiceMode() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [topic, setTopic] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
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
/*
  const EnviarValorAbordagem = async (value) => {
    console.log(value);
    setValor(value);
    handleCreateAnuncio();
  //  router.push("../Logged/About");
  };
*/

  const SalvareEnviar = async() => {
    try{
      await AsyncStorage.setItem("valor" , value);
      console.log("Valor salvo com sucesso");
      const ok =  await CreateADPrestador();
      console.log(ok);
      router.push("../Logged/About");
    }
     catch(error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  }

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
    <SafeAreaView style={[styles.container, { paddingBottom: insets.bottom }]}>
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
          Quase tudo pronto! Vamos apenas definir o seu preço por hora de
          trabalho
        </Text>
      </View>

      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
          Informe quanto você cobra por hora pelos seus serviços. Pense no valor
          que representa sua experiência, a qualidade do seu atendimento e o
          tipo de solução que você oferece. Os clientes verão essa taxa no seu
          perfil e nos resultados de pesquisa assim que você publicar seu
          perfil.
        </Text>
      </View>

      <View style={styles.Modecontainer}>
        <Text style={styles.TitleText}>Valor por Hora</Text>
        <View style={styles.Viewvaluesinput}>
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
          <Text style={{ marginLeft: 3 }}>/hr</Text>
        </View>
      </View>

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
          onPress={() => SalvareEnviar()}
        >
          <Text style={styles.BtnText}>Criar Anúncio</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/StylesDescription.js";
import { setDescription } from "../../services/Addcreation.js";

/* Agr com async storage, ^N vou usar mais
const SalvarDescricao =  async(descr) => {
  setDescription(descr);
  console.log('descrição enviada');
  router.push('../CreateAdd/Workexperiences');
}
*/
export default function description() {
  const [descr, setdescription] = React.useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const EnviarDados = async() =>{
    try{
      await AsyncStorage.setItem("@descricao", descr);
      console.log("Descrição salva com sucesso!");
      router.push('../CreateAdd/Workexperiences');
    }
    catch(error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Voltar</Text>
        </View>

        <View style={styles.TitleContainer}>
          <Text style={styles.TitleText}>Ótimo! Agora, escreva uma breve descrição sobre você e o que você trabalha</Text>
        </View>
        <View style={styles.SubTitleContainer}>
          <Text style={styles.SubTitleText} >Conte quem você é e o que você faz de melhor. Descreva brevemente sua profissão, suas habilidades e no que você se destaca. Pense no que as pessoas devem saber logo de cara sobre seu trabalho. Você sempre pode editar depois; apenas certifique-se de revisar agora.</Text>
        </View>
        <View style={styles.DescriptionContainer} >
          <TextInput style={styles.DescriptionInput}
            onChangeText={setdescription}
            editable
            multiline
            numberOfLines={10}
            maxLength={500}
            value={descr}
            placeholder="Inclua sua área de atuação, especialidades e como 
            você costuma resolver os problemas ou atender seus clientes"
            autoCapitalize="none"
          >
          </TextInput>
        </View>
        <View style={styles.BtnContainer}>
          <Pressable style={styles.btn} onPress={() => EnviarDados() } >
            <Text style={styles.BtnText}>Próximo</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

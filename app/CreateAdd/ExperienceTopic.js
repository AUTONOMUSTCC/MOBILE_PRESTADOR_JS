import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/StylesExperienceTopic.js";


export default function experiencetopics() {
  const [modalVisible, setModalVisible] = useState(false);
  const [experiencia, setExperiencia] = useState("");
  const [description, setdescription] = React.useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const adicionarExperiencia = () => {
    console.log("Experiência adicionada:", experiencia);
    setExperiencia(""); // limpa o campo
    setModalVisible(false); // fecha o modal
  };

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
          <Text style={styles.TitleText}>Escreva sobre suas experiências de trabalho em tópicos</Text>
        </View>
        <View style={styles.SubTitleContainer}>
          <Text style={styles.SubTitleText} >Compartilhe os lugares por onde você já passou, os tipos de projetos ou
           funções que realizou e o que aprendeu em cada experiência. Não é preciso listar tudo, destaque o que mais marcou sua trajetória. Use uma linguagem simples e direta</Text>
        </View>
        <View style={styles.ExperienceContainer} >
         <Pressable style={styles.AddExperience} onPress={() => setModalVisible(true)}>
          <Entypo name="plus" size={20} color="black" />
          <Text style={styles.BtnTextAdd}>
            Adicionar experiência 
          </Text>
         </Pressable>
        </View>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Adicione uma experiência de trabalho</Text>
            <Text style={styles.modalSubtitle}>
              ATENÇÃO! Adicione uma experiência por vez
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Compartilhe os lugares por onde você já passou e os tipos de projetos ou funções que realizou"
              multiline
            numberOfLines={5}
            maxLength={150}
              value={experiencia}
              onChangeText={setExperiencia}
            />

            <Pressable style={styles.addButton} onPress={adicionarExperiencia}>
              <Text style={styles.addButtonText}>Adicionar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <View style={styles.BtnContainer}>
            <Pressable style={styles.btn} onPress={() => router.push('../CreateAdd/description')} >
              <Text style={styles.BtnText}>Próximo</Text>
              </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

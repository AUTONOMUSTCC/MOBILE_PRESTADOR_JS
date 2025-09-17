import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
import styles from "../../styles/StylesExperience.js";

const Card = ({ text }) => {
  return (
    <View style={styles.Containercard}>
      <AntDesign name="check" size={16} color="grey" style={styles.icone} />
      <Text style={styles.TxtExperience}> {text} </Text>
    </View>
  );
};

export default function Workexperiences() {
  const [modalVisible, setModalVisible] = useState(false);
  const [experiencia, setExperiencia] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleAddExperience = () => {
    if (inputText.trim() !== "") {
      setExperiencia((prev) => {
        const updated = [...prev, inputText.trim()];
        console.log("Experiência adicionada:", updated);
        return updated;
      });
      setInputText("");
      setModalVisible(false);
    }
  };

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
          Escreva sobre suas experiências de trabalho em tópicos
        </Text>
      </View>

      <View style={styles.SubTitleContainer}>
        <Text style={styles.SubTitleText}>
          Compartilhe os lugares por onde você já passou, os tipos de projetos
          ou funções que realizou e o que aprendeu em cada experiência. Não é
          preciso listar tudo, destaque o que mais marcou sua trajetória. Use
          uma linguagem simples e direta
        </Text>
      </View>

      <View style={styles.ExperienceContainer}>
        <Pressable
          style={styles.AddExperience}
          onPress={() => setModalVisible(true)}
        >
          <Entypo name="plus" size={20} color="black" />
          <Text style={styles.BtnTextAdd}>Adicionar experiência</Text>
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
              <Text style={styles.modalTitle}>
                Adicione uma experiência de trabalho
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign
                  name="close"
                  size={22}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalSubtitle}>
              ATENÇÃO! Adicione uma experiência por vez
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Compartilhe os lugares por onde você já passou e os tipos de projetos ou funções que realizou"
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
          data={experiencia}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card text={item} />}
          contentContainerStyle={styles.containeraftermodal}
        />
      </View>

      <View style={styles.BtnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => router.push("../CreateAdd/Topicswork")}
        >
          <Text style={styles.BtnText}>Próximo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

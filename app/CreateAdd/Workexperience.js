import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
import styles from "../../styles/StylesExperience.js";
import Entypo from '@expo/vector-icons/Entypo';


export default function description() {
  const [description, setdescription] = React.useState("");
  const insets = useSafeAreaInsets();
  const router = useRouter();
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
           funções que realizou e o que aprendeu em cada experiência. Não é preciso listar tudo, destaque o que mais marcou sua trajetória. Use uma linguagem simples e direta,</Text>
        </View>
        <View style={styles.ExperienceContainer} >
         <Pressable>
          <Text style={styles.BtnTextAdd}>
                          <Entypo name="plus" size={24} color="black" />

            Adicionar experiência 
          </Text>
         </Pressable>
        </View>
        <View style={styles.BtnContainer}>
            <Pressable style={styles.btn} onPress={() => router.push('../CreateAdd/description')} >
              <Text style={styles.BtnText}>Próximo</Text>
              </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

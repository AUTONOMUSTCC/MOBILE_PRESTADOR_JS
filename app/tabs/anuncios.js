import { Ionicons } from "@expo/vector-icons";
import { useRouter, router} from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Category from "../../componentes/Category.jsx";
import Specialty from "../../componentes/specialty.jsx";
import styles from "../../styles/AnunciosCreation.js";

import {
  setCategoria,
  setEspecialidade,
} from "../../services/Addcreation.js";

const caracther = require("../../assets/images/CaractherCreateImage.png");

const categorias = [
  {
    nome: "Tecnologia e TI",
    especialidades: [
      "Segurança da informação",
      "Configuração de redes ",
      "Suporte a hardware",
      "Documentação de Projetos",
      "Suporte a software",
    ],
  },
  {
    nome: "Saúde e Bem-Estar",
    especialidades: [
      "Nutrição",
      "Fisioterapia",
      "Medicina",
      "Enfermagem",
      "Psicologia",
    ],
  },
  {
    nome: "Construção e Reformas",
    especialidades: [
      "Pintura",
      "Alvenaria",
      "Elétrica",
      "Hidráulica",
      "Reformas",
    ],
  },
  {
    nome: "Serviços Domésticos e Limpeza",
    especialidades: [
      "Limpeza",
      "Passadoria",
      "Organização",
      "Cozinha",
      "Jardinagem",
    ],
  },
  {
    nome: "Reparos e Instalações",
    especialidades: [
      "Instalação elétrica",
      "Reparos hidráulicos",
      "Marcenaria",
      "Montagem de móveis",
      "Consertos gerais",
    ],
  },
];

 

export default function Anuncios() {
  // começa com a primeira categoria já ativa
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categorias[0].nome);
  const [especialidadesSelecionadas, setEspecialidadesSelecionadas] = useState([]);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const EnviarDados = async () => {

    if (especialidadesSelecionadas.length === 0) {
    Alert.alert("Selecione pelo menos uma especialidade antes de continuar.");
    return;}
    try {
      await AsyncStorage.setItem("@categoria", categoriaSelecionada);
      await AsyncStorage.setItem(
        "@especialidades",
        JSON.stringify(especialidadesSelecionadas)
      );
      console.log("Categoria e especialidades salvas com sucesso!");
      router.push("../CreateAdd/description");
    } catch (error) {
      console.error("Erro ao salvar dados no AsyncStorage:", error);
    }
  };

  const handleSelecionarCategoria = (categoriaNome) => {
    if (categoriaSelecionada === categoriaNome) {
      // deseleciona se clicar na mesma
      setCategoriaSelecionada(null);
      setEspecialidadesSelecionadas([]);
    } else {
      setCategoriaSelecionada(categoriaNome);
      setEspecialidadesSelecionadas([]);
    }
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

        <ScrollView>
          <View style={styles.Titlecontainer}>
            <Text style={styles.Title}>
              Para criar seu anúncio, responda algumas questões
            </Text>
          </View>

          <View style={styles.SubtitleContainer}>
            <Text style={styles.Subtitle}>
              Não se preocupe, todas as informações poderão ser alteradas futuramente
            </Text>
          </View>

          <View style={styles.caracterIcon}>
            <Image source={caracther} />
          </View>

          <View style={styles.ContainerQuestion}>
            <Text style={styles.TxtQuestion}>
              Que tipo de trabalho você está aqui para fazer?
            </Text>
          </View>

          {/* Seleção de categoria */}
          <View style={styles.ContainerOptions}>
            <View style={styles.Category}>
              <Text style={styles.instructionLabel}>Selecione 1 categoria</Text>
              <View style={styles.Options}>
                <Category
                  categorias={categorias}
                  categoriaSelecionada={categoriaSelecionada}
                  onSelecionar={(categoriaObj) =>
                    handleSelecionarCategoria(categoriaObj.nome)
                  }
                />
              </View>
            </View>

            {/* Seleção de especialidades */}
            {categoriaSelecionada && (
              <View style={styles.Specialties}>
                <Text style={styles.instructionLabel}>
                  Selecione até 3 especialidades
                </Text>
                <View style={styles.Options}>
                  <Specialty
                    categoriaObj={categorias.find(
                      (c) => c.nome === categoriaSelecionada
                    )}
                    onSelecionar={setEspecialidadesSelecionadas}
                  />
                </View>
              </View>
            )}
          </View>

          <View style={styles.BtnContainer}>
            <Pressable
              style={styles.btn}
              onPress={() =>
                EnviarDados()
              }
            >
              <Text style={styles.BtnText}>Próximo</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

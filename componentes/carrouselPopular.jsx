import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Progress from "react-native-progress";

// Router
import { useRouter } from "expo-router";

// SVG's

// CONSTANTES
const { width } = Dimensions.get("screen");
const heightTotal = Dimensions.get("screen").height;

// Dados separados por categoria (SEM ALTERAR NOMES)
const dataPorCategoria = {
  // --------------------------------------------------
  // TECNOLOGIA E TI
  // --------------------------------------------------
  "Tecnologia e TI": [
    {
      image: require("../assets/images/seguranca.png"),
      id: "1",
      title: "Segurança da informação",
      description: "Proteção de dados e infraestrutura",
      progress: 0.65,
    },
    {
      image: require("../assets/images/redes.png"),
      id: "2",
      title: "Configuração de redes",
      description: "Instalação e manutenção de redes",
      progress: 0.72,
    },
    {
      image: require("../assets/images/suporte.png"),
      id: "3",
      title: "Suporte a hardware",
      description: "Montagem e reparo de equipamentos",
      progress: 0.58,
    },
    {
      image: require("../assets/images/ti_documentacao.png"),
      id: "4",
      title: "Documentação de Projetos",
      description: "Especificações e padronização técnica",
      progress: 0.44,
    },
    {
      image: require("../assets/images/soft.png"),
      id: "5",
      title: "Suporte a software",
      description: "Instalação e solução de problemas",
      progress: 0.61,
    },
  ],

  // --------------------------------------------------
  // SAÚDE E BEM-ESTAR
  // --------------------------------------------------
  "Saúde e Bem-Estar": [
    {
      image: require("../assets/images/saude_nutricao.png"),
      id: "1",
      title: "Nutrição",
      description: "Acompanhamento nutricional completo",
      progress: 0.55,
    },
    {
      image: require("../assets/images/saude_fisioterapia.png"),
      id: "2",
      title: "Fisioterapia",
      description: "Reabilitação e tratamento corporal",
      progress: 0.7,
    },
    {
      image: require("../assets/images/saude_medicina.png"),
      id: "3",
      title: "Medicina",
      description: "Atendimento clínico especializado",
      progress: 0.82,
    },
    {
      image: require("../assets/images/saude_enfermagem.png"),
      id: "4",
      title: "Enfermagem",
      description: "Cuidados domiciliares e técnicos",
      progress: 0.6,
    },
    {
      image: require("../assets/images/saude_medicina.png"),
      id: "5",
      title: "Psicologia",
      description: "Apoio emocional e terapias",
      progress: 0.74,
    },
  ],

  // --------------------------------------------------
  // CONSTRUÇÃO E REFORMAS
  // --------------------------------------------------
  "Construção e Reformas": [
    {
      image: require("../assets/images/reformas_geral.png"),
      id: "1",
      title: "Reformas",
      description: "Serviços completos",
      progress: 0.9,
    },
    {
      image: require("../assets/images/reformas_alvenaria.png"),
      id: "2",
      title: "Alvenaria",
      description: "Reformas estruturais",
      progress: 0.5,
    },
    {
      image: require("../assets/images/reformas_eletrica.png"),
      id: "3",
      title: "Elétrica",
      description: "Instalação elétrica",
      progress: 0.4,
    },
    {
      image: require("../assets/images/reformas_hidraulica.png"),
      id: "4",
      title: "Hidráulica",
      description: "Serviços de encanador",
      progress: 0.75,
    },
    {
      image: require("../assets/images/reformas_pintura.png"),
      id: "5",
      title: "Pintura",
      description: "Pintura completa",
      progress: 0.7,
    },
  ],

  // --------------------------------------------------
  // SERVIÇOS DOMÉSTICOS E LIMPEZA
  // --------------------------------------------------
  "Serviços Domésticos e Limpeza": [
    {
      image: require("../assets/images/limpeza_limpeza.png"),
      id: "1",
      title: "Limpeza",
      description: "Limpeza básica e pesada",
      progress: 0.68,
    },
    {
      image: require("../assets/images/limpeza_limpeza.png"),
      id: "2",
      title: "Passadoria",
      description: "Passagem de roupas",
      progress: 0.45,
    },
    {
      image: require("../assets/images/limpeza_limpeza.png"),
      id: "3",
      title: "Organização",
      description: "Organização de ambientes",
      progress: 0.52,
    },
    {
      image: require("../assets/images/limpeza_limpeza.png"),
      id: "4",
      title: "Cozinha",
      description: "Suporte doméstico na cozinha",
      progress: 0.63,
    },
    {
      image: require("../assets/images/limpeza_limpeza.png"),
      id: "5",
      title: "Jardinagem",
      description: "Cuidado e manutenção de jardins",
      progress: 0.58,
    },
  ],

  // --------------------------------------------------
  // REPAROS E INSTALAÇÕES
  // --------------------------------------------------
  "Reparos e Instalações": [
    {
      image: require("../assets/images/reparos_eletrica.png"),
      id: "1",
      title: "Instalação elétrica",
      description: "Instalações e reparos elétricos",
      progress: 0.66,
    },
    {
      image: require("../assets/images/reparos_eletrica.png"),
      id: "2",
      title: "Reparos hidráulicos",
      description: "Reparos e manutenção hidráulica",
      progress: 0.71,
    },
    {
      image: require("../assets/images/reparos_eletrica.png"),
      id: "3",
      title: "Marcenaria",
      description: "Fabricação e reparo de móveis",
      progress: 0.54,
    },
    {
      image: require("../assets/images/reparos_eletrica.png"),
      id: "4",
      title: "Montagem de móveis",
      description: "Montagens e desmontagens",
      progress: 0.64,
    },
    {
      image: require("../assets/images/reparos_eletrica.png"),
      id: "5",
      title: "Consertos gerais",
      description: "Pequenas manutenções",
      progress: 0.59,
    },
  ],

  // --------------------------------------------------
  // FALLBACK
  // --------------------------------------------------
  vazio: [
    {
      image: require("../assets/images/vazio1.png"),
      id: "1",
      title: "Nenhuma categoria",
      description: "Crie um anúncio",
      progress: 0,
    },
    {
      image: require("../assets/images/vazio1.png"),
      id: "2",
      title: "Vazio",
      description: "Crie um anúncio",
      progress: 0,
    },
    {
      image: require("../assets/images/vazio1.png"),
      id: "3",
      title: "Sem categoria",
      description: "Crie um anúncio",
      progress: 0,
    },
  ],
};

// 🔥 MAPA DE NORMALIZAÇÃO
const categoriaMap = {
  // TECNOLOGIA E TI
  "tecnologia e ti": "Tecnologia e TI",
  "tecnologia & ti": "Tecnologia e TI",
  "t.i": "Tecnologia e TI",
  "ti": "Tecnologia e TI",

  // CONSTRUÇÃO
  "construção e reformas": "Construção e Reformas",
  "construcao e reformas": "Construção e Reformas",

  // SAÚDE
  "saúde e bem-estar": "Saúde e Bem-Estar",
  "saude e bem-estar": "Saúde e Bem-Estar",

  // DOMÉSTICOS
  "serviços domésticos e limpeza": "Serviços Domésticos e Limpeza",
  "servicos domesticos e limpeza": "Serviços Domésticos e Limpeza",

  // REPAROS
  "reparos e instalações": "Reparos e Instalações",
  "reparos e instalacoes": "Reparos e Instalações",
};

const normalizar = (texto) => {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

const CarrouselPop = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [data, setData] = useState([]);

  const router = useRouter();

  // Buscar categoria salva
  useEffect(() => {
    const loadCategoria = async () => {
      try {
        const categoriaSalva = await AsyncStorage.getItem("categoria");

        if (!categoriaSalva) {
          setData(dataPorCategoria["vazio"]);
          return;
        }
        const keyNormalizada = normalizar(categoriaSalva);
        const categoriaFinal = categoriaMap[keyNormalizada] || "vazio";

      setData(dataPorCategoria[categoriaFinal]);
      } catch (error) {
        console.error("Erro ao carregar categoria:", error);
        setData(dataPorCategoria["vazio"]);
      }
    };

    loadCategoria();
  }, []);

  const handleCardPress = async () => {
    const cat = await AsyncStorage.getItem("categoria");
    router.push({
      pathname: "../Logged/Professionals",
      params: { categoria: cat },
    });
  };

  const handleScroll = (event) => {
    const itemWidth = width * 0.4 + 12;
    const index = Math.round(event.nativeEvent.contentOffset.x / itemWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCardPress(item.title)}
      activeOpacity={0.7}
    >
      <Image
        source={item.image}
        style={{
          width: "100%",
          height: "55%",
          resizeMode: "contain",
          marginTop: 0,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>

        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}

        <Progress.Bar
          progress={item.progress}
          width={140}
          color="#264653"
          unfilledColor="#C4E4F2"
          borderWidth={0}
        />

        <Text style={styles.qtdWorkers}>
          <Text style={styles.number}>{1000 * item.progress}</Text>{" "}
          Profissionais
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (data.length === 0) {
    return (
      <View
        style={{
          height: heightTotal * 0.2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#888" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, { opacity: i === currentIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: heightTotal * 0.2,
    width: width,
  },
  card: {
    flexDirection: "column",
    height: heightTotal * 0.2,
    width: width * 0.4,
    borderRadius: 16,
    borderColor: "#ECEFF3",
    borderWidth: 1,
    backgroundColor: "#fff",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
    width: width * 0.4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 8,
    color: "#666D80",
  },
  description: {
    fontSize: 12,
    color: "#1A1B25",
    fontFamily: "Poppins",
    fontWeight: "medium",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    height: 0,
    width: 0,
    backgroundColor: "#333",
    borderRadius: 3,
    marginHorizontal: 4,
  },
  qtdWorkers: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "#82A2AF",
  },
  number: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "#82A2AF",
    fontWeight: "bold",
  },
});

export default CarrouselPop;

import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import Carrousel from "../../componentes/carrouselCard";
import CarrouselCategorias from "../../componentes/carrouselCategorias";
import CarrouselPop from "../../componentes/carrouselPopular";
import api from '../../services/api';
import styles from "../../styles/HomeStyle";

export const { width } = Dimensions.get("window");

// ICONES
import AsyncStorage from "@react-native-async-storage/async-storage";
import Advertisingicon from "../../assets/vectors/Advertisingicon";
import Bellicon from "../../assets/vectors/Bellicon";
import CreateAdicon from "../../assets/vectors/CreateAdicon";

// CONSTS

const HomeScreen = () => {
  const [pesquisa, setPesquisa] = useState("");
  const router = useRouter();
  
  const onPress = () => {
   router.push('../Logged/notifications');
  };
useEffect(() => {
  const getCategorias = async () => {
    try {
   const idUsuarioStr = await AsyncStorage.getItem("idUsuario");
    const id = idUsuarioStr ? parseInt(idUsuarioStr, 10) : 0;
        const response = await api.get("/api/PublicacaoPrestador");
      const dados = response.data;
      const anuncioFiltrado = dados.find((a) => a.publicacaoPrestador.idPrestador === id );
      // Garante que não quebra caso publicacaoPrestador seja undefined

      const categoria = anuncioFiltrado?.publicacaoPrestador?.categoriaPublicacaoPrestador;
      console.log(categoria);

      let categoriaFinal = categoria;

      // Se a categoria vier vazia/null/undefined → usa fallback
      if (!categoria || categoria === "" || categoria === null) {
        categoriaFinal = "vazio"; // categoria fallback
      }

      await AsyncStorage.setItem("categoria", categoriaFinal);

    } catch (error) {
      console.error("Erro ao carregar categoria:", error);
      // Caso dê erro na API, ainda salva fallback para evitar falhas do app
      await AsyncStorage.setItem("categoria", "vazio");
    }
  };
  getCategorias();
}, []);


  return (
    
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      {/*PESQUISA */}
        {/* STATUS BAR */}
           
      <View style={styles.pesquisaContainer}>

       
      </View>

      {/* Corpo da tela */}
      {/*PRIMEIRO CARROUSEL  */}
      <View style={styles.body}>
        <View style={styles.view1}>
          <View style={styles.top}> 
          <Text style={styles.text}>Nossas ferramentas</Text>
          <Pressable onPress={onPress}>
          <Bellicon />
          </Pressable>
          </View>
          <Carrousel />
        </View>

        {/*Informações passoais  */}
        <View style={styles.viewcontrolPOSTS}>
          <View style={styles.esquerda}>
            <Text style={styles.textotop}>Suas avaliações:</Text>
            <Text style={{ fontWeight: "bold" }}>0</Text>
          </View>
          <Link href="/tabs/profile" style={{ alignItems: "center" }}>
            <View style={styles.centro}>
              <Advertisingicon />
              <Text style={styles.texto}>Ver Perfil</Text>
            </View>
          </Link>

          <Link href="../salvos">
            <View style={styles.direita}>
              <CreateAdicon />
              <Text style={styles.texto}>Salvos</Text>
            </View>
          </Link>
        </View>

        {/*SEGUNDO CARROUSEL  */}
        <View style={styles.CarouselServicos}>
            <CarrouselPop />
        </View>
        {/*TERCEIRO CARROUSEL  */}
        <View style={styles.CarouselCategorias}>
          <Text style={styles.text}>Todas as categorias</Text>
          <CarrouselCategorias />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

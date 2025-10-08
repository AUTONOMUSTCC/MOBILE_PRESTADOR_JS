import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,   StatusBar
} from "react-native";
import Carrousel from "../../componentes/carrouselCard";
import CarrouselCategorias from "../../componentes/carrouselCategorias";
import CarrouselPop from "../../componentes/carrouselPopular";
import styles from "../../styles/HomeStyle";

export const { width } = Dimensions.get("window");

// ICONES
import Advertisingicon from "../../assets/vectors/Advertisingicon";
import Bellicon from "../../assets/vectors/Bellicon";
import CreateAdicon from "../../assets/vectors/CreateAdicon";
import Searchicon from "../../assets/vectors/Searchicon";

// CONSTS

const HomeScreen = () => {
  const [pesquisa, setPesquisa] = useState("");
  const router = useRouter();
  
  const onPress = () => {
   router.push('/notifications');
  };


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      {/*PESQUISA */}
        {/* STATUS BAR */}
            <StatusBar 
              barStyle="dark-content" // cor do texto da barra 
              backgroundColor="#fff" // cor de fundo
            />
      <View style={styles.pesquisaContainer}>
        <View style={styles.inputPesquisa}>
          <Searchicon />
          <TextInput
            style={styles.entry}
            placeholder="Pesquise uma categoria"
            onChangeText={setPesquisa}
            value={pesquisa}
          />
        </View>
        <View style={styles.notification}>
          <Pressable onPress={onPress}>
          <Bellicon />
          </Pressable>
        </View>
      </View>

      {/* Corpo da tela */}
      {/*PRIMEIRO CARROUSEL  */}
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text style={styles.text}>Nossas ferramentas</Text>
          <Carrousel />
        </View>

        {/*Informações passoais  */}
        <View style={styles.viewcontrolPOSTS}>
          <View style={styles.esquerda}>
            <Text style={styles.textotop}>Suas avaliações:</Text>
            <Text style={{ fontWeight: "bold" }}>3</Text>
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
          <Text style={styles.text}>Serviços mais populares</Text>
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

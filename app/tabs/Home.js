import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import styles from "../../styles/HomeStyle";
import Carrousel from "../../componentes/carrouselCard";
import CarrouselPop from "../../componentes/carrouselPopular";
import CarrouselCategorias from "../../componentes/carrouselCategorias";
import { Link } from "expo-router";

// ICONES
import Bellicon from "../../assets/vectors/Bellicon";
import Searchicon from "../../assets/vectors/Searchicon";
import Advertisingicon from "../../assets/vectors/Advertisingicon";
import CreateAdicon from "../../assets/vectors/CreateAdicon";
// Imagens

const HomeScreen = () => {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
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
        <Bellicon />
      </View>

      {/* Corpo da tela */}
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text style={styles.text}>Nossas ferramentas</Text>
          <Carrousel />
        </View>

        <View style={styles.viewcontrolPOSTS}>
          <View style={styles.direita}>
            <Text style={styles.textotop}>Suas avaliações:</Text>
            <Text style={{ fontWeight: "bold" }}>3</Text>
          </View>
          <View style={styles.centro}>
              <Advertisingicon />
              <Text style={styles.texto}>Ver perfil</Text>
          </View>
          <View style={styles.esquerda}>
            <CreateAdicon />
            <Text style={styles.texto}>Editar anúncio</Text>
          </View>
        </View>

        <View style={styles.CarouselServicos}>
          <Text style={styles.text}>Serviços mais populares</Text>
          <CarrouselPop />
        </View>

        <View style={styles.CarouselCategorias}>
          <Text style={styles.text}>Todas as categorias</Text>
          <CarrouselCategorias />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

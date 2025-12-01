import { Link, useRouter, useState } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import AboutImage from "../../assets/vectors/AboutImage.jsx";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import styles from "../../styles/AboutStyles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api.js";

//IMPORTS PARA O ANÚNCIO
/**import {
  getAbilitys,
  getCategoria,
  getDescription,
  getExperience,
  getQualities,
  getServicemode,
  getValor,
  getAbordagem,
} from "../../services/Addcreation.js";
*/

const imagensPerfil = {
  30: require("../../assets/images/30.png"),
  36: require("../../assets/images/36.png"),
  37: require("../../assets/images/30.png"),
};

export default function AboutScreen() {
  const router = useRouter();
  const [status, setStatus] = React.useState("Pendente");
  //RESGATANDO VALORES PARA O ANUNCIO
  //Apenas teste const dataTESTE = getDate();
  const [experiencias, setExperiencias] = React.useState([]);
  const [habilidades, sethabilidades] = React.useState([]);
  const [destaque, setDestaque] = React.useState([]);
  const [abordagem, setabordagem] = React.useState([]);
  ///-------------------
  const [valor, setValor] = React.useState("");
  const [categoria, setcategoria] = React.useState("");
  const [descricao, setdescricao] = React.useState("");
  const [atendimento, setatendimento] = React.useState("");

  //IMAGENS DOS PERFIS

  const [fotoId, setFotoId] = React.useState(null);

  React.useEffect(() => {
    const DadosAnuncio = async () => {
      const idbruto = await AsyncStorage.getItem("idUsuario");
      const id = parseInt(idbruto, 10);
      setFotoId(id);

      const response = await api.get("/api/PublicacaoPrestador/");
      const todosAnuncios = response.data;

      // Se a API retorna uma lista:
      const lista = Array.isArray(todosAnuncios)
        ? todosAnuncios
        : [todosAnuncios];

      //agr filtro pelo id
      const meusAnuncios = lista.filter(
        (a) => a.publicacaoPrestador?.idPrestador === id
      );

      if (meusAnuncios.length === 0) {
        console.warn("Nenhum anúncio encontrado para este prestador.");
        return;
      }

      const anuncio = meusAnuncios[0];
      // Extrai o objeto principal
      const publicacao = anuncio.publicacaoPrestador;
      setValor(publicacao.valorPublicacaoPrestador ?? "");
      setcategoria(publicacao.categoriaPublicacaoPrestador ?? "");
      setdescricao(publicacao.descricaoPublicacaoPrestador ?? "");
      setatendimento(publicacao.formaDeAtendimentoPrestador ?? "");

      sethabilidades(
        anuncio.publicacaoPrestadorHabilidades?.map(
          (h) => h.descricaoHabilidadePrestador
        ) || []
      );

      setExperiencias(
        anuncio.publicacaoPrestadorExperiencias?.map(
          (e) => e.descricaoExperienciaPrestador
        ) || []
      );

      setDestaque(
        anuncio.publicacaoPrestadorQualidades?.map(
          (q) => q.descricaoQualidadePrestador
        ) || []
      );

      setabordagem(
        anuncio.publicacaoPrestadorAbordagens?.map(
          (a) => a.descricaoAbordagemPrestador
        ) || []
      );
    };
    DadosAnuncio();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header com imagem e status */}

      <View style={styles.headerContainer}>
        <Link href="/tabs/profile">
          <Arrowicon style={styles.icon} />
        </Link>
        <Text style={styles.txthead}>VOLTAR</Text>
      </View>

      <View style={styles.ChangableInfos}>
        <View style={styles.header}>
          <View style={styles.statusBox}></View>
          <View style={styles.statusBox}>
            <Image
              source={imagensPerfil[fotoId]}
              style={styles.profilePicture}
            />
          </View>
          <View style={styles.statusBox3}>
            <Text style={styles.statusTitle}>Status do perfil</Text>
            <TouchableOpacity style={styles.statusButton}>
              <Text> {status}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <Text id="Valor" style={styles.tag}>
            R${valor}/h
          </Text>
          <Text id="Categoria" style={styles.tag}>
            {categoria}
          </Text>
          <Text id="Atendimento" style={styles.tag}>
            {atendimento}
          </Text>
        </View>

        {/* Seção Sobre */}
        <Text style={styles.sectionTitle}>Sobre</Text>
        <Text style={styles.paragraph}>{descricao}</Text>

        {/* O que faço */}
        <Text style={styles.sectionTitle}>O que faço ?</Text>
        <View style={styles.list}>
          {/*HABILIDADES */}
          {habilidades.map((hab, index) => (
            <Text key={index} style={styles.listItem}>
              ✓ {hab}
            </Text>
          ))}
        </View>

        {/* Experiências */}
        <Text style={styles.sectionTitle}>Experiências de trabalho</Text>
        <View style={styles.list}>
          <View style={styles.list}>
            {experiencias.map((exp, index) => (
              <Text key={index} style={styles.listItem}>
                ✓ {exp}
              </Text>
            ))}
          </View>
        </View>

        {/* Abordagem */}
        <Text style={styles.sectionTitle}>Abordagem</Text>
        {abordagem.map((abr, index) => (
          <Text key={index} style={styles.paragraph}>
            {abr}
          </Text>
        ))}

        {/* Por que me escolher */}
        <Text style={styles.sectionTitle}>Por que me escolher?</Text>
        <View style={styles.list}>
          <View style={styles.list}>
            {/*QUALIDADES */}
            {destaque.map((dest, index) => (
              <Text key={index} style={styles.listItem}>
                ✓ {dest}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  Modal,
  View,
  StatusBar,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import api from "../../services/api.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Link, useRouter } from "expo-router";
import { Rating } from "react-native-ratings";
import Carrousel from "../../componentes/carrouselCidades.jsx";
import IconCheckbox from "../../componentes/checkBox.jsx";
import styles from "../../styles/SearchStyle.js";
import ProfileRedondo from "../../assets/vectors/ProfileRedondo.jsx";
import Searchicon from "../../assets/vectors/Searchicon.jsx";
import { imagensClientes } from "../../assets/images/perfis";

export const { width } = Dimensions.get("window");

// ICONES
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import Filtrosicon from "../../assets/vectors/Filtrosicon.jsx";

// CONSTS

export default function Professionals() {
  const [pesquisa, setPesquisa] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const router = useRouter();

  //Estados para o anúncio
  //const [nome, setnome] = useState("");
  const [valor, setvalor] = useState("");
  const [descricao, setdescricao] = useState("");
  const [atendimento, setatendimento] = useState("");
  const [categoria, setcategoria] = useState("");
  const [Anuncios, setanuncios] = useState([]);
  const [clientes, setCliente] = useState({});
  //função  para pegar anuncios por categoria
  const AnunciosCategoria = async () => {
    try {
      const response = await api.get("api/PublicacaoCliente");
      const publicacoes = response.data;
      setanuncios(publicacoes);
      // Busca nomes de prestadores relacionados (uma vez só)
      const ids = publicacoes.map((a) => a.publicacaoCliente.idCliente);
      const clientesData = {};

      await Promise.all(
        ids.map(async (id) => {
          const resp = await api.get(`/ClienteFiltro/${id}`);
          const dados = resp.data;
          clientesData[id] = {
            nome: dados.nomeCliente,
            avaliacao: dados.avaliacaoCliente || 0, // se não vier, assume 0
          };
        })
      );

      setCliente(clientesData);
    } catch (e) {
      console.error("Erro ao buscar anúncios:", e);
    }
  };

  useEffect(() => {
    AnunciosCategoria();
  }, []);

  const Vermair = async (idCliente) => {};

  const renderAnuncio = ({ item }) => {
    const id = item.publicacaoCliente.idCliente;
    const cliente = clientes[id];
    const nome = cliente?.nome || "Carregando...";
    const aval = cliente?.avaliacao || 0;
    return (
      <View style={styles.ChangableInfos}>
        <View style={styles.cabecalho}>
          <Image
            source={imagensClientes[id] || imagensClientes.default}
            style={{
              width: 50,
              height: 55,
              borderRadius: 100,
              marginRight: 5,
            }}
          />

          <View style={styles.cabecalho1}>
            <Text style={styles.cabecalhotexto}>{nome}</Text>
            <Rating
              type="star"
              ratingCount={5}
              readonly={true}
              imageSize={15}
              startingValue={aval}
              style={{ alignItems: "flex-start" }}
            />
            <Text style={styles.CountAval}>(3 Avaliações)</Text>
            <View style={styles.cabecalho2}>
              <View style={styles.infos}>
                <Text style={styles.infotext}>
                  R${item.publicacaoCliente.valorPublicacaoCliente || "0"}/h
                </Text>
              </View>
              <View style={styles.infos}>
                <Text style={styles.infotext}>
                  {item.publicacaoCliente.categoriaPublicacaoCliente ||
                    "Categoria"}
                </Text>
              </View>
              <View style={styles.infos}>
                <Text style={styles.infotext}>
                  {item.publicacaoCliente.formaDeAtendimentoCliente ||
                    "Atendimento"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.corpo}>
          <Text style={styles.corpodescricao}>
            {item.publicacaoCliente.descricaoPublicacaoCliente?.slice(0, 150) ||
              "Sem descrição disponível."}
            ...
          </Text>
        </View>

        <View style={styles.final}>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "../Logged/AdvertisementClient",
                params: {
                  idPrestador: String(item.publicacaoCliente.idCliente),
                },
              })
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttontext}>Ver detalhes</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/*HEADER */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <Arrowicon style={styles.icon} />
        </Pressable>
        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>Busque Clientes</Text>
        </View>
        <Filtrosicon style={styles.icon} onPress={() => setModalIsOpen(true)} />
      </View>

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
      </View>

      {/* Corpo da tela */}

      <View style={styles.body}>
        <FlatList
          data={Anuncios}
          keyExtractor={(item) =>
            item.publicacaoCliente.idPublicacaoCliente.toString()
          }
          renderItem={renderAnuncio}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        />
        <Modal
          animationType="fade" // "slide", "fade" ou "none"
          transparent={true}
          visible={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)} // Necessário no Android
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalContentCorpo}>
                <View style={styles.modalArrow}>
                  <Arrowicon
                    style={styles.icon}
                    onPress={() => setModalIsOpen(false)}
                  />
                </View>

                <View style={styles.modalCidades}>
                  <Text style={styles.title}>Estados</Text>
                  <View style={styles.Carrousel}>
                    <Carrousel />
                  </View>
                </View>
                <View style={styles.modalPreferencia}>
                  <Text style={styles.title}>Preferência por</Text>

                  <View style={styles.modalPrebut}>
                    <View style={styles.buttonPre}>
                      <Text style={styles.buttontextPre}>Presencial</Text>
                    </View>
                    <View style={styles.buttonPre}>
                      <Text style={styles.buttontextPre}>Online</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.modalFiltrar}>
                  <Text style={styles.title}>Filtrar por</Text>
                  <IconCheckbox
                    label="Melhores avaliações"
                    value={checked1}
                    onValueChange={setChecked1}
                  />
                  <IconCheckbox
                    label="Menor preço por hora"
                    value={checked2}
                    onValueChange={setChecked2}
                  />
                  <IconCheckbox
                    label="A mais tempo na plataforma"
                    value={checked3}
                    onValueChange={setChecked3}
                  />
                  <IconCheckbox
                    label="Sucesso nos trabalhos"
                    value={checked4}
                    onValueChange={setChecked4}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

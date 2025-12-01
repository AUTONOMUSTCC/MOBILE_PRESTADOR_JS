import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
  Image,
} from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";
import { Rating } from "react-native-ratings";

import Carrousel from "../../componentes/carrouselCidades";
import IconCheckbox from "../../componentes/checkBox";
import api from "../../services/api.js";
import { imagensClientes } from "../../assets/images/perfis.js";

import styles from "../../styles/ProfessionalsStyle.js";
import Arrowicon from "../../assets/vectors/Arrowicon";

export const { width } = Dimensions.get("window");

export default function Professionals() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [Anuncios, setAnuncios] = useState([]);
  const [prestadores, setPrestadores] = useState({});

  const router = useRouter();
  const { categoria } = useLocalSearchParams();

  const AnunciosCategoria = async () => {
    try {
      const response = await api.get("api/PublicacaoCliente");
      const publicacoes = response.data;

      const anunciosFiltrados = publicacoes.filter(
        (a) => a.publicacaoCliente.categoriaPublicacaoCliente === categoria
      );

      setAnuncios(anunciosFiltrados);

      // Busca nomes e avaliações
      const ids = anunciosFiltrados.map((a) => a.publicacaoCliente.idCliente);
      const prestadoresData = {};

      await Promise.all(
        ids.map(async (id) => {
          const resp = await api.get(`/ClienteFiltro/${id}`);
          const dados = resp.data;
          prestadoresData[id] = {
            nome: dados.nomeCliente,
            avaliacao: dados.avaliacaoCliente || 0,
          };
        })
      );

      setPrestadores(prestadoresData);
    } catch (e) {
      console.error("Erro ao buscar anúncios:", e);
    }
  };

  const renderAnuncio = ({ item }) => {
    const id = item.publicacaoCliente.idCliente;
    const prestador = prestadores[id];

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
            <Text style={styles.cabecalhotexto}>
              {prestador?.nome || "Carregando..."}
            </Text>

            <Rating
              type="star"
              ratingCount={5}
              readonly
              imageSize={15}
              startingValue={prestador?.avaliacao || 0}
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
                  {item.publicacaoCliente.categoriaPublicacaoCliente}
                </Text>
              </View>

              <View style={styles.infos}>
                <Text style={styles.infotext}>
                  {item.publicacaoCliente.formaDeAtendimentoCliente}
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
                params: { idPrestador: id },
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

  useEffect(() => {
    AnunciosCategoria();
  }, [categoria]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <Arrowicon style={styles.icon} />
        </Pressable>

        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>Cliente da área</Text>
        </View>
      </View>

      {/* CORPO */}
      <View style={styles.body}>
        <FlatList
          data={Anuncios}
          keyExtractor={(item) =>
            item.publicacaoCliente.idPublicacaoCliente.toString()
          }
          renderItem={renderAnuncio}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        />

        {/* MODAL */}
        <Modal
          animationType="fade"
          transparent
          visible={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
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

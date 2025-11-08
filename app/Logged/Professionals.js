import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  Modal,
  View,
} from "react-native";

import { Link, useRouter } from "expo-router";
import { Rating } from "react-native-ratings";
import Carrousel from "../../componentes/carrouselCidades";
import IconCheckbox from "../../componentes/checkBox";
import styles from "../../styles/ProfessionalsStyle.js";
import ProfileRedondo from "../../assets/vectors/ProfileRedondo.jsx";

export const { width } = Dimensions.get("window");

// ICONES
import Arrowicon from "../../assets/vectors/Arrowicon";
import Filtrosicon from "../../assets/vectors/Filtrosicon";

// CONSTS

export default function Professionals() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      {/*HEADER */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <Arrowicon style={styles.icon} />
        </Pressable>
        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>Clientes na sua área</Text>
        </View>
        {/*<Filtrosicon style={styles.icon} onPress={() => setModalIsOpen(true)} />{" "}*/}
      </View>

      {/* Corpo da tela */}
      {/*PRIMEIRO CARROUSEL  */}
      <View style={styles.body}>
        <View style={styles.ChangableInfos}>
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
              <Rating
                type="star"
                ratingCount={5}
                readonly={true}
                imageSize={15}
                style={{ alignItems: "flex-start" }}
              />
              <Text style={styles.CountAval}>(3 Avaliações)</Text>
              <View style={styles.cabecalho2}>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>R$70/h</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Tecnologia</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Presencial e online</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.corpo}>
            <Text style={styles.corpo}>
              Sou Letícia e estou em busca de um(a) profissional para me apoiar
              nas atividades diárias da área de tecnologia. Preciso de alguém
              com conhecimento técnico, comprometimento e...
            </Text>
          </View>
          <View style={styles.final}>
            <Pressable onPress={() => router.push("./AdvertisementClient")}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Ver detalhes</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={styles.ChangableInfos}
          onPress={() => router.push("./AdvertisementClient")}
        >
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
              <Rating
                type="star"
                ratingCount={5}
                readonly={true}
                imageSize={15}
                style={{ alignItems: "flex-start" }}
              />
              <Text style={styles.CountAval}>(3 Avaliações)</Text>
              <View style={styles.cabecalho2}>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>R$70/h</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Tecnologia</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Presencial e online</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.corpo}>
            <Text style={styles.corpo}>
              Sou Letícia e estou em busca de um(a) profissional para me apoiar
              nas atividades diárias da área de tecnologia. Preciso de alguém
              com conhecimento técnico, comprometimento e...
            </Text>
          </View>
          <View style={styles.final}>
          <Pressable onPress={() => router.push("./AdvertisementClient")}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Ver detalhes</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={styles.ChangableInfos}
          onPress={() => router.push("./AdvertisementClient")}
        >
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
              <Rating
                type="star"
                ratingCount={5}
                readonly={true}
                imageSize={15}
                style={{ alignItems: "flex-start" }}
              />
              <Text style={styles.CountAval}>(3 Avaliações)</Text>
              <View style={styles.cabecalho2}>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>R$70/h</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Tecnologia</Text>
                </View>
                <View style={styles.infos}>
                  <Text style={styles.infotext}>Presencial e online</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.corpo}>
            <Text style={styles.corpo}>
              Sou Letícia e estou em busca de um(a) profissional para me apoiar
              nas atividades diárias da área de tecnologia. Preciso de alguém
              com conhecimento técnico, comprometimento e...
            </Text>
          </View>
          <View style={styles.final}>
          <Pressable onPress={() => router.push("./AdvertisementClient")}>
              <View style={styles.button}>
                <Text style={styles.buttontext}>Ver detalhes</Text>
              </View>
            </Pressable>
          </View>

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
    </ScrollView>
  );
}

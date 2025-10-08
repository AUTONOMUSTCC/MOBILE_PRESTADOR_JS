import { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

import { Link } from "expo-router";
import { Rating } from "react-native-ratings";
import ProfileRedondo from "../assets/vectors/ProfileRedondo.jsx";
import { SalvoIcon } from "../componentes/Salvosicon.jsx";
import styles from "../styles/SalvosStyle.js";

export const { width } = Dimensions.get("window");

// ICONES
import Arrowicon from "../assets/vectors/Arrowicon";

// CONSTS

export default function Salvos() {

  const [salvo1, setSalvo1] = useState(false);
  const [salvo2, setSalvo2] = useState(false);
  const [salvo3, setSalvo3] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      {/*HEADER */}
      <View style={styles.headerContainer}>
      <Link href="/tabs/Home">
 
          <Arrowicon style={styles.icon} />
        </Link>
        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>Voltar</Text>
        </View>
      </View>

      {/* Corpo da tela */}
      {/*PRIMEIRO CARROUSEL  */}
      <View style={styles.body}>

        <View style={styles.TituloInfosBody}>
          <Text style={styles.textTitleBody}>Anúncios salvos</Text>
        </View>
        <View style={styles.ChangableInfos}>
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <View style={styles.cabecalho3}>
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
              <View style={styles.cabecalho4}>
                {/* Uso controlado (como checkbox) */}
                <SalvoIcon value={salvo1} onChange={setSalvo1} />
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
            <View style={styles.button}>
              <Text style={styles.buttontext}>Ver detalhes</Text>
            </View>
          </View>
        </View>
        <View style={styles.ChangableInfos}>
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <View style={styles.cabecalho3}>
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
              <View style={styles.cabecalho4}>
                {/* Uso controlado (como checkbox) */}
                <SalvoIcon value={salvo2} onChange={setSalvo2} />
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
            <View style={styles.button}>
              <Text style={styles.buttontext}>Ver detalhes</Text>
            </View>
          </View>
        </View>
        <View style={styles.ChangableInfos}>
          <View style={styles.cabecalho}>
            <ProfileRedondo style={styles.cabecalhoicon} />
            <View style={styles.cabecalho1}>
              <View style={styles.cabecalho3}>
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
              <View style={styles.cabecalho4}>
                {/* Uso controlado (como checkbox) */}
                <SalvoIcon value={salvo3} onChange={setSalvo3} />
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
            <View style={styles.button}>
              <Text style={styles.buttontext}>Ver detalhes</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { Rating } from "react-native-ratings";
import styles from "../../styles/ReviewsStyles.js";


//SVG's
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import Lixoicon from "../../assets/vectors/Lixoicon.jsx";
import ProfileRedondo from "../../assets/vectors/ProfileRedondo.jsx";


export default function Edibleprofile() {
  //const [value, setValue] = React.useState(1);

  return (
    <View style={styles.container}>
      {/*CORPO DA TELA*/}
      <ScrollView style={styles.ScrollView}>
        <View style={styles.headerContainer}>
          <Link href="/tabs/profile">
            <Arrowicon style={styles.icon} />
          </Link>
          <Text style={styles.txthead}>VOLTAR</Text>
        </View>

        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>Avaliações</Text>
        </View>

        <View style={styles.main}>
          {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
          <View style={styles.ChangableInfos}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Avaliações feitas por você</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>
              <ScrollView>
                <View style={styles.infos}>
                  <View style={styles.avaliacoes}>
                    <View style={styles.cabecalho}>
                      <ProfileRedondo style={styles.cabecalhoicon} />
                      <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
                      <Rating
                        type="star"
                        ratingCount={5}
                        readonly={true}
                        imageSize={15}
                        style={{ padding: 10, alignItems: "center" }}
                      />
                    </View>
                    <View style={styles.corpo}>
                      <Text style={styles.corpo}>
                        Profissional extremamente dedicado, com ótimo domínio
                        técnico e foco em soluções rápidas. Sempre prestativo no
                        suporte, organizado e com ótima comunicação com os
                        usuários. Uma peça-chave para qualquer equipe de TI.
                      </Text>
                    </View>
                    <View style={styles.final}>
                      <Lixoicon style={styles.finalicon} />
                    </View>
                  </View>

                  <View style={styles.avaliacoes}>
                    <View style={styles.cabecalho}>
                      <ProfileRedondo style={styles.cabecalhoicon} />
                      <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
                      <Rating
                        type="star"
                        ratingCount={5}
                        readonly={true}
                        imageSize={15}
                        style={{ padding: 10, alignItems: "center" }}
                      />
                    </View>
                    <View style={styles.corpo}>
                      <Text style={styles.corpo}>
                        Profissional extremamente dedicado, com ótimo domínio
                        técnico e foco em soluções rápidas. Sempre prestativo no
                        suporte, organizado e com ótima comunicação com os
                        usuários. Uma peça-chave para qualquer equipe de TI.
                      </Text>
                    </View>
                    <View style={styles.final}>
                      <Lixoicon style={styles.finalicon} />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.ChangableInfos}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Avaliações feitas sobre você</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>
              <ScrollView>
                <View style={styles.infos}>
                  <View style={styles.avaliacoes}>
                    <View style={styles.cabecalho}>
                      <ProfileRedondo style={styles.cabecalhoicon} />
                      <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
                      <Rating
                        type="star"
                        ratingCount={5}
                        readonly={true}
                        imageSize={15}
                        style={{ padding: 10, alignItems: "center" }}
                      />
                    </View>
                    <View style={styles.corpo}>
                      <Text style={styles.corpo}>
                        Profissional extremamente dedicado, com ótimo domínio
                        técnico e foco em soluções rápidas. Sempre prestativo no
                        suporte, organizado e com ótima comunicação com os
                        usuários. Uma peça-chave para qualquer equipe de TI.
                      </Text>
                    </View>
                    <View style={styles.final}>
                      <Lixoicon style={styles.finalicon} />
                    </View>
                  </View>

                  <View style={styles.avaliacoes}>
                    <View style={styles.cabecalho}>
                      <ProfileRedondo style={styles.cabecalhoicon} />
                      <Text style={styles.cabecalhotexto}>Leticia Soares</Text>
                      <Rating
                        type="star"
                        ratingCount={5}
                        readonly={true}
                        imageSize={15}
                        style={{ padding: 10, alignItems: "center" }}
                      />
                    </View>
                    <View style={styles.corpo}>
                      <Text style={styles.corpo}>
                        Profissional extremamente dedicado, com ótimo domínio
                        técnico e foco em soluções rápidas. Sempre prestativo no
                        suporte, organizado e com ótima comunicação com os
                        usuários. Uma peça-chave para qualquer equipe de TI.
                      </Text>
                    </View>
                    <View style={styles.final}>
                      <Lixoicon style={styles.finalicon} />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 
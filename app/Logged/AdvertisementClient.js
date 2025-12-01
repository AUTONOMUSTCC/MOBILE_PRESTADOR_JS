import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  Image,
  View,
  ActivityIndicator,
} from "react-native";
import AboutImage from "../../assets/vectors/AboutImage.jsx";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import { imagensClientes } from "../../assets/images/perfis.js";
import api from "../../services/api.js";
import styles from "../../styles/AboutStyles.js";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function AdvertisementClient() {
  const { idPrestador } = useLocalSearchParams();
  const router = useRouter();

  const [valor, setValor] = React.useState("");
  const [categoria, setcategoria] = React.useState("");
  const [descricao, setdescricao] = React.useState("");
  const [atendimento, setatendimento] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Seleção correta da imagem
  const fotoPerfil =
    imagensClientes[idPrestador] || imagensClientes.default;

  React.useEffect(() => {
    let mounted = true;

    const DadosAnuncio = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get("/api/PublicacaoCliente/");
        const data = response.data;
        const lista = Array.isArray(data) ? data : [data];

        console.log("DEBUG: idPrestador:", idPrestador);
        console.log("DEBUG: imagensClientes keys:", Object.keys(imagensClientes));
        console.log("DEBUG: fotoPerfil:", fotoPerfil);

        const meusAnuncios = lista.filter(
          (a) =>
            a.publicacaoCliente &&
            a.publicacaoCliente.idCliente === Number(idPrestador)
        );

        if (!mounted) return;

        if (meusAnuncios.length === 0) {
          console.warn("Nenhum anúncio encontrado para este cliente.");
          setLoading(false);
          return;
        }

        const publicacao = meusAnuncios[0].publicacaoCliente;

        setValor(publicacao.valorPublicacaoCliente ?? "");
        setcategoria(publicacao.categoriaPublicacaoCliente ?? "");
        setdescricao(publicacao.descricaoPublicacaoCliente ?? "");
        setatendimento(publicacao.formaDeAtendimentoCliente ?? "");
      } catch (err) {
        console.error("Erro ao buscar anúncios:", err);
        if (!mounted) return;
        setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    DadosAnuncio();
    return () => {
      mounted = false;
    };
  }, [idPrestador]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <Arrowicon style={styles.icon} />
        </Pressable>
        <Text style={styles.txthead}>VOLTAR</Text>
      </View>

      <View style={styles.ChangableInfos}>
        <View style={styles.header}>
          <View style={styles.statusBox}></View>

          {/* FOTO DO CLIENTE */}
          <View style={styles.statusBox}>
            {loading ? (
              <ActivityIndicator />
            ) : fotoPerfil ? (
              <Image
                source={fotoPerfil}
                style={styles.profileImage}
              />
            ) : (
              <AboutImage style={styles.profileImage} />
            )}
          </View>

          <View style={styles.statusBox3}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "./Horario",
                  params: { idPrestador: String(idPrestador) },
                })
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttontext}>Contratar</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>R${valor}/h</Text>
          <Text style={styles.tag}>{categoria}</Text>
          <Text style={styles.tag}>{atendimento}</Text>
        </View>

        <Text style={styles.sectionTitle}>Sobre</Text>
        <Text style={styles.paragraph}>{descricao}</Text>

        {error && (
          <Text style={{ color: "red", marginTop: 8 }}>
            Erro ao carregar dados. Veja logs no console.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

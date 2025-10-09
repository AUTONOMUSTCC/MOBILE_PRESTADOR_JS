import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View
} from "react-native";
import { Rating } from "react-native-ratings";
import api from "../../services/api.js";
import styles from "../../styles/ProfileStyles.js";

//IMAGES
const profilePic = require("../../assets/images/profilePIc.png");
//SVG's
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import ChangeImage from "../../assets/vectors/ChangeImage.jsx";
import Localicon from "../../assets/vectors/Localicon.jsx";
import Settingsicon from "../../assets/vectors/SettingsIcon.jsx";



const getPrestadorById = async (id) => {
  try {
    const response = await api('/prestador');
    const prestadores = response.data; // pega os dados da resposta
    const user = prestadores.find((prestador) => prestador.idPrestador === id);
    return user;
    //para cada valor de input
  } catch (error) {
    console.error("Erro ao buscar prestador:", error);
    return null;
  }
};



export default function Profile() {
  const [value, setValue] = React.useState(2);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //CONST'S
  const [email, setEmail] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [dtnascimento, setDtnascimento] = React.useState("");
  const [aval, setavalprestador] = React.useState("");
  const dataFormatada = dtnascimento.split("T")[0];
  const nomeCompleto = nome + sobrenome;



//  PUXANDO DO BANCO
  useEffect(() => {
    const id = 5;
    const carregarUsuario = async () => {
      const user = await getPrestadorById(id); // aqui você passa o id desejado
       setEmail(user.emailPrestador);
       setNome(user.nomePrestador);
       setSobrenome(user.sobrenomePrestador);
       setTelefone(user.telefonePrestador);
       setGenero(user.generoPrestador);
       setCidade(user.cidadePrestador);
       setDtnascimento(user.dataNascimentoPrestador);
       setavalprestador(user.avaliacaoPrestador);
    };
    carregarUsuario();
  }, []);

  return (
    <View style={styles.container} >
      {/*CABEÇALHO/ PRINCIPAL DA CONTA */}
      <StatusBar 
        barStyle="dark-content" // cor do texto da barra 
        backgroundColor="#fff" // cor de fundo
      />
      <View style={styles.head}>
        <View style={styles.Titulo}>
          <Text style={styles.Title}>Meu perfil</Text>
          <Text style={styles.type}>Profissional</Text>
        </View>
        <View style={styles.settings}>
          <Settingsicon onPress={() => setModalIsOpen(true)} />
        </View>
      </View>

      {/*CORPO DA TELA*/}
      <ScrollView style={styles.ScrollView}>
        <View style={styles.main}>
          <View style={styles.maininfos}>
            <View style={styles.background}>
              <ImageBackground
                source={profilePic}
                style={styles.profilePicture}
              >
                <View style={styles.circle}>
                  <ChangeImage />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.informations}>
              <View style={styles.Identification}>
                <Text style={styles.Name}>{nomeCompleto}</Text>
                <Text style={styles.Aval}>Avaliações</Text>
                <Rating
                  type="star"
                  ratingCount={5}
                  readonly={true}
                  imageSize={15}
                  style={{ paddingVertical: 6 }}
                  startingValue={aval}
                />
                <Text style={styles.CountAval}>(3 Avaliações)</Text>
              </View>
            </View>
            <View style={styles.Location}>
              <Localicon />
              <Text style={styles.Local}> {cidade} Brasil</Text>
            </View>
          </View>
          {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
          <View style={styles.ChangableInfos}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Informações da conta</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>
              <Text style={styles.Label}>Gênero</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="genero"
                value={genero}
              ></TextInput>

              <Text style={styles.Label}>Nome</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="nome"
                value={nome}
              ></TextInput>

              <Text style={styles.Label}>Sobrenome</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="sobrenome"
                value={sobrenome}
              ></TextInput>

              <Text style={styles.Label}>Telefone</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="telefone"
                value={telefone}
              ></TextInput>

              <Text style={styles.Label}>Data de Nascimento</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="dtnascimento"
                value={dataFormatada}
              ></TextInput>

              <Text style={styles.Label}>E-mail</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="email"
                value={email}
              ></TextInput>

              <Text style={styles.Label}>Cidade</Text>
              <TextInput
                style={styles.input}
                editable={false}
                type="cidade"
                value={cidade}
              ></TextInput>
            </View>
          </View>

          {/* Modal de edição  */}
          <Modal
            animationType="fade" // "slide", "fade" ou "none"
            transparent={true}
            visible={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)} // Necessário no Android
          >
        
            {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <View style={styles.modalContentCabecalho}>
                  <Link href="/tabs/profile">
                    <Arrowicon
                      style={styles.icon}
                      onPress={() => setModalIsOpen(false)}
                    />
                  </Link>
                  <Text style={styles.title}>Configurações</Text>
                </View>
                <View style={styles.modalContentCorpo}>
                  <Link href="/Reviews" asChild>
                    <Pressable
                      style={styles.button}
                      onPress={() => setModalIsOpen(false)}
                    >
                      <Text style={styles.text}>Ver suas avaliações</Text>
                    </Pressable>
                  </Link>

                  <Link href="/Edibleprofile" asChild>
                    <Pressable
                      style={styles.button}
                      onPress={() => setModalIsOpen(false)}
                    >
                      <Text style={styles.text}>Editar informações</Text>
                    </Pressable>
                  </Link>

                  <Link href="/EdiblePassword" asChild>
                    <Pressable
                      style={styles.button}
                      onPress={() => setModalIsOpen(false)}
                    >
                      <Text style={styles.text}>Alterar senha</Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

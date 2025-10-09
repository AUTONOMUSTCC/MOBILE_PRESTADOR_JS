import React, { useEffect } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import Arrowicon from "../assets/vectors/Arrowicon.jsx";
import api from "../services/api.js";
import { getUserId } from "../services/Id.js";
import styles from "../styles/EdibleprofileStyles.js";
//SVG's
import { Link , router} from "expo-router";

//CONST GET PRESTADOR -> DADOS ANTES DE ATUALIXZAR
const getPrestadorById = async (id) => {
  try {
    const response = await api("/prestador");
    const prestadores = response.data; // pega apenas os dados da resposta
    const user = prestadores.find((prestador) => prestador.idPrestador === id);
    return user;
  } catch (error) {
    console.error("Erro ao buscar prestador:", error);
    return null;
  }
};

let id;

export default function Edibleprofile() {
  const [value, setValue] = React.useState("");

  //CONST'S
  const [email, setEmail] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [sobrenome, setSobrenome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [avalprestador, setavalprestador] = React.useState("");
  const [senha, setsenha] = React.useState("");

  //const dataFormatada = new Date(dtnascimento).toISOString().slice(0, 10);
  //Const CHANGE INFORMAÇÕES -> ENVIAR PARA O PUTT

  //método que vai deletar o prestador 
  const deleteProfile = async (id) => {
    try {
      const userDelete = {
        idPrestador: id
      }
      const delecao = await api.delete("/Prestador", userDelete );
      router.push("../main");
    } catch (error) {
      console.error(error);
    }
  };


  //Método que altera os dados do prestador 
  const changeProfileData = async (id) => {
    if (
      !email ||
      !nome ||
      !sobrenome ||
      !telefone ||
      !genero ||
      !estado 
    ) {
      Alert.alert("Por favor, preencha todos os dados");
      return null;
    }
    try {
      const changes = {
        idPrestador: id,
        emailPrestador: email,
        nomePrestador: nome,
        sobrenomePrestador: sobrenome,
        telefonePrestador: telefone,
        generoPrestador: genero,
        estadoPrestador: estado,
        avaliacaoPrestador: avalprestador,
        senhaPrestador: senha,
      };
      const request = await api.put("/Prestador", changes);
      router.push("/tabs/profile");
      console.log("olhar o banco");
    } catch (error) {
      console.error("erro ao enviar dados atualizados:", error);
      Alert.alert(
        "Erro ao atualizar informações!",
        "tente novamente mais tarde"
      );
      return null;
    }
  };

  //PUXANDO OS DADOS ANTES DE ATUALIZAR

  useEffect(() => {
    const carregarUsuario = async () => {
      id = await getUserId();
      const user = await getPrestadorById(id); // aqui você passa o id desejado
      setEmail(user.emailPrestador);
      setNome(user.nomePrestador);
      setSobrenome(user.sobrenomePrestador);
      setTelefone(user.telefonePrestador);
      setGenero(user.generoPrestador);
      setEstado(user.estadoPrestador);
      setavalprestador(user.avaliacaoPrestador);
      setsenha(user.senhaPrestador);
    };
    carregarUsuario();
  }, []);

  return (
    <View style={styles.container}>
      {/*CORPO DA TELA*/}
      {/* STATUS BAR */}
      <StatusBar
        barStyle="dark-content" // cor do texto da barra
        backgroundColor="#fff" // cor de fundo
      />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.headerContainer}>
          <Link href="/tabs/profile">
            <Arrowicon style={styles.icon} />
          </Link>
          <Text style={styles.txthead}>VOLTAR</Text>
        </View>

        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>
            Alterar informações da conta
          </Text>
        </View>

        <View style={styles.main}>
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
                editable={true}
                type="genero"
                value={genero}
                onChangeText={setGenero}
              ></TextInput>

              <Text style={styles.Label}>Nome</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="nome"
                value={nome}
                onChangeText={setNome}
              ></TextInput>

              <Text style={styles.Label}>Sobrenome</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
              ></TextInput>

              <Text style={styles.Label}>Telefome</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="telefone"
                value={telefone}
                onChangeText={setTelefone}
              ></TextInput>

              <Text style={styles.Label}>E-mail</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="email"
                value={email}
                onChangeText={setEmail}
              ></TextInput>

              <Text style={styles.Label}>Estado</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="estado"
                value={estado}
                onChangeText={setEstado}
              ></TextInput>

              <View style={styles.viewcontainerbutton}>
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={styles.button}
                    onPress={() => changeProfileData(id)}
                  >
                    <Text style={styles.text}>Salvar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
          <View style={styles.ChangableInfosSecond}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Exclua sua conta</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>
              <Text style={styles.Label}>
                ATENÇÃO: Ao clicar no botão abaixo, sua conta será excluída
                permanentemente. Todos os seus dados, histórico e informações
                serão removidos da plataforma e não poderão ser recuperados.
              </Text>

              <View style={styles.viewcontainerbutton}>
                <View style={styles.buttonContainer}>
                  <Link href="/tabs/Home" asChild>
                    <Pressable
                      style={styles.button}
                      onPress={() => deleteProfile()}
                    >
                      <Text style={styles.textSecond}>Excluir</Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

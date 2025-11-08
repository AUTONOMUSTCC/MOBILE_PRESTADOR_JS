import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import Lockicon from "../../assets/vectors/Lockicon";
import Usericon from "../../assets/vectors/Usericon";
import Header from "../../componentes/Head";
import api from "../../services/api";

// Importação de setUserId e getUserId
import styles from "../../styles/LoginStyles";

const personagem = require("../../assets/images/CharacterLogin.png");

export default function Login() {
  const [emailprest, setEmail] = React.useState("");
  const [senhaprest, setSenha] = React.useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (emailprest === "" || senhaprest === "") {
      Alert.alert("Preencha todos os campos para realizar o login!");
      return;
    }
    try {
      const login = { email: emailprest, senha: senhaprest };
      const response = await api.post("/api/Login", login);
      const dados = response.data;
      const userData = dados?.[0];
      const tipoUser = userData?.tipo;
      const idUsuario = userData?.idUsuario;

      if (tipoUser === "prestador" && idUsuario) {
          try {
            await AsyncStorage.setItem("idUsuario", String(idUsuario));
          } catch (e) {
            console.error(e);
          }
          const teste = await AsyncStorage.getItem("idUsuario");
          console.log("ID do usuário definido e verificado:", teste);
          router.push("../tabs/"); // Redireciona para a área logada
      } else if (tipoUser === "cliente") {
        Alert.alert(
          "Erro de login!",
          "Verifique se o e-mail e senha pertencem a uma conta do tipo Prestador de serviços."
        );
      } else {
        Alert.alert(
          "Erro de dados",
          "As credenciais são válidas, mas não foi possível obter o perfil de usuário."
        );
      }
    } catch (error) {
      // 5. CORREÇÃO DO BLOCO CATCH: Tratamento robusto de erros do Axios/rede
      if (error.response) {
        if (error.response.status === 404) {
          Alert.alert("Usuário não encontrado", "Verifique o email e senha.");
        } else {
          console.error(
            "Erro da API com status:",
            error.response.status,
            error.response.data
          );
          Alert.alert(
            "Erro de servidor",
            "Ocorreu um problema inesperado no servidor. Tente novamente mais tarde."
          );
        }
      } else if (error.request) {
        Alert.alert(
          "Erro de conexão",
          "Não foi possível conectar ao servidor. Verifique sua conexão com a internet."
        );
      } else {
        console.error("Erro desconhecido no login:", error);
        Alert.alert(
          "Erro",
          "Ocorreu um erro inesperado ao tentar fazer login."
        );
      }
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.view2container}>
        <Image source={personagem} style={styles.personagem} />
      </View>
      <View style={styles.view3container}>
        <View style={styles.input}>
          <Usericon />
          <TextInput
            style={styles.entry}
            onChangeText={setEmail}
            value={emailprest}
            placeholder="Insira seu e-mail cadastrado"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <Lockicon />
          <TextInput
            style={styles.entry}
            onChangeText={setSenha}
            value={senhaprest}
            placeholder="Insira sua senha"
            secureTextEntry
          />
        </View>
        <Pressable
          style={styles.forgotBTN}
          onPress={() => router.push("/forgotPassword")}
        >
          <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={handleLogin} 
        >
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

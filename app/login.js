import { useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Pressable, Text, TextInput, View } from "react-native";
import Header from "../componentes/Head";
import api from "../services/api";
import styles from "../styles/LoginStyles";
// SVG's
import Lockicon from "../assets/vectors/Lockicon";
import Usericon from "../assets/vectors/Usericon";

// Imagem
const personagem = require("../assets/images/CharacterLogin.png");

export default function Login() {
  const [emailprest, setEmail] = React.useState("");
  const [senhaprest, setSenha] = React.useState("");
  const router = useRouter();


  //método de login para prestadorr
  const handleLogin = async(emailprest, senhaprest) => {
   if (emailprest == "" || senhaprest == ""){
    Alert.alert("Preencha todos os campos para realizar o login!");
    return;
   }
   try{
    const login = {
      email: emailprest,
      senha: senhaprest,
    }
    const response = await api.post('/api/Login', login);
    const tipoUser = response.data[0]?.tipo; // esse código é pq o back manda como vetor e não string direto
    //console.log(tipoUser); -> usei para testar a resposta
    if (tipoUser === 'prestador'){
      console.log("Login válido");
      //router.push("/tabs/");
      const dadosprestadores = await api.get("/Prestador");
      const prestadores = dadosprestadores.data;
      const user = prestadores.find((prestador) => prestador.emailPrestador === emailprest);
      const id = user.idPrestador;
      return (id);
    }
    else if(tipoUser === 'cliente'){
      Alert.alert("Erro de login!", "Verifique se o e-mail e senha pertencem a uma conta do tipo Prestador de serviços.");
      console.log("Login inválido");
    }
   }
   catch(error){
    if(error == 'Request failed with status code 404'){
      Alert.alert("Usuário não encontrado", "Verifique o email e senha");
      return;
    }
    console.error(error);
    return;
   }

  }


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
            placeholder="insira sua senha"
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
        <Pressable style={styles.button} onPress={() => handleLogin(emailprest, senhaprest)}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

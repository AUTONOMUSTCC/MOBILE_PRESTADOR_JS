

import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Header from "../componentes/Head";
import styles from "../styles/LoginStyles";

//SVG'S
import Lockicon from "../assets/vectors/Lockicon";
import Usericon from "../assets/vectors/Usericon";

//IMAGENS
const personagem = require("../assets/images/CharacterLogin.png");

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const router = useRouter();

  const LoginPrestador = async () => {
   /* const prestador = await LoginUsers({email}, {senha});
    if (prestador) {
      // Armazenar o prestador no localStorage (ou AsyncStorage no React Native)
      // Aqui usamos o AsyncStorage para persistir os dados entre as telas
      await AsyncStorage.setItem('prestador', JSON.stringify(prestador));
     // navigation.navigate('/tabs/'); // Navegar para a tela de Dashboard
     Alert.alert("E-mail e/ou senha inválidos.");

    } else {
      Alert.alert("E-mail e/ou senha inválidos.");
    }*/
    router.push('/tabs/');
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
            value={email}
            placeholder="Email"
          />
        </View>
        <View style={styles.input}>
          <Lockicon />
          <TextInput
            style={styles.entry}
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
          />
        </View>

        <Link href="/forgotPassword" style={styles.forgotContainer}>
          <View style={styles.forgotContainer}>
            <Pressable style={styles.forgotBTN}>
              <Link href="/forgotPassword">
                <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>{" "}
              </Link>
            </Pressable>
          </View>
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={LoginPrestador}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

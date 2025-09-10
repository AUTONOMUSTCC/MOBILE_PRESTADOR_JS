import { Link, useRouter } from "expo-router";
import React from "react";
import { Alert, Image, Pressable, Text, TextInput, View, } from "react-native";
import Header from "../componentes/Head";
import { LoginUsers } from "../services/LoginUsers";
import styles from "../styles/LoginStyles";

// SVG's
import Lockicon from "../assets/vectors/Lockicon";
import Usericon from "../assets/vectors/Usericon";

// Imagem
const personagem = require("../assets/images/CharacterLogin.png");

//Funções

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const router = useRouter();

  const Loginuser = async () => {

    router.push("/tabs/");
    /*try {
      const prestador = await LoginUsers(email, senha);

      if (prestador) {

        console.log("Prestador logado:", prestador);
        // Navega para a tela principal
        router.push("/tabs/");
      } else {
        Alert.alert("Erro", "E-mail e/ou senha inválidos.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível fazer login. Tente novamente.");
    }
*/
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
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <Lockicon />
          <TextInput
            style={styles.entry}
            onChangeText={setSenha}
            value={senha}
            placeholder="Senha"
            secureTextEntry
          />
        </View>

        <Link href="/forgotPassword" style={styles.forgotContainer}>
          <View style={styles.forgotContainer}>
            <Pressable style={styles.forgotBTN}>
              <Link href="/forgotPassword">
                <Text style={styles.forgot}>ESQUECI MINHA SENHA</Text>
              </Link>
            </Pressable>
          </View>
        </Link>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={Loginuser}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

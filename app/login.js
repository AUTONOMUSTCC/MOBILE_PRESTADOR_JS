import Header from "../componentes/Head";
import styles from "../styles/LoginStyles";
import { useRouter, Link } from "expo-router";
import React from "react";
import { Alert, Pressable, Text, TextInput, View, Image } from "react-native";

//SVG'S
import Usericon from "../assets/vectors/Usericon";
import Lockicon from "../assets/vectors/Lockicon";

//IMAGENS
const personagem = require("../assets/images/CharacterLogin.png");

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const router = useRouter();

  const TESTE = () => {
    if (email === "admin" && senha === "123") {
      router.push("/tabs/");
    } else {
      router.push("/tabs/");
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
        <Pressable style={styles.button} onPress={TESTE}>
          <Text style={styles.text}>ENTRAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

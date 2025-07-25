import React from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "../styles/NewPasswordStyle.js";
import { Link } from "expo-router";

//SVSG'S
import Lockicon from "../assets/vectors/Lockicon.jsx";
import Arrowicon from "../assets/vectors/Arrowicon.jsx";
import ForgotImage from "../assets/vectors/ForgotpasswordImage.jsx";
//IMAGENS

const planta = require("../assets/images/Cactus.png");
const fundo = require("../assets/images/Fundo.png");
const cadeado = require("../assets/images/lockicon.png");

export default function NovaSenha() {
  const { novaSenha, onChangeNovaSenha } = React.useState("NovaSenha");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/forgotPasswordCode">
          {" "}
          <Arrowicon style={styles.icon} />{" "}
        </Link>
        <Text style={styles.txthead}>VOLTAR</Text>
      </View>
      <View style={styles.view2container}>
        <ForgotImage />
      </View>

      <View style={styles.view4container}>
        <Text style={styles.text2}>Verifique o código</Text>
        <Text style={styles.text3}>
          Um código de autenticação foi enviado para seu e-mail.
        </Text>
      </View>

      <View style={styles.view5container}>
        <View style={styles.input}>
          <Lockicon />
          <TextInput
            style={styles.entry}
            onChangeText={onChangeNovaSenha}
            value={novaSenha}
            placeholder="Senha"
          />
        </View>
        <View style={styles.input}>
          <Lockicon />
          <TextInput
            style={styles.entry}
            onChangeText={onChangeNovaSenha}
            value={novaSenha}
            placeholder="Senha"
          />
        </View>
      </View>

      <View style={styles.view3container}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>ENTRAR</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/*

<Link href="/novaSenha" asChild>
            <Pressable style={styles.reenviaBTN}>
              <Text style={styles.reenvia}>Reenviar código</Text>
            </Pressable>
          </Link>
*/

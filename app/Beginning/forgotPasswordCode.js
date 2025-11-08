import React from "react";
import { Text, View, TextInput, Pressable, Image } from "react-native";
import styles from "../../styles/ForgotPasswordCodeStyle";
import { Link } from "expo-router";
import Header from "../../componentes/Head";
import ForgotpasswordImage from "../../assets/vectors/ForgotpasswordImage";
import Arrowicon from "../../assets/vectors/Arrowicon";
//IMAGENS

const planta = require("../../assets/images/Cactus.png");
const fundo = require("../../assets/images/Fundo.png");

export default function EsqueciCodigo() {
  const { codigo, onChangeCodigo } = React.useState("Codigo");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/login">
          {" "}
          <Arrowicon style={styles.icon} />{" "}
        </Link>
        <Text style={styles.txthead}>VOLTAR</Text>
      </View>
      <View style={styles.view2container}>
        <ForgotpasswordImage />
      </View>

      <View style={styles.view4container}>
        <Text style={styles.text2}>Verifique o código</Text>
        <Text style={styles.text3}>
          Um código de autenticação foi enviado para seu e-mail.
        </Text>
      </View>

      <View style={styles.view5container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCodigo}
          value={codigo}
        />
      </View>

      <View style={styles.view6container}>
        <Text style={styles.text4}>Não recebeu?</Text>
        <View className="Button" style={styles.btn6Container}>
          <Pressable style={styles.reenviaBTN}>
            <Text style={styles.reenvia}>Reenviar código</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.view3container}>
        <View className="Button" style={styles.buttonContainer}>
          <Link href="/newPassword" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Verificar</Text>
            </Pressable>
          </Link>
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

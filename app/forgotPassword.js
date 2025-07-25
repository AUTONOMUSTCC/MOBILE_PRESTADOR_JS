import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { Link } from "expo-router";
import styles from "../styles/ForgotPassworStyle";

//SVG'S
import ForgotImage from "../assets/vectors/ForgotpasswordImage";
import Usericon from "../assets/vectors/Usericon";
import Arrowicon from "../assets/vectors/Arrowicon";
const user = require("../assets/images/User.png");

export default function EsqueciSenha() {
  const { email, onChangeEmail } = React.useState("Email");
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
       <Link href="/login"> <Arrowicon style={styles.icon}/> </Link>
        <Text style={styles.txthead}>VOLTAR</Text>
      </View>
      <View style={styles.view2container}>
        <ForgotImage />
      </View>

      <View style={styles.view4container}>
        <Text style={styles.text2}>Esqueceu sua senha?</Text>
        <Text style={styles.text3}>
          Não se preocupe, isso acontece com todos nós. Insira seu e-mail abaixo
          para recuperar sua senha.
        </Text>
      </View>

      <View style={styles.view3container}>
        <View style={styles.inputteste}>
          <Usericon />
          <TextInput
            style={styles.entry}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="E-mail"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Link href="/forgotPasswordCode" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.text}>PRÓXIMO</Text>
          </Pressable>
        </Link>
      </View>

      <View></View>
    </View>
  );
}

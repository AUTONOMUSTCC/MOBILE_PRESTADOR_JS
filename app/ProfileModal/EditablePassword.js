import React from "react";
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import styles  from "../../styles/EdiblePasswordsStyles.js";

//SVG's
import { Link } from "expo-router";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";

export default function EditablePassword() {
  //const [value, setValue] = React.useState(1);

  //CONST'S

  const [oldpassword, setOldPassword] = React.useState("12345@etesp");
  const [password, setPassword] = React.useState("123456@etesp");
  const [newpassword, setNewPassword] = React.useState("1234567@etesp");



  return (
    <View style={styles.container}>
      {/*CORPO DA TELA*/}
      <ScrollView style={styles.ScrollView}>
        <View style={styles.headerContainer}>
          <Link href="/tabs/profile">
            
            <Arrowicon style={styles.icon} />
          </Link>
          <Text style={styles.txthead}>VOLTAR</Text>
        </View>

        <View style={styles.TituloInfosFirst}>
          <Text style={styles.textTitleFirst}>
            Alterar senha
          </Text>
        </View>

        <View style={styles.main}>
          {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
          <View style={styles.ChangableInfos}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Senha</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>

              <Text style={styles.Label}>Senha atual</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="oldpassword"
                value={setOldPassword}
              ></TextInput>

              <Text style={styles.Label}>Senha nova</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="password"
                value={setPassword}
                placeholder="Mínimo 8 caracteres"
              ></TextInput>

              <Text style={styles.Label}>Confirmar senha nova</Text>
              <TextInput
                style={styles.input}
                editable={true}
                type="newpassword"
                value={setNewPassword}
              ></TextInput>

              <View style={styles.viewcontainerbutton}>
                <View style={styles.buttonContainer}>
                  <Link href="/tabs/Home" asChild>
                    <Pressable style={styles.button}>
                      <Text style={styles.text}>Salvar</Text>
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
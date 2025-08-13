import React from "react";
import { ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { Rating } from "react-native-ratings";
import styles from "../../styles/ProfileStyles.js";

//IMAGES
const profilePic = require("../../assets/images/profilePIc.png");
//SVG's
import ChangeImage from "../../assets/vectors/ChangeImage.jsx";
import Localicon from "../../assets/vectors/Localicon.jsx";
import Settingsicon from "../../assets/vectors/SettingsIcon.jsx";

export default function Profile() {
  const [value, setValue] = React.useState(2);
//CONST'S

  const [email, setEmail] = React.useState("leticia@gmail.com");
  const [nome, setNome] = React.useState("Letícia");
  const [sobrenome, setSobrenome] = React.useState("Soares");
  const [telefone, setTelefone] = React.useState("(XX)YYYYY-YYYY");
  const [genero, setGenero] = React.useState("Feminino");
  const [cidade, setCidade] = React.useState("São Paulo");
  const [dtnascimento, setDtnascimento] = React.useState("24/07/2000");


  return (
    <View style={styles.container}>
      {/*CABEÇALHO/ PRINCIPAL DA CONTA */}

      <View style={styles.head}>
        <View style={styles.Titulo}>
          <Text style={styles.Title}>Meu perfil</Text>
          <Text style={styles.type}>Profissional</Text>
        </View>
        <View style={styles.settings}>
          <Settingsicon />
        </View>
      </View>

      {/*CORPO DA TELA*/}
      <ScrollView style={styles.ScrollView}>
        <View style={styles.main}>
          <View style={styles.maininfos}>
            <View style={styles.background}>
              <ImageBackground source={profilePic} style={styles.profilePicture}>
            
              <View style={styles.circle}>
                <ChangeImage />
              </View>
            </ImageBackground>
            </View>
            <View style={styles.informations}>
              <View style={styles.Identification}>
                <Text style={styles.Name}> LETÍCIA SOARES </Text>
                <Text style={styles.Aval}>Avaliações</Text>
                <Rating
                  type="star"
                  ratingCount={5}
                  readonly={true}
                  imageSize={15}
                  style={{ paddingVertical: 6 }}
                />
                <Text style={styles.CountAval}>(3 Avaliações)</Text>
              </View>
            </View>
            <View style={styles.Location}>
              <Localicon />
              <Text style={styles.Local}>São Paulo, Brasil</Text>
            </View>
          </View>
          {/*INFORMAÇÕES DA CONTA/ EDITAVEL*/}
          <View style={styles.ChangableInfos}>
            <View style={styles.TituloInfos}>
              <Text style={styles.textTitle}>Informações da conta</Text>
            </View>

            {/*INPUTS FIXOS - só serão editáveis em página de edição */}
            <View style={styles.infos}>
              <Text style={styles.Label}>Gênero</Text>
              <TextInput style={styles.input} editable={false} type="genero" value={email} ></TextInput>

              <Text style={styles.Label}>Nome</Text>
              <TextInput style={styles.input} editable={false} type="nome" value={nome}></TextInput>

              <Text style={styles.Label}>Sobrenome</Text>
              <TextInput style={styles.input} editable={false} type="sobrenome" value={sobrenome}></TextInput>

              <Text style={styles.Label}>Telefome</Text>
              <TextInput style={styles.input} editable={false} type="telefone" value={telefone} ></TextInput>

              <Text style={styles.Label}>Data de Nascimento</Text>
              <TextInput style={styles.input} editable={false} type="dtnascimento" value={dtnascimento}></TextInput>

              <Text style={styles.Label}>E-mail</Text>
              <TextInput style={styles.input} editable={false} type="email" value={email} ></TextInput>

              <Text style={styles.Label}>Cidade</Text>
              <TextInput style={styles.input} editable={false} type="cidade" value={cidade}></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

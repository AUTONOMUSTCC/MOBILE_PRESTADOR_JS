import { Text, View, Image, Pressable } from "react-native";

//IMPORTS
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import styles from "./styles/loadingStyles";
import { useRouter } from "expo-router";
//images
import logo from "../mobilePrestador/assets/images/logoprestador.png";
//CONSTS
const router = useRouter();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logotext}>
          AUTONOM
          <Text style={styles.us}>US</Text>
        </Text>
        <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => router.push("../app/introduction")}
        >
          <FontAwesome
            name="arrow-right"
            size={35}
            color="#25292e"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}

import { Text, View, Image, Pressable } from "react-native";

// IMPORTS
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import styles from "../styles/loadingStyles";
//images
import logo from "../assets/images/logoprestador.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logotext}>
          AUTONOM<Text style={styles.us}>US</Text>
        </Text>
        <Text style={styles.text}>Sua ponte entre demanda e solução</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="../introduction" asChild>
          <Pressable style={styles.button}>
            <FontAwesome
              name="arrow-right"
              size={35}
              color="#25292e"
              style={styles.buttonIcon}
            />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import styles from "../../styles/StylesDescription.js";

export default function description() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Voltar</Text>
        </View>

        <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>Ótimo! Agora, escreva uma breve descrição sobre você e o que você trabalha</Text>
        </View>
        <View style={styles.SubTitleContainer}> 
          <Text style={styles.SubTitleText} > Conte quem você é e o que você faz de melhor. Descreva brevemente sua profissão, suas habilidades e no que você se destaca. Pense no que as pessoas devem saber logo de cara sobre seu trabalho. Você sempre pode editar depois; apenas certifique-se de revisar agora.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

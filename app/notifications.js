import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from "../styles/NotificationsStyle";


const notifications = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets(); // Pega as margens de segurança da tela (topo, baixo, esquerda, direita)

  const notificacoes = {
    ontem: [
      {
        id: 1,
        nome: "ROBERTO DE SOUZA",
        mensagem: "visitou seu perfil",
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
      },
      {
        id: 2,
        nome: "ROBERTO DE SOUZA",
        mensagem: "visitou seu perfil",
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    ],
    ultimos7dias: Array.from({ length: 8 }).map((_, i) => ({
      id: 100 + i,
      nome: "ROBERTO DE SOUZA",
      mensagem: "visitou seu perfil",
      foto: "https://randomuser.me/api/portraits/men/11.jpg",
    })),
  };

  return (
    <SafeAreaProvider >
      <SafeAreaView style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Notificações</Text>
          </View>

          {/* Conteúdo */}
          <ScrollView style={styles.scroll}>
            {/* Ontem */}
            <Text style={styles.sectionTitle}>Ontem</Text>
            {notificacoes.ontem.map((item) => (
              <NotificationItem key={item.id} {...item} />
            ))}
            {/* Últimos 7 dias */}
            <Text style={styles.sectionTitle}>Últimos 7 dias</Text>
            {notificacoes.ultimos7dias.map((item) => (
              <NotificationItem key={item.id} {...item} />
            ))}
          </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function NotificationItem({ nome, mensagem, foto }) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: foto }} style={styles.avatar} />
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.mensagem}>{mensagem}</Text>
      </View>
    </View>
  );
}
export default notifications;
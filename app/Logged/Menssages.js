import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { imagensClientes } from "../../assets/images/perfis.js";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import styles from "../../styles/ChatStyles.js";

// ======================
//      HEADER DO CHAT
// ======================
function Menssages({ name, isOnline, isTyping, onBack }) {
  const router = useRouter();
  const { idPrestador } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  console.log("ID RECEBIDO:", idPrestador);


  const fotoPerfil = imagensClientes[idPrestador] || imagensClientes.default;

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <View style={styles.headerContainer2}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Arrowicon />
      </TouchableOpacity>

      {/* Info do usuário */}
      <View style={styles.headerInfoContainer}>
        <View style={styles.avatarContainer}>
          {loading ? (
            <ActivityIndicator size="small" color="#999" />
          ) : (
             <Image source={fotoPerfil} style={styles.profileImage} />
          )}

          {/* Status Online */}
          <View
            style={[
              styles.statusIndicator,
              { backgroundColor: isOnline ? "#4CAF50" : "#E64A4A" },
            ]}
          />
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>

          {isTyping ? (
            <Text style={[styles.statusText, styles.typingText]}>
              Digitando...
            </Text>
          ) : (
            <Text
              style={[
                styles.statusText,
                { color: isOnline ? "gray" : "red" },
              ]}
            >
              {isOnline ? "Online" : "Offline"}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

// ======================
//    CORPO DO CHAT
// ======================
export default function Mensagens() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Oi! Tudo bem?", sent: true },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  const flatListRef = useRef(null);

  // Simula ficar online/offline
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline((prev) => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sent: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setIsTyping(false);

    // Resposta simulada
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "Recebi sua mensagem!",
          sent: false,
        },
      ]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      {/* Header do chat */}
      <Menssages
        name="Fernanda"
        isOnline={isOnline}
        isTyping={isTyping}
      />

      {/* Lista de mensagens */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sent ? styles.sentMessage : styles.receivedMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      {/* Barra de digitação */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          value={inputText}
          onChangeText={(t) => {
            setInputText(t);
            setIsTyping(t.length > 0);
          }}
          onBlur={() => setIsTyping(false)}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={22} color="#cccccc" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

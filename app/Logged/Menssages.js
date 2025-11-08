import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import styles from "../../styles/ChatStyles.js";
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";
import { Link, useRouter } from "expo-router";
import ChatImage from "../../assets/vectors/ChatImage.jsx";
import { Ionicons } from "@expo/vector-icons";

function Menssages({ name, avatar, isOnline, isTyping, onBack }) {
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Arrowicon onPress={() => router.back()}/>
      </TouchableOpacity>

      <View style={styles.headerInfoContainer}>
        <View style={styles.avatarContainer}>
          <ChatImage/>
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
            <Text style={[styles.statusText, styles.typingText]}>Digitando...</Text>
          ) : (
            <Text style={[styles.statusText, { color: isOnline ? "gray" : "red" }]}>
              {isOnline ? "Online" : "Offline"}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
export default function Mensagens() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Oi! Tudo bem?", sent: false },
    { id: "2", text: "Tudo ótimo! E você?", sent: true },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const flatListRef = useRef(null);

  // Simulação: pessoa fica offline/online de forma aleatória
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline((prev) => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    if (inputText.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sent: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
    setIsTyping(false);

    // Simula resposta automática do "backend"
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: "Recebi sua mensagem!", sent: false },
      ]);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <Menssages
        name="Gabriela Fernandes"
        avatar="https://i.pravatar.cc/150?img=47"
        isOnline={isOnline}
        isTyping={isTyping}
        onBack={() => console.log("Voltar")}
      />

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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            setIsTyping(text.length > 0);
          }}
          onBlur={() => setIsTyping(false)}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={22} color="#cccccc" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


import React, { useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import styles from "../../styles/MessagesStyles.js";
import ChatImage from "../../assets/vectors/ChatImage.jsx";
export const { width } = Dimensions.get("window");
// ICONES
import Arrowicon from "../../assets/vectors/Arrowicon.jsx";

// CONSTS

export default function Chat({ name, isOnline, isTyping, time, unreadCount }) {
  const router = useRouter();
  name = "Gabriela Fernandes";
  time = "12:00";
  unreadCount = "5";
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 0, alignItems: "center" }}
    >
      {/* Corpo da tela */}
      {/*PRIMEIRO CARROUSEL  */}
      <View style={styles.body}>
        <View style={styles.TituloInfosBody}>
          <View style={styles.TituloInfosIcon}>
            <Arrowicon style={styles.icon} onPress={() => router.back()} />
          </View>
          <View style={styles.TituloInfosText}>
            <Text style={styles.textTitleBody}>Mensagens</Text>
          </View>
        </View>

        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
              <View
                style={[
                  styles.statusIndicator,
                  { backgroundColor: isOnline ? "#4CAF50" : "#E64A4A" },
                ]}
              />
            </View>
            <View>
              <Text
                style={styles.name}
                onPress={() => router.push("../Logged/./Menssages")}
              >
                {name}
              </Text>
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer2}>
          <View style={styles.headerInfoContainer}>
            <View style={styles.avatarContainer}>
              <ChatImage />
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
            <View style={styles.avatarContainer2}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time}</Text>
              </View>
              <View style={styles.unreadContainer}>
                {/* Mensagens não lidas */}
                {unreadCount > 0 && (
                  <Text style={styles.unreadText}>{unreadCount}</Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function VerticalScheduleList({ data = [] }) {
  // Armazena os horários selecionados
  const [activeSlots, setActiveSlots] = useState([]);

  const handleSelectSlot = (slot) => {
    setActiveSlots((previousSlots) =>
      previousSlots.includes(slot)
        ? previousSlots.filter((item) => item !== slot)
        : [...previousSlots, slot]
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}                            // 👉 usa APENAS os horários compatíveis
        keyExtractor={(item, index) => `${item}-${index}`}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={92}
        renderItem={({ item }) => {
          const isActive = activeSlots.includes(item);
          return (
            <TouchableOpacity
              style={[styles.cardItem, isActive && styles.cardItemActive]}
              onPress={() => handleSelectSlot(item)}
            >
              <Text style={styles.timeText}>{item}</Text>

              {/* Radio button */}
              <View style={styles.radioWrapper}>
                <View style={styles.radioOutline}>
                  {isActive && <View style={styles.radioDot} />}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  cardItem: {
    height: 80,
    marginVertical: 6,
    marginHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardItemActive: {
    backgroundColor: "#daeff7ff",
    borderWidth: 1,
    borderColor: "#A0CEE1",
  },
  timeText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  radioWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioOutline: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#A0CEE1",
    justifyContent: "center",
    alignItems: "center",
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#A0CEE1",
  },
});

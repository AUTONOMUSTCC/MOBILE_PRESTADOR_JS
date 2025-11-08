import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

// Cria 24 horários com IDs únicos
const timeSlots = Array.from({ length: 24 }, (_, index) => ({
  slotId: index + 1,
  slotLabel: `${index.toString().padStart(2, "0")}:00`,
}));

export default function VerticalScheduleList() {
  // Armazena os IDs dos horários selecionados
  const [activeSlots, setActiveSlots] = useState([]);

  const handleSelectSlot = (slotId) => {
    setActiveSlots((previousSlots) =>
      previousSlots.includes(slotId)
        ? previousSlots.filter((item) => item !== slotId)
        : [...previousSlots, slotId]
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList nestedScrollEnabled
        data={timeSlots}
        keyExtractor={(item) => item.slotId.toString()}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={92}
        renderItem={({ item }) => {
          const isActive = activeSlots.includes(item.slotId);
          return (
            <TouchableOpacity
              style={[styles.cardItem, isActive && styles.cardItemActive]}
              onPress={() => handleSelectSlot(item.slotId)}
            >
              <Text style={styles.timeText}>{item.slotLabel}</Text>

              {/* Radio button (custom) */}
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
  selectionInfo: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  selectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  selectionText: {
    fontSize: 14,
    color: "#444",
  },
});

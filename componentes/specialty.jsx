import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

export default function Specialty({ categoriaObj, onSelecionar }) {
  const [selecionadas, setSelecionadas] = useState([]);

  const toggleEspecialidade = (item) => {
    if (selecionadas.includes(item)) {
      const novas = selecionadas.filter((e) => e !== item);
      setSelecionadas(novas);
      onSelecionar?.(novas);
    } else {
      if (selecionadas.length >= 3) return; // limita até 3
      const novas = [...selecionadas, item];
      setSelecionadas(novas);
      onSelecionar?.(novas);
    }
  };

  if (!categoriaObj) return null;

  return (
    <View style={styles.container}>
      {categoriaObj.especialidades.map((item, index) => {
        const isSelected = selecionadas.includes(item);
        const disabled = !isSelected && selecionadas.length >= 3;

        return (
          <Pressable
            key={index}
            style={[styles.button, disabled && styles.buttonDisabled]}
            onPress={() => toggleEspecialidade(item)}
            disabled={disabled}
          >
            <View style={styles.checkBoxContainer}>
               <MaterialIcons
                name={isSelected ? "check-box" : "check-box-outline-blank"}
                size={20}
                color={isSelected ? "#0090CA" : "#888"}
              />
              <Text style={[styles.text, isSelected && styles.textSelected, disabled && styles.textDisabled]}>
                {item}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  button: {
    width: width * 0.45,
    height: height * 0.05,
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8,
  },
  textSelected: {
    color: "#0090CA",
    fontWeight: "600",
  },
  textDisabled: {
    color: "#888",
  },

  
});

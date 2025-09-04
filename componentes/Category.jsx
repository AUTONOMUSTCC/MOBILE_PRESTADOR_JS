import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export default function Category({ categorias, onSelecionar }) {
  const [selected, setSelected] = useState(categorias[0]);

  return (
    <View style={styles.container}>
      {categorias.map((categoriaObj, index) => {
        const isSelected = selected === categoriaObj;
        return (
          <Pressable
            key={index}
            style={[styles.button, isSelected && styles.buttonSelected]}
            onPress={() => {
              setSelected(categoriaObj);
              onSelecionar?.(categoriaObj);
            }}
          >
            <Text style={[styles.text, isSelected && styles.textSelected]}>
              {categoriaObj.nome}
            </Text>
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
    marginBottom: 20,
    width: width * 0.45,
    justifyContent: 'center',
    borderRightWidth: 2,
    borderColor: '#333',
  },
  button: {
    width: width * 0.4,
   height: height * 0.045,
   alignContent: 'center',
   justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  text: {
    color: "#333",
    fontWeight: "500",
  },
  textSelected: {
    color: "#A0CEE1",
    fontWeight: "700",
  },
});

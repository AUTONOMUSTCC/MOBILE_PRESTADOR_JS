import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const estadosOrdenados = [
  "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
  "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais",
  "Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro",
  "Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina",
  "São Paulo","Sergipe","Tocantins"
];

const fileiraCima = estadosOrdenados.slice(0, 14);
const fileiraBaixo = estadosOrdenados.slice(14);

function Row({ items }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
    >
      {items.map((nome) => (
        <View key={nome} style={styles.card}>
          <Text style={styles.cardText}>{nome}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default function EstadosCarousel() {
  return (
    <View style={styles.container}>
      <Row items={fileiraCima} />
      <Row items={fileiraBaixo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    padding: 10,
    justifyContent: "space-between",
  },
  scroll: {
    flexGrow: 0,
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  card: {
    minWidth: 110,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 5,
  },
  cardText: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
});

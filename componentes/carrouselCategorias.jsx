import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
//SVG'S

import TecnicoImage from "../assets/vectors/TecnicoImage";
import SaudeImage from "../assets/vectors/SaudeImage";
import ConstrucaoImage from "../assets/vectors/ConstrucaoImage";

// CONSTANTES
const { width } = Dimensions.get("screen");
const heightTotal = Dimensions.get("screen").height;

const data = [
  {
    image: <TecnicoImage/>,
    id: "1",
    title: "Tecnologia e Suporte técnico",
  },
  {
    image: <SaudeImage/>,
    id: "2",
    title: "Saúde e Bem-estar",
  },
  {
    image: <ConstrucaoImage/>,
    id: "3",
    title: "Organização e Praticidade",
  },
  /*{
    image: require("../assets/images/EquipeIntro.png"),
    id: "4",
    title: "Slide 4",
  },
  {
    image: require("../assets/images/EquipeIntro.png"),
    id: "5",
    title: "Slide 5",
    description: "Descrição do slide 5",
  },*/
];

const CarrouselCategorias = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const itemWidth = width * 0.4 + 12; // largura do card + separação
    const index = Math.round(event.nativeEvent.contentOffset.x / itemWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
     {item.image} 
      
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, { opacity: i === currentIndex ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: heightTotal * 0.3,
    width: width,
    display: "flex",
    paddingTop: 0,
  },
  card: {
    flexDirection: "column",
    height: heightTotal * 0.15,
    width: width * 0.4,
    borderRadius: 0,
    borderColor: "#ECEFF3",
    borderWidth: 0,
    backgroundColor: "#fff",
    overflow: "visible", // garante que nada ultrapasse os limites do card
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 16,
    resizeMode: "cover",
  },
 overlay: {
  ...StyleSheet.absoluteFillObject, // cobre toda a imagem
  backgroundColor: "rgba(0, 0, 0, 0.4)", // cor escura semi-transparente
  justifyContent: "flex-end", // posiciona o texto na parte de baixo
  alignItems: "flex-start",
  padding: 10,
  borderRadius: 16,
},
  textContainer: {
    flex: 1, // 1/3 do card
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  title: {
    width: width * 0.3,
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
    fontWeight:"bold",
  },
  description: {
    fontSize: 8,
    color: "#555",
    textAlign: "center",
    marginTop: 0,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  dot: {
    height: 0,
    width: 0,
    backgroundColor: "#333",
    borderRadius: 3,
    marginHorizontal: 4,
  },
});

export default CarrouselCategorias;

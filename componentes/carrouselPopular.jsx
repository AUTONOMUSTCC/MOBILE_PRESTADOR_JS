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
import ReformasImage from "../assets/vectors/ReformasImage";
import CuidadorImage from "../assets/vectors/CuidadorImage";
import LimpezaImage from "../assets/vectors/LimpezaImage";
// CONSTANTES
const { width } = Dimensions.get("screen");
const heightTotal = Dimensions.get("screen").height;

const data = [
  {
    image: <ReformasImage/>,
    id: "1",
    title: "Construção e Reformas",
    description: "Reformas residenciais",
  },
  {
    image: <CuidadorImage/>,
    id: "2",
    title: "Saúde e Bem-Estar",
    description: "Cuidador",
  },
  {
    image: <LimpezaImage/>,
    id: "3",
    title: "Serviços domésticos e Limpeza",
    description: "Faxina",
  },
 /* {
    image: require("../assets/images/EquipeIntro.png"),
    id: "4",
    title: "Slide 4",
    description: "Descrição do slide 4",
  },
  {
    image: require("../assets/images/EquipeIntro.png"),
    id: "5",
    title: "Slide 5",
    description: "Descrição do slide 5",
  },*/
];

const CarrouselPop = () => {
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.description && (
          <Text style={styles.description}>{item.description}</Text>
        )}
      </View>
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
    height: heightTotal * 0.3,
    width: width * 0.5,
    borderRadius: 16,
    borderColor: "#ECEFF3",
    borderWidth: 1,
    backgroundColor: "#fff",
    overflow: "hidden", // garante que nada ultrapasse os limites do card
  },
  image: {
    flex: 2, // imagem ocupa 2/3 do card
    width: "100%",
    resizeMode: "cover", // cobre toda a área superior
  },
  textContainer: {
    flex: 1, // 1/3 do card
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 10,
    textAlign: "center",
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

export default CarrouselPop;

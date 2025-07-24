import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Agendaicon from "../assets/vectors/Agendaicon";
import Searchicon2 from "../assets/vectors/Searchicon2";
// CONSTANTES
const { width } = Dimensions.get("screen");
const heightTotal = Dimensions.get("screen").height;
const data = [
  {
    image: <Agendaicon/>,
    id: "1",
    title: "Agenda inteligente",
    description: "Preencha sua agenda com seus horários disponíveis e combine horários com os profissionais",
  },
 {
    image: <Searchicon2/>,
    id: "2",
    title: "Slide 2",
    description: "Descrição do slide 2",
  },/* 
  {
    image: require("../assets/images/logoprestador.png"),
    id: "3",
    title: "Slide 3",
    description: "Descrição do slide 3",
  },*/
];

const Carrousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {item.image}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
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
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={16}
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

//
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  slide: {
    height: heightTotal * 0.15,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    height: heightTotal * 0.15,
    width: width * 0.8,
    borderRadius: 15,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#A0CEE1",
  },
  imageContainer: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 60,
    resizeMode: "contain",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    height: 0,
    width: 0,
    backgroundColor: "#333",
    borderRadius: 4,
    margin: 4,
  },
});

export default Carrousel;

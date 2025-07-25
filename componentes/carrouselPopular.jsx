import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import * as Progress from 'react-native-progress';
//SVG'S
import CuidadorImage from "../assets/vectors/CuidadorImage";
import LimpezaImage from "../assets/vectors/LimpezaImage";
import ReformasImage from "../assets/vectors/ReformasImage";
// CONSTANTES
const { width } = Dimensions.get("screen");
const heightTotal = Dimensions.get("screen").height;


const data = [
  {
    image: <ReformasImage/>,
    id: "1",
    title: "Construção e Reformas",
    description: "Reformas residenciais",
    progress: 0.5,
  },
  {
    image: <CuidadorImage/>,
    id: "2",
    title: "Saúde e Bem-Estar",
    description: "Cuidador",
    progress: 0.31,
  },
  {
    image: <LimpezaImage/>,
    id: "3",
    title: "Serviços domésticos e Limpeza",
    description: "Faxina",
    progress: 0.6,
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
        <Progress.Bar progress={item.progress} width={140} color="#264653"  unfilledColor="#C4E4F2" borderWidth={0} />
        <Text style={styles.qtdWorkers}> <Text style={styles.number}>{ 1000*(item.progress) }</Text>  Profissionais  </Text>
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
    height: heightTotal * 0.2,
    width: width,
    display: "flex",
    paddingTop: 0,
  },
  card: {
    flexDirection: "column",
    height: heightTotal * 0.2,
    width: width * 0.4,
    borderRadius: 16,
    borderColor: "#ECEFF3",
    borderWidth: 1,
    backgroundColor: "#fff",
    overflow: "hidden", // garante que nada ultrapasse os limites do card
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 2, // imagem ocupa 2/3 do card
    width: "100%",
    resizeMode: "cover", // cobre toda a área superior
  },
  textContainer: {
    flex: 1, // 1/3 do card
    width: width * 0.4, 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 8,
    textAlign: "flex-start",
    color:'#666D80',
  },
  description: {
    fontSize: 12,
    color: "#1A1B25",
    textAlign: "center",
    marginTop: 0,
    fontFamily: 'Poppins',
    fontWeight: 'medium',
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
  qtdWorkers:{
    fontFamily: 'Inter',
    fontSize: 10,
    color:'#82A2AF',
  },
  number:{
    fontFamily: 'Inter',
    fontSize: 10,
    color:'#82A2AF',
    fontWeight:'bold',
  },
});

export default CarrouselPop;

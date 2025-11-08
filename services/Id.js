
let iduser = null;

export const setUserId = (id) => {
  iduser = id;
}; 

export const getUserId = () => {
  return iduser;
}; 

/*
// Exemplo de código onde o id fica armazenado na memória (com AsyncStorage)
// Para funcionar, você precisará instalar e importar o 'AsyncStorage'
/*
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export const setUserIdAsync = async (id) => {
  await AsyncStorage.setItem("userId", String(id));
};

export const getUserIdAsync = async () => {
  return await AsyncStorage.getItem("userId");
}
*/
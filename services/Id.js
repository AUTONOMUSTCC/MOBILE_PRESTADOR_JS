
let userId = 0; // let serve para armazenar um vaor que a gente vai mudar dps, se colocar const da erro :/

export const setUserId = async(id) =>{
    userId = id;
};

export const getUserId = async() => {
    return userId;
}

/*export const setUserId = async (id) => {
  await AsyncStorage.setItem("userId", String(id));
}; */ // exempplo de código em que o id fica armazenado na memória 


import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

//  1° VARIÁVEIS GLOBAIS NO CRIAR ANUNCIO -> vai vir do Async agr

const Data = new Date();

const KEYS = [
    "@categoria",
    "@especialidades",
    "@descricao",
    "habilidades",
    "qualidade",
    "@experiencia",
    "atendimento",
    "abordagem",
    "valor",
  ];
  
  const ClearAdCreationData = async () => {
    try {
      // Remove múltiplas chaves de uma vez
      await AsyncStorage.multiRemove(KEYS);
      console.log("Dados de criação de anúncio limpos do AsyncStorage.");
    } catch (error) {
      console.error("Erro ao limpar dados do AsyncStorage:", error);
    }
  };



export const CreateADPrestador = async () => {
  const idUsuarioStr = await AsyncStorage.getItem("idUsuario");
  const id = idUsuarioStr ? parseInt(idUsuarioStr, 10) : 0;
  const categoria = await AsyncStorage.getItem("@categoria");
  const especialidadesArmazenadas = await AsyncStorage.getItem(
    "@especialidades"
  );
  const especialidades = JSON.parse(especialidadesArmazenadas);
  const descricao = await AsyncStorage.getItem("@descricao");
  const habilidadeArmazenada =
    (await AsyncStorage.getItem("habilidades")) || [];
  const habilidades = JSON.parse(habilidadeArmazenada);
  const qualidadeArmazenada = (await AsyncStorage.getItem("qualidade")) || [];
  const qualidades = JSON.parse(qualidadeArmazenada);
  const atendimento = await AsyncStorage.getItem("atendimento");
  const abordagemArmazenada = await AsyncStorage.getItem("abordagem");
  const abordagem = JSON.parse(abordagemArmazenada);
  const valor = parseFloat((await AsyncStorage.getItem("valor")) ?? 0);
  const experiencia =
    JSON.parse(await AsyncStorage.getItem("@experiencia")) || [];

  console.log({
    idPrestador: id,
    categoria,
    descricao,
    valor,
    atendimento,
    especialidades,
    habilidades,
    qualidades,
    abordagem,
    experiencia,
  });

  ///////////////////////////////////TRATANDO OS DADOS PRA MANDAR PRA API
  const publicacaoPrestadorAbordagens = abordagem.map((item) => ({
    idPrestadorAbordagem: 0,
    idPublicacaoPrestador: 0,
    descricaoAbordagemPrestador: item.trim(),
  }));

  const publicacaoPrestadorExperiencias = experiencia.map((item) => ({
    idPublicacaoPrestadorExperiencia: 0,
    idPublicacaoPrestador: 0,
    descricaoExperienciaPrestador: item.trim(),
  }));

  const publicacaoPrestadorHabilidades = habilidades.map((item) => ({
    idPrestadorHabilidades: 0,
    idPublicacaoPrestador: 0,
    descricaoHabilidadePrestador: item.trim(),
  }));

  const publicacaoPrestadorQualidades = qualidades.map((item) => ({
    idPrestadorQualidades: 0,
    idPublicacaoPrestador: 0,
    descricaoQualidadePrestador: item.trim(),
  }));

  const publicacaoPrestadorSubcategorias = especialidades.map((item) => ({
    idPublicacaoPrestadorSubcategoria: 0,
    idPublicacaoPrestador: 0,
    subcategoriaPrestador: item.trim(),
  }));

  try {
    //CRIAÇÃO DO ANÚNICO
    const CriaAnuncio = {
      publicacaoPrestador: {
        idPublicacaoPrestador: 0,
        idPrestador: id, // ID  (como número)
        categoriaPublicacaoPrestador: categoria,
        descricaoPublicacaoPrestador: descricao,
        valorPublicacaoPrestador: valor,
        formaDeAtendimentoPrestador: atendimento,
        dataPublicacaoPrestador: Data,
      },
      publicacaoPrestadorAbordagens: publicacaoPrestadorAbordagens,
      publicacaoPrestadorExperiencias: publicacaoPrestadorExperiencias,
      publicacaoPrestadorHabilidades: publicacaoPrestadorHabilidades,
      publicacaoPrestadorQualidades: publicacaoPrestadorQualidades,
      publicacaoPrestadorSubcategorias: publicacaoPrestadorSubcategorias,
    };
    const response = await api.post("/api/PublicacaoPrestador/", CriaAnuncio);
    console.log(" Publicação criada com sucesso:", response.data);
    await ClearAdCreationData();
    return("ok");
  } catch (error) {
    console.error(
      " Erro ao criar publicação:",
      error.response?.data || error.message
    );
  }
  
};

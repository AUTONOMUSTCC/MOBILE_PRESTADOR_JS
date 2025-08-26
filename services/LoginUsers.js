import api from "./api";

export async function LoginUsers(email, senha) {
  try {
    if (!email || !senha) {
      alert("Por favor, informe o e-mail e a senha.");
      return null;
    }

    const response = await api.get(`/prestador?email=${email}`);
    let prestador = response.data;

    // Se a API retornar array
    if (Array.isArray(prestador)) {
      prestador = prestador[0];
    }

    if (!prestador) {
      alert("E-mail não encontrado.");
      return null;
    }

    if (prestador.senha_prestador !== senha) {
      alert("Senha inválida.");
      return null;
    }

    return prestador;

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Ocorreu um erro. Por favor, tente novamente.");
    return null;
  }
}

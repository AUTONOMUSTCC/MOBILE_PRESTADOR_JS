import api from "./api";

export async function LoginUsers(email, senha) {
  try {
    // Validação de entrada
    if (!email || !senha) {
      alert("Por favor, informe o e-mail e a senha.");
      return null;
    }

    // Buscar o prestador com esse e-mail na API (melhor performance, não buscar todos os prestadores)
    const response = await api.get(`/prestador?email=${email}`);
    const prestador = response.data;

    /*if (!prestador) {
      alert("E-mail não encontrado.");
      return null;
    }

    // Verificar a senha (idealmente no backend, usando hashing)
    if (prestador.senha_prestador !== senha) {
      alert("Senha inválida.");
      return null;
    }**/

    // Retornar os dados do prestador logado
    return prestador;

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Ocorreu um erro. Por favor, tente novamente.");
    return null;
  }
}

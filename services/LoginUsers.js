import api from "./api";

export async function LoginUsers(email, senha) {
  try {
    if (!email || !senha) {
      alert("Por favor, informe o e-mail e a senha.");
      return null;
    }

    // Buscar todos os prestadores
    const response = await api.get("/Prestador");
    const prestadores = response.data;

    if (!Array.isArray(prestadores) || prestadores.length === 0) {
      alert("Nenhum prestador encontrado.");
      return null;
    }

    // Procurar prestador com o email informado
    const prestador = prestadores.find(p => p.email === email);

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

import api from "./api";
export async function LoginUsers(email, senha) {
  try {
    // Buscar todos os prestadores na API
    const response = await api.get("/prestador");
    const prestadores = response.data;

    // Verificar se existe um prestador com esse email e senha
    const prestadorAutenticado = prestadores.find(
      (p) => p.email_prestador === email && p.senha_prestador === senha
    );

    if (!prestadorAutenticado) {
      alert("E-mail e/ou senha inválidos.");
      return null;
    }

    //Retornar os dados do prestador logado
    return prestadorAutenticado;

  } catch (error) {
    console.error("Erro ao fazer login:", error);
    alert("Ocorreu um erro. Por favor, tente novamente.");
    return null;
  }
}
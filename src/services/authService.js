import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
    return null;
  }
};

export const login = async (email, password) => {
  try {
    // Realiza a requisição de login
    const response = await api.post("/auth/login", { email, password });
    console.log("Resposta da API:", response.data);

    // Verifica se a resposta contém o token
    const token = response.data;

    // Caso o token não seja encontrado na resposta, lança um erro
    if (!token) {
      throw new Error("Token não retornado pela API.");
    }

    // Armazena o token no AsyncStorage
    await AsyncStorage.setItem('authToken', token);

    // Armazena as credenciais do usuário (email e senha) para login automático
    await AsyncStorage.setItem(
      "@userCredentials",
      JSON.stringify({ email, password })
    );

    // Retorna o sucesso
    return { erro: false, data: response.data };

  } catch (error) {
    // Caso haja algum erro no login, exibe e retorna a mensagem de erro
    console.error("Erro ao fazer login:", error);
    return {
      erro: true,
      mensagem:
        error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais.",
    };
  }
}

export const register = async (email, password) => {
  try {
    const response = await api.post("/auth/register", { email, password });

    await AsyncStorage.setItem(
      "@userCredentials",
      JSON.stringify({ email, password })
    );

    return { erro: false, data: response.data };
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return {
      erro: true,
      mensagem:
        error.response?.data?.message ||
        "Erro ao registrar usuário. Tente novamente.",
    };
  }
};


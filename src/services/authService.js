import api from "./api";
import axios from "axios";
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
    const response = await api.post("/auth/login", { email, password });
    console.log("Resposta da API:", response.data);
 
    const token = response.data;
 
    if (!token) {
      throw new Error("Token não retornado pela API.");
    }
 
    await AsyncStorage.setItem('authToken', token);
 
    await AsyncStorage.setItem(
      "@userCredentials",
      JSON.stringify({ email, password })
    );
 
    return { erro: false, data: response.data };
 
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return {
      erro: true,
      mensagem:
        error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais.",
    };
  }
}
 
export const register = async (username, telefone, email, password) => {
  try {
    const response = await api.post("/auth/register", { username, telefone, email, password });
 
    await AsyncStorage.setItem(
      "@userCredentials",
      JSON.stringify({ username, telefone, email, password })
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
 
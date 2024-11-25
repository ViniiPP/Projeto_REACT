import axios from "axios";
import { getToken } from './authService'; // Função que retorna o token armazenado

const api = axios.create({
  baseURL: "https://goobarapi-2.onrender.com",
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken(); // Recupera o token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Adiciona o token ao cabeçalho
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Retorna erros caso ocorram
  }
);

export default api;

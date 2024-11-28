import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para pegar o token de autenticação
 
// Função para enviar a localização ao banco de dados
export const sendLocationToDatabase = async ({ latitude, longitude, UUID }) => {
    // Recuperar o token de autenticação do AsyncStorage
    const token = await AsyncStorage.getItem('authToken');
   
    if (!token) {
        console.log("Token de autenticação não encontrado!");
        return;
    }
 
    // Dados a serem enviados
    const data = {
        latitude,
        longitude
    };
 
    // Enviar a localização para o banco de dados usando a API
    axios.post(`https://goobarapi-2.onrender.com/Bar/location/${UUID}`, data, {
        headers: {
            Authorization: `Bearer ${token}`, // Passando o token de autenticação
        }
    })
    .then(response => {
        console.log("Localização enviada com sucesso!", response.data);
    })
    .catch(error => {
        console.log("Erro ao enviar localização:", error.response ? error.response.data : error.message);
    });
};
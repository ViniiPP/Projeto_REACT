import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Para pegar o token de autenticação
 
// Função para enviar a localização ao banco de dados
export const sendLocationToDatabase = ({latitude, longitude,route}) => {
    const UUID = route.params;
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
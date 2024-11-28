import axios from "axios";
 
// Função para enviar a localização ao banco de dados
export const sendLocationToDatabase = ({latitude, longitude, UUID}) => {
    const data = {
        latitude,
        longitude
    };
 
    // Enviar a localização para o banco
    axios.post(`https://goobarapi-2.onrender.com/Bar/location/${UUID}`, data)
        .then(response => {
            console.log("Localização enviada com sucesso!", response.data);
        })
        .catch(error => {
            console.log("Erro ao enviar localização:", error);
        });
};
 
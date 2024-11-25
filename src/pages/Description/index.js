import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,Button,TextInput } from "react-native"
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Certifique-se de ter instalado o Axios

export const Description = ({route, navigation}) => {

    const MaxLenght = 500;
    const [numberDigito,setNumberDigito] = useState ('');
    const { nomeBar } = route.params; // Recupera o nomeBar passado pela tela anterior
    const [descricao,setDescricao] = useState ('');
    const [UUID, setUUID] =useState ()

    const registerBar = async () => {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
            console.error('Token não encontrado. Verifique o login do usuário.');
            return;
          }
        if (!descricao) {
            Alert.alert('Erro', 'Por favor, preencha a descrição do bar.');
            return;
        }

        try {
            const payload = {
                nomebar: nomeBar,
                descricao,
            };

            const res = await axios.post('https://goobarapi-2.onrender.com/Bar/registerBar', payload, {
                headers: {
                  Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
                },
              });

            setUUID (res.data)
            console.log('Resposta do servidor:', res.data);
            Alert.alert('Sucesso', 'Bar registrado com sucesso!');
            navigation.navigate('selectyourimage'); // Navega para a próxima página
        } catch (err) {
            console.error(err);
            Alert.alert('Erro', 'Não foi possível registrar o bar.');
        }
    };

    const nextTela = ()=> {
        registerBar ()
        navigation.navigate('selectyourimage', {UUID} );
    }

    return (
        <View style = {styles.bodyContainer}>
        <View style = {styles.bodyContainer}>
        <View style = {styles.TextContainer}>
             <Text style  = {styles.textTitle}>Crie sua melhor descrição</Text>
             <Text style = {styles.Subtitle}>Explique o que seu bar tem de especial e seus diferenciais.</Text>
             <TextInput style = {styles.textinput} maxLength={50} value={descricao} onChangeText={(setDescricao)}></TextInput>
             <Text>{MaxLenght - numberDigito.length} caracteres disponíveis</Text>
         </View>
        </View>
        <View style = {styles.nav}>
             <TouchableHighlight style = {styles.touch}>
             <View >
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold',textDecorationLine: 'underline'  }}onPress={() => navigation.navigate('nomebar')}>Voltar</Text>
              </View>
             </TouchableHighlight>
             <TouchableHighlight style = {{left: 15}}>
             <View style={styles.button }>
                     <Text style = {{color: 'white', fontSize: 20,fontWeight: 'bold'}}onPress={nextTela}>Avançar</Text>
              </View>
             </TouchableHighlight>
        </View>


     </View>

    )
}

const styles = StyleSheet.create (
    {
        bodyContainer :{
            flex: 1,
            backgroundColor: '#FBF7ED',
            alignItems: 'center',
        
        },
        TextContainer :{
            marginTop: 90,
            gap : 10,
            width: 350,
            height: 350
        },
        textinput : {
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 3, 
            borderColor: 'black',
            height: 320
        },
        textTitle : {
            fontSize: 23,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        Subtitle : {
            color: '#49454F'
        },
        nav : {
            elevation: 30,
            flexDirection: 'row', 
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 25, // Aplica raio no canto superior esquerdo
            borderTopRightRadius: 25,
            gap: 150
        }
        ,
        button : {
            backgroundColor: 'black',
            width: 120,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        },
        touch : {
            alignItems: 'center',
        }

    }
)


export default Description;
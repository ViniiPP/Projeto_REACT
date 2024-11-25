import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';
import cards from '../../json/bares.json';
import {OneStar,TwoStar,ThreStar,FourStar,FiveStar} from '../../components/Stars'
import NoImage from '../../assets/NoImage.png'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { GetLocation } from '../../services/LocationApi';
import axios from 'axios';

export function Home({ navigation }) {
    const noImage = 'https://semantic-ui.com/images/wireframe/image.png';

    const [barList, setBarList] = useState([]);
  
    useEffect(() => {
      const fetchBars = async () => {
        try {
          // Recupera o token do armazenamento local
          const token = await AsyncStorage.getItem('authToken');
          if (!token) {
            console.error('Token não encontrado. Verifique o login do usuário.');
            return;
          }
  
          // Faz a requisição com o token no cabeçalho
          const response = await axios.get('https://goobarapi-2.onrender.com/Bar/findBar', {
            headers: {
              Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
            },
          });
  
          console.log('Dados recebidos:', response.data);
          setBarList(response.data.content);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
  
      fetchBars(); // Chama a função para buscar os dados
    }, [1]);
  
    // Função para renderizar as estrelas
    const Stars = (numberStar) => {
      if (numberStar <= 1) return <OneStar size={18} />;
      if (numberStar <= 2) return <TwoStar size={18} />;
      if (numberStar <= 3) return <ThreStar size={18} />;
      if (numberStar <= 4) return <FourStar size={18} />;
      if (numberStar === 5) return <FiveStar size={18} />;
      return null; // Nenhuma estrela para valores inválidos
    };
  
    return (
      <View style={styles.container}>
        {/* Barra de Pesquisa Estática */}
        <View style={styles.header}>
          <View style={styles.headerComponent}>
            <TextInput style={styles.TextField} placeholder="Pesquisar" />
            <TouchableOpacity>
              <Ionicons name="options-outline" size={24} style={{ marginLeft: 10, marginTop: 8 }} />
            </TouchableOpacity>
          </View>
  
          <View style={styles.buttons}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Todos</Text>
            </TouchableOpacity>
  
            <TouchableOpacity>
              <Text style={styles.buttonText}>+ Populares</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Conteúdo que pode rolar */}
        <ScrollView style={styles.home}>
          <View style={styles.homeT}>
            {barList.map((bar, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => navigation.navigate('CardInfo', {id: bar.id})} // Envia os dados do bar para a tela 'CardInfo'
              >
                <Image
                  source={{ uri: bar.imagemurl ? bar.imagemurl : noImage }}
                  style={styles.cardImage}
                />
                <View style={{ flex: 1, paddingLeft: 5 }}>
                  <Text style={styles.cardTitle}>{bar.nomebar}</Text>
                  <Text style={styles.cardDescription}>
                    {bar.avaliacao} {Stars(bar.avaliacao)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style = {styles.margin}></View>
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFAF00',
    },
    home: {
        flex: 1,
        padding: 25,
        backgroundColor: '#FFAF00',
  
    },
    homeT: {
        flex: 1,
    
        height: '100%',
      
    },
    TextField: {
        backgroundColor: '#E9E9E9',
        flex: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        padding: 40,
    },
    headerComponent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 80,
        marginTop: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    card: {
        backgroundColor: '#FFF0D1',
        height: 340,
        marginVertical: 10,
        borderRadius: 20,
        elevation: 7
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        color: 'black',
        marginLeft: 20
    },
    cardDescription: {
        fontSize: 16,
        marginLeft: 20,
        color: 'black',
    },
    cardImage: {
      width: '100%',
      height: 230,
      marginBottom: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  },
  margin : {
    width: 50,
    height: 100
  }
});

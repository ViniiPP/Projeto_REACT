import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const baresDescription = ({ navigation, route }) => {
  const { id } = route.params;
  const [barList, setBarList] = useState(); // Inicializa como null para distinguir carregamento inicial

  useEffect(() => {
    console.log("ID recebido:", id); // Log para verificar ID
  }, [id]);

  useEffect(() => {
    const fetchBars = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          console.error('Token não encontrado. Verifique o login do usuário.');
          return;
        }

        const response = await axios.get(`https://goobarapi-2.onrender.com/Bar/barSelect/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Dados recebidos do backend:', response.data);
        setBarList(response.data.context || {}); // Define o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchBars();
  }, [id]);

  if (!barList) {
    // Enquanto os dados não são carregados, exibir uma mensagem
    return (
      <View style={Styles.loading}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={Styles.box}>
      <TouchableOpacity style={Styles.back} onPress={() => navigation.navigate('routes')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={Styles.boxImage}>
        {barList.imagemurl ? (
          <Image source={{ uri: barList.imagemurl }} style={Styles.cardImage} />
        ) : (
          <Text style={{ textAlign: 'center', marginVertical: 20 }}>Imagem não disponível</Text>
        )}
      </View>

      <View style={Styles.boxInformation}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {barList.nome || 'Nome do bar não disponível'}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          {barList.descricao || 'Descrição não disponível'}
        </Text>
        <Text style={{ marginTop: 10, fontSize: 14 }}>
          Avaliação: {barList.avaliacao || 'N/A'}
        </Text>
        <Text style={{ marginTop: 5, fontSize: 14 }}>
          Número de Avaliações: {barList.numerodeavaliacao || 'N/A'}
        </Text>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: '#FBF7ED',
  },
  boxImage: {
    width: '100%',
    height: 350,
    backgroundColor: 'blue',
    marginTop: 5,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  boxInformation: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  back: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF7ED',
  },
});

export default baresDescription;

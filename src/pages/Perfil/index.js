import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from "../../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
 
const handleLogout = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }], // Navegar para a tela de login
  })
};
 
export function Perfil({ navigation }) {
  const [userInformation, setUserInformation] = useState();
 
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
        const response = await axios.get('https://goobarapi-2.onrender.com/auth/FindUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
 
        console.log('Dados recebidos:', response.data);
        setUserInformation(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchBars();
  }, []);
 
  return (
    <ScrollView style={styles.perfil}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Perfil</Text>
      </View>
 
      <View style={styles.perfilHeader}>
        {userInformation ? (
          <View style={styles.dadosPerfil}>
            <Text style={styles.perfilNome}>{userInformation.username}</Text>
            <Text style={styles.perfilEmail}>{userInformation.email}</Text>
          </View>
        ) : (
          <Text>Carregando...</Text>
        )}
      </View>
 
      <TouchableOpacity style={styles.anuncieButton} onPress={() => navigation.navigate('anunciar')}>
        <Text style={styles.anuncieButtonText}>Anuncie seu bar no GooBar</Text>
        <Image source={require('../../assets/IMAGEM_FUNDO.png')} style={{ width: 100, height: 100, flexShrink: 0, marginLeft: 60 }} />
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.editarButton} onPress={() => navigation.navigate('star')}>
        <Ionicons name="pencil" size={20} color="#000" style={{ marginRight: 8 }} />
        <Text style={styles.editarButtonText}>Editar meus bares</Text>
      </TouchableOpacity>
 
      {/* configs */}
      <View style={styles.perfilConfig}>
        <View style={styles.perfilConfigTitle}>
          <Text style={styles.perfilTitleText}>Configurações</Text>
        </View>
 
        <TouchableOpacity style={styles.perfilConfigItem}>
          <Ionicons name="person-circle-outline" size={30} color={'#000'} style={{ marginRight: 8 }} />
          <Text style={styles.perfilConfigText}>Informações pessoais</Text>
          <Ionicons name={"chevron-forward-outline"} size={25} color={'#000'} style={{ marginRight: 3 }} />
        </TouchableOpacity>
        <View style={styles.divisor} />
        <TouchableOpacity style={styles.perfilConfigItem}>
          <Ionicons name={"lock-closed"} size={30} color={'#000'} style={{ marginRight: 8 }} />
          <Text style={styles.perfilConfigText}>Login e segurança</Text>
          <Ionicons name={"chevron-forward-outline"} size={25} color={'#000'} style={{ marginRight: 3 }} />
        </TouchableOpacity>
        <View style={styles.divisor} />
        <TouchableOpacity style={styles.perfilConfigItem}>
          <Ionicons name={"log-out"} size={30} color={'#000'} style={{ marginRight: 8 }} />
          <Text style={styles.perfilConfigText} onPress={() => handleLogout(navigation)}>Sair da conta</Text>
        </TouchableOpacity>
        <View style={styles.divisor} />
     
      </View>
      <View style = {styles.Top}></View>

    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  perfil: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f8f5f2',
  },
  title: {
    marginTop: 40,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  perfilHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 18,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#000',
    backgroundColor: '#FFFFFF',
  },
  perfilFoto: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 15,
  },
  dadosPerfil: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  perfilNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  perfilEmail: {
    fontSize: 15,
    marginTop: 2,
    color: 'gray',
  },
  anuncieButton: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 18,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFBD2C',
  },
  anuncieButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    flex: 1,
  },
  editarButton: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFBD2C',
  },
  editarButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  divisor: {
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
  },
  perfilConfig: {
    marginTop: 20,
  },
  perfilConfigTitle: {
    marginBottom: 5,
    marginLeft: 10,
  },
  perfilTitleText: {
    fontSize: 22,
    fontWeight: '600',
  },
  perfilConfigItem: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 2,
  },
  perfilConfigText: {
    color: '#000',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  Top : {
    height: 160
  }
});
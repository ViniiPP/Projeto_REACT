import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Login from '../auth/Login';
import { useAuth } from "../../context/AuthContext";

export function Perfil({navigation}) {

  const handleLogout = async () => {
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("userName");
    setUser(null);
    setToken(null);
    navigation.navigate('Login');  // Redireciona para a tela de login
  };

    return (
        <ScrollView style={styles.perfil}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Perfil</Text>
            </View>

            <View style={styles.perfilHeader}>
                <Image
                source={{ uri: 'https://via.placeholder.com/50' }}
                style={styles.perfilFoto}
                />
            
                <View style={styles.dadosPerfil}>
                    <Text style={styles.perfilNome}>Alan Mafalda</Text>
                    <Text style={styles.perfilEmail}>alan.mafalda@atitus.edu.br</Text>
                </View>
            </View>

            <TouchableOpacity style={[styles.anuncieButton]} onPress={() => navigation.navigate('anunciar')}>
                <Text style={styles.anuncieButtonText}>Anuncie seu bar no GooBar</Text>
                <Image source={require('../../assets/IMAGEM_FUNDO.png')} style={{width: 100, height: 100, flexShrink: 0, marginLeft: 60}}></Image>
            </TouchableOpacity>
    
            <TouchableOpacity style={[styles.editarButton]} onPress={() => navigation.navigate('star')}>
                <Ionicons name="pencil" size={20} color="#000" style={{ marginRight: 8 }} />
                <Text style={styles.editarButtonText}>Editar meus bares</Text>
            </TouchableOpacity>
    
            {/* configs */}
            <View style={styles.perfilConfig}>
              <View style={styles.perfilConfigTitle}>
                  <Text style={styles.perfilTitleText}>Configurações</Text>
              </View>

                <TouchableOpacity style={styles.perfilConfigItem}>
                  <Ionicons name="person-circle-outline" size={30} color={'#000'} style={{marginRight: 8}}></Ionicons>
                    <Text style={styles.perfilConfigText}>Informações pessoais</Text>
                  <Ionicons name={"chevron-forward-outline"} size={25}color={'#000'} style={{marginRight: 3}}/>
                </TouchableOpacity>
                <View style={styles.divisor} />
                <TouchableOpacity style={styles.perfilConfigItem}>
                  <Ionicons name={"lock-closed"} size={30}color={'#000'} style={{marginRight: 8}}/>
                    <Text style={styles.perfilConfigText}>Login e segurança</Text>
                  <Ionicons name={"chevron-forward-outline"} size={25}color={'#000'} style={{marginRight: 3}}/>
                </TouchableOpacity>
                <View style={styles.divisor} />
                <TouchableOpacity style={styles.perfilConfigItem}>
                  <Ionicons name={"log-out"} size={30}color={'#000'} style={{marginRight: 8}}/>
                    <Text style={styles.perfilConfigText} onPress={() => navigation.navigate("Login")}>Sair da conta</Text>
                </TouchableOpacity>
                <View style={styles.divisor} />
            </View>
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
        backgroundColor: '#FFFFFF'
      },
      perfilFoto: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 15,
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
        justifyContent: 'space-between', // para separar o texto e o ícone
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#FFBD2C'
      },
      anuncieButtonText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        flex: 1, // Ocupa o espaço restante para que o texto quebre automaticamente
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
        flex: 1, // Ocupa o espaço restante para que o texto quebre automaticamente
      },
      divisor: {
        height: 1,
        backgroundColor: '#000', // Cor da linha divisória
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
      perfilTitleText:{
        fontSize: 22,
        fontWeight:'600'
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
        fontSize: 16
      },
    });

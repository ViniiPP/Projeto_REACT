import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/authService";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { Routes } from "../Routes"; 


import { Anunciar } from '../../src/pages/Anunciar/';
import { Namebar } from '../../src/pages/NameBar';
import { Description } from '../../src/pages/Description';
import { Selectyourimage } from '../../src/pages/SelectYourImage';
import { ChoiseImage } from '../../src/pages/ChoiseImage';

import { Location } from '../../src/pages/Location';
import {baresDescription}  from '../../src/pages/bares/index'
import {CameraScreen} from '../../src/pages/Camera/index'


const Stack  = createNativeStackNavigator();


const AppRoutes = () => {
  const { setUser, setToken, user } = useAuth(); // Pega informações do contexto
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento

  const handleLogin = async () => {
    try {
      // Verifica se há um token armazenado no AsyncStorage
      const token = await AsyncStorage.getItem('authToken');
      
      if (token) {
        // O token existe, então o usuário está logado
        setToken(token); // Define o token no contexto
        // Você pode realizar uma chamada à API aqui para validar o token se necessário
        // Exemplo: const userResponse = await api.get("/user", { headers: { Authorization: `Bearer ${token}` } });
        
        setUser({ name: 'Usuário Logado' }); // Exemplo de definição do usuário (substitua com dados reais)
      }
    } catch (error) {
      console.error("Erro ao tentar autenticar automaticamente:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  useEffect(() => {
    handleLogin(); // Tenta autenticar automaticamente ao iniciar
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Se o usuário está autenticado, redireciona para as rotas principais (com tabs)
  return user ? <AppNavigator /> : <AuthNavigator />;
};

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

// Navegação para usuários autenticados
const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      {/* Rotas principais */}
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="routes"
        component={Routes} // Suas tabs: Home e Perfil
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Anunciar"
        component={Anunciar}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="nomebar"
        component={Namebar}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="description"
        component={Description}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="selectyourimage"
        component={Selectyourimage}
        options={{ headerShown: false }}
      />
   
      <AppStack.Screen
        name="ChoiseImage"
        component={ChoiseImage}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CardInfo"
        component={baresDescription}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="anunciar"
        component={Anunciar}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

// Navegação para login e registro
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AppRoutes;

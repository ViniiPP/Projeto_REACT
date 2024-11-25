import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado do usuário
  const [token, setToken] = useState(null); // Estado do token

  // Função de logout
  const logout = async () => {
    try {
      // Chama a função de logout do AuthService
      await authLogout(); // Limpa AsyncStorage e estado global
      // Limpa o estado do usuário no contexto
      setUser(null);
      setToken(null);

      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  // Verificar se o token existe no AsyncStorage ao iniciar o app
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('authToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Erro ao recuperar o token', error);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Hook para acessar o contexto

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; 
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  return (
    <AuthProvider> {/* Provedor de autenticação */}
      <NavigationContainer>
        <AppRoutes /> {/* Controla o fluxo de telas */}
      </NavigationContainer>
    </AuthProvider>
  );
}

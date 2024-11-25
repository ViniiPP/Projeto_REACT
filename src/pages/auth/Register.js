import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../context/AuthContext";
import { register } from "../../services/authService";

export default function Register({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [telefone, setTelefone] = useState("");
  const { setUser, setToken } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    const { erro, data, mensagem } = await register(email, password, username, telefone);

    if (erro) {
      Alert.alert(mensagem);
      return;
    }

    const { name, token } = data;

    setUser({ name });
    setToken(token);
  };

  return (
    <LinearGradient colors={['#FFBD2C', '#FFF']} style={styles.background}>
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.imageLogo} source={require('../../assets/LOGO_DO_APP.png')}/>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.registerContainer}>
                    <Text style={[styles.registerText, {alignSelf: "center"}]}>Cadastre-se</Text>

                    <TextInput
                        placeholder="Nome Completo"
                        placeholderTextColor= '#49454F'
                        style={styles.TextField}
                        onChangeText={setUsername}
                    />

                    <TextInput
                        placeholder="E-Mail"
                        placeholderTextColor= '#49454F'
                        style={styles.TextField}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        placeholder="Número de celular"
                        placeholderTextColor= '#49454F'
                        style={styles.TextField}
                        onChangeText={setTelefone}
                    />

                    <View style={styles.passwordContainer}> 
                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor= '#49454F'
                            secureTextEntry={!showPassword}
                            style={styles.TextFieldPassword}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={30}
                                color="black"
                                style={{marginRight: 20}}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Crie sua conta</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomText}>
                        <Text style={styles.bottomText1}>Já possui uma conta? </Text>

                        <Text style={styles.bottomText2} onPress={() => navigation.navigate("Login")}>Faça o Login</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  background: {
    width: '100%',
    height: '100%',
    flexShrink: 0
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageLogo: {
    width: 162,
    height: 232,
    flexShrink: 0,
  },
  registerContainer: {
    backgroundColor: 'white',
    width:'100%',
    height:  428,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 20,
    shadowOffset: { // adicionando sombras
      width: 4,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8
  },
  TextField: {
    backgroundColor: '#E9E9E9',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    height: 48,
    paddingLeft: 10,
    fontWeight: 'bold',
    marginBottom: 17,
    flexShrink: 0,
    fontWeight: 'bold',
    shadowOffset: { // adicionando sombras
      width: 4,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
  },
  registerText: {
    color: 'black',
    fontWeight: '700',
    paddingBottom : 15,
    fontSize: 20,
    marginTop: 20
  },
  passwordContainer : {
    backgroundColor: '#E9E9E9',
    borderWidth: 2,
    width: "100%",  
    height: 48,
    borderRadius: 10,
    borderColor: 'black',
    shadowOffset: { // adicionando sombras
      width: 4,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  TextFieldPassword :{
    color: '#49454F',
    fontSize: 15,
    fontWeight: '700',
    paddingLeft: 10,
    flex: 1
  },
  iconEye : {
    // top: 8
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  bottomText: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 23,
    justifyContent: 'space-between',
    flexGrow: 1,
    marginBottom: 20
  },
  bottomText1: {
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'italic'
  },
  bottomText2: {
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#FFAF00',
    textDecorationLine: 'underline',
  },
});

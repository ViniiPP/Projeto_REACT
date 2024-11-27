import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";
import { login } from "../../services/authService";
 
export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setUser, setToken } = useAuth();
 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
 
    const handleLogin = async () => {
      const { erro, data, mensagem } = await login(email, password);
 
      if (erro) {
        Alert.alert(mensagem);
        return;
      }
 
      const { name, token } = data;
 
      setUser({ name });
      setToken(token);
      navigation.reset({
        index: 3,
        routes: [{ name: 'routes' }],
      })
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
                    scrollEnabled = {false}
                >
                    <View style={styles.emailContainer}>
                        <Ionicons
                            name={"mail"}
                            size={30}
                            color="black"
                            style={styles.iconEmail}
                        />
                        <Text style={styles.pipeText}>|</Text>
                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="#49454F"
                            style={styles.TextField}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
 
                    <View style={styles.passwordContainer}>
                        <Ionicons
                            name={"lock-closed"}
                            size={30}
                            color="black"
                            style={styles.iconSenha}
                        />
                        <Text style={styles.pipeText}>|</Text>
                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#49454F"
                            secureTextEntry={!showPassword}
                            style={[styles.TextField, styles.passwordField]}  // Ajustando o campo de senha
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconEyeContainer}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={30}
                                color="black"
                                style={styles.iconEye}
                            />
                        </TouchableOpacity>
                    </View>
 
                    <View style={styles.rememberPasswordFields}>    
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
 
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
 
                    <View style={styles.bottomText}>
                        <Text style={styles.bottomText1}>Não possui uma conta? </Text>
                        <Text style={styles.bottomText2} onPress={() => navigation.navigate("Register")}>Faça o Cadastro</Text>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
 
    imageLogo: {
        width: 226,
        height: 323,
        flexShrink: 0,
    },
 
    imageView: {
        paddingBottom: 21,
        paddingLeft: 67,
        paddingRight: 67,
        paddingTop: 92,
    },
 
    TextField: {
        color: '#49454F',
        fontSize: 15,
        fontWeight: '700',
        paddingLeft: 10,
        flex: 1, // Isso faz o campo de texto se expandir para o tamanho restante
    },
 
    passwordField: {
        paddingRight: 40, // Cria espaço à direita para o ícone de olho
    },
 
    rememberPasswordFields: {
        flexDirection: 'row',
        paddingBottom: 23,
        width: '100%',
        justifyContent: 'flex-end'
    },
 
    forgotPassword: {
        color: '#FFAF00',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
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
        flexGrow: 1
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
 
    pipeText: {
        fontSize: 30,
        top: 10,
        paddingLeft: 10,
    },
 
    emailContainer: {
        backgroundColor: '#FFF',
        paddingLeft: 20,
        borderWidth: 2,
        width: "100%",
        height: 70,
        borderRadius: 15,
        borderColor: 'black',
        margin: 6,
        color: '#49454F',
        fontSize: 15,
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 1,
        flexDirection: 'row',
    },
 
    passwordContainer: {
        backgroundColor: '#FFF',
        paddingLeft: 20,
        borderWidth: 2,
        width: "100%",
        height: 70,
        borderRadius: 15,
        borderColor: 'black',
        margin: 6,
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 1,
        flexDirection: 'row',
        position: 'relative',
    },
 
    iconEmail: {
        top: 18
    },
 
    iconSenha: {
        top: 18
    },
 
    iconEyeContainer: {
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: [{ translateY: -15 }]
    },
 
    iconEye: {
        top: 0,
    },
});
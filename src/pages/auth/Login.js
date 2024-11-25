import React from "react";
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
import { useState } from "react";
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
                            placeholderTextColor= '#49454F'
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
                            placeholderTextColor= '#49454F'
                            secureTextEntry={!showPassword}
                            style={styles.TextField}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={30}
                                color="black"
                                style={[styles.iconEye, {alignSelf: "flex-end"}]}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rememberPasswordFields}>    
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                    {/* () => navigation.navigate ('Home') */}
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

     rememberPassword: {
        color: 'black',
        fontWeight: 'bold'
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
        shadowOffset: { // adicionando sombras
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
        shadowOffset: { // adicionando sombras
          width: 4,
          height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        elevation: 1,
        flexDirection: 'row',
      },

      iconEmail: { 
        top: 18
      },

      iconSenha: {
        top: 18
      },

      iconEye: {
        top: 18,
      },
})
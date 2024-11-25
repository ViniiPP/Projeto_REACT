import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,Button,TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';


export const Anunciar = ({navigation}) => {
    return (
        <View style={styles.Header}>
            <View style = {styles.Body}>
                 <Text style = {styles.text}>
                    
                   <TouchableOpacity> <AntDesign name="caretleft" size={24} color="black" onPress={() => {navigation.navigate('routes')}} /> </TouchableOpacity>   
                    
                    É fácil anunciar no GooBar</Text>
            </View>
            <View style = {styles.BodyTwo}>
                 <Text style = {styles.subText}>Aqui estão todas as etapas seguintes para você cadastrar seu bar.</Text>
            </View>
            <View style = {styles.BodyT}>
                
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#FFBD2C', '#FFCC5C', '#FFDF99']}
                        style={styles.card}
                        start={{x : 0, y: 0}}
                        end = {{x :1.3  , y: 0.5}}>

                        <Text style= {styles.text1}>1 Cadastre a localização 
                                           
                                            </Text>
                                            <Ionicons name="location" size={60} color="black" style = {{marginLeft: 35}}/>
                 </LinearGradient>
                 <LinearGradient
                        // Button Linear Gradient
                        colors={['#FFBD2C', '#FFCC5C', '#FFDF99']}
                        style={styles.card}
                        start={{x : 0, y: 0}}
                        end = {{x :1.3 , y: 0.5}}>

                        <Text style= {styles.text1}>2  Descreva seu Bar
                                           
                                            </Text>
                                            <AntDesign name="form" size={50} color="black" style = {{marginLeft: 78}}/>
                 </LinearGradient>
                 <LinearGradient
                        // Button Linear Gradient
                        colors={['#FFBD2C', '#FFCC5C', '#FFDF99']}
                        style={styles.card}
                        start={{x : 0, y: 0}}
                        end = {{x :1.3  , y: 0.5}}>

                        <Text style= {styles.text1}>3  Adicione fotos
                                         
                                            </Text>
                                            <Ionicons name="image" size={60} color="black" style = {{marginLeft: 95}}/>
                 </LinearGradient>
                 <LinearGradient
                        // Button Linear Gradient
                        colors={['#FFBD2C', '#FFCC5C', '#FFDF99']}
                        style={styles.card}
                        start={{x : 0, y: 0}}
                        end = {{x :1.3 , y: 0.5}}>

                        <Text style= {styles.text1}>4  Concluir e publicar
                                            </Text>
                                         
                                            <Entypo name="publish" size={60} color="black" style = {{marginLeft: 55}} />
                 </LinearGradient>
             
                <TouchableOpacity onPress={() => navigation.navigate('nomebar')}>
          <View style={styles.button}>
            <Text style = {{color: 'white', fontSize: 20,fontWeight: 'bold'}}>Começar</Text>
          </View>
        </TouchableOpacity>
            </View>

        
    
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        backgroundColor: 'white',
        padding: 16,         
        alignItems: 'center', 
        marginTop: 20,
        width : '100%',
        height: '100%'
    },
    Body: {
  
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center', 
        width : 400,
        height: 45
    },
    BodyTwo: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center', 
        width : 350,
        height: 35
    },
    BodyT: {
        backgroundColor: 'white',
        alignItems: 'center', 
        width : 350,
        height: 550,
        padding: 5
    },
    text : {
        fontSize: 24,
        textTransform: 'capitalize',
        fontStyle: 'normal',
        fontWeight: 'bold',
    },
    text1 : {
        fontSize: 20,
        alignItems: 'flex-start',
        textAlign: 'left',
        justifyContent: "flex-start" ,
        fontStyle: 'normal',
        fontWeight: 'bold',
 
     
    },
    subText : {
        fontSize: 15,
        textTransform: 'capitalize',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#49454F'
    },
    card : {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 20,
        marginTop: 12,
        width: 350,
        height: 130,
        backgroundColor: 'orange',
        borderRadius: 15,
        borderWidth: 3, 
        borderColor: 'black',
        
        
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width : 350,
        height: 60,
      },

});

export default Anunciar;
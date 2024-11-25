import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,Button,TextInput } from "react-native"
import { useState,useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const Selectyourimage = ({navigation}) => {

  return (
    
    <View style = {styles.bodyContainer}>
         <View style = {styles.bodyContainer}>
        <View style = {styles.TextContainer}>
             <Text style  = {styles.textTitle}>Adicione algumas fotos do seu bar</Text>
             <Text style = {styles.Subtitle}>Você precisará de cinco fotos para começar. Você pode adicionar outras imagens ou fazer alterações mais tarde.</Text>
             <TouchableHighlight style = {styles.touch}>
             <View style = {styles.ButtonImage}>
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold', }}onPress={() => navigation.navigate('choiseImage')}>
                     <AntDesign name="plus" size={24} color="black" />   Adicionar fotos</Text>
              </View>
             </TouchableHighlight>
             <TouchableHighlight style = {styles.touch}>
             <View style = {styles.ButtonImage}>
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold', }}>
                     <FontAwesome name="camera" size={24} color="black" />   Tirar novas fotos</Text>
              </View>
             </TouchableHighlight>
         
         </View>
        </View>
        <View style = {styles.nav}>
             <TouchableHighlight style = {styles.touch}>
             <View >
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold',textDecorationLine: 'underline'  }}onPress={() => navigation.navigate('description')}>Voltar</Text>
              </View>
             </TouchableHighlight>
        </View>

    </View>
  )
};
const styles = StyleSheet.create (
    {
        bodyContainer :{
            flex: 1,
            backgroundColor: '#FBF7ED',
            alignItems: 'center',
        
        },
        TextContainer :{
            marginTop: 90,
            gap : 10,
            width: 350,
            height: 350
        },
        textinput : {
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 3, 
            borderColor: 'black',
            height: 110
        },
        textTitle : {
            fontSize: 22,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        Subtitle : {
            color: '#49454F'
        },
        nav : {
            elevation: 30,
            flexDirection: 'row', 
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            borderTopLeftRadius: 25, // Aplica raio no canto superior esquerdo
            borderTopRightRadius: 25,
            gap: 150,
            paddingLeft: 40
        }
        ,
        ButtonImage : {
            elevation: 5,
            flexDirection: 'row', 
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2, 
            borderColor: 'black',
            gap: 150,
            padding:10,
            height: 70
        },
        button : {
            backgroundColor: 'black',
            width: 120,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        },
        touch : {
            alignItems: 'center',
        }

    }
)

export default Selectyourimage;
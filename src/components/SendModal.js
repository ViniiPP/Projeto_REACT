import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const SendModal = () => {


    return (
        <View style = {styles.container}>
            <View style = {styles.modal}>
                <View style = {styles.simbol}><Text> <Ionicons name="send" size={50} color="white" /></Text></View>
                <View style = {styles.Text}>
                    <Text style = {styles.titulo}>Concluir e postar no GooBar</Text>
                    <Text style = {styles.subtitulo}> Lembrando que você poderá alterar essas informações depois de postar</Text>

                </View>
                <TouchableOpacity style = {styles.button}><Text style = {styles.tituloB}>Postar</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.buttonT}><Text style = {styles.tituloC}>Cancelar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create (
    {
        container : {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        modal : {
            width: 320,
            height: 400,
            backgroundColor: '#fff',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            elevation: 2
        },
        simbol : {
            width:100,
            height: 100,
            backgroundColor: '#FFBD2C',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent:'center'
        },
        Text : {
            width:270,
            height: 80,
            alignItems: 'center'
            
        },
  
        button : {
            width:270,
            height: 60,
            backgroundColor: 'black',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4
        },
        buttonT : {
            width:270,
            height: 60,
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4
        },
        titulo  : { 
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        tituloB  : { 
            fontSize: 23,
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: 'white'
        },
        tituloC  : { 
            fontSize: 23,
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: 'black'
        },
        subtitulo  : { 
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: '#49454F'
        }

    }
)


export default SendModal;
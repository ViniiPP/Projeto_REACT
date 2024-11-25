import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,Button,TextInput,Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const ChoiseImage = ({navigation}) => {

    const [image, setImage] = useState(null);
    const [remove,setRemove] = useState (false)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permissão necessária', 'Precisamos da sua permissão para acessar as fotos!');
        }
      }
    })();
     }, []);

     const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri); 
          setRemove (true)
        }
      };
    
      const removeImage = () => {
        if (image != null){
            setImage (null)
            setRemove (false)
        }
      }
    return (
    
        <View style = {styles.bodyContainer}>
             <View style = {styles.bodyContainer}>
            <View style = {styles.TextContainer}>
                 <Text style  = {styles.textTitle}>Escolha pelo menos 5 fotos</Text>
                 <Text style = {styles.Subtitle}>Arraste para reordenar.</Text>
                <View style = {styles.ImagePainel}>
                <TouchableHighlight style = {styles.touch} onPress={pickImage}>
             <View style = {styles.ButtonPlus}>
             <AntDesign name="plus" size={33} color="black" /> 
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold' }}> 
                     Adicionar foto
                     </Text>
              </View>
             </TouchableHighlight>
             {image && <Image source={{ uri: image }} style={{ width: 165, height: 165,  borderRadius: 10,elevation: 50,}} />}
             
                </View>
                <View style = {styles.trash}>
                {remove &&(
                 <TouchableHighlight
                 style={styles.ButtonRemove}
                 underlayColor="#DDDDDD"
                 onPress={removeImage}
               >
                 <Text style={styles.buttonText}><FontAwesome5 name="trash-alt" size={24} color="white" /></Text>
               </TouchableHighlight>
              
               )}
                </View>
             
             </View>
            </View>
            <View style = {styles.nav}>
            <TouchableHighlight style = {styles.touch}>
             <View >
                     <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold',textDecorationLine: 'underline'  }}onPress={() => navigation.navigate('selectyourimage')}>Voltar</Text>
              </View>
             </TouchableHighlight>
             <TouchableHighlight style = {{left: 15}}>
             <View style={styles.button }>
                     <Text style = {{color: 'white', fontSize: 20,fontWeight: 'bold'}}onPress={() => navigation.navigate('location')}>Avançar</Text>
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

            button : {
                backgroundColor: 'black',
                width: 120,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8
            },
            touch : {
          
            },
            ButtonPlus : {
                width: 165,
                height: 165,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 10,
                borderStyle: 'dashed',
                borderWidth: 2
            },
            ImagePainel: {
                width: 350,
                height: 200,flexDirection: 'row',gap: 20,justifyContent: 'flex-start'
            },
            ButtonRemove : {
                width: 50,
                height: 50,
                backgroundColor : "#dcdcdc",
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
            
            }, 
            trash : {
                width: 350,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 20
            }
    
        }
    )

export default ChoiseImage;
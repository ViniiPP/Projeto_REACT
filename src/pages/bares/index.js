import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native';
import * as LocationMap from 'expo-location';
import { FiveStar } from '../../components/Stars';
import UnicBar from '../../json/unicBar.json'
import { LinearGradient } from 'expo-linear-gradient';
import MapView from 'react-native-maps';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from 'axios';

export const baresDescription = ({ navigation, route }) => {
  const { id } = route.params;
  const [barList, setBarList] = useState([]); 
  

  useEffect(() => {
    console.log("ID recebido:", id); 
  }, [id]);

  useEffect(() => {
    const fetchBars = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (!token) {
          console.error('Token não encontrado. Verifique o login do usuário.');
          return;
        }

        const response = await axios.get(`https://goobarapi-2.onrender.com/Bar/barSelect/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Dados recebidos do backend:', response.data);
        
        setBarList(response.data); 
        console.log (typeof barList)
        console.log ("nome setado" + barList.nomebar)
   
        
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchBars();
  }, [id]);

 if (!barList) {
    return (
      <View style={Styles.loading}>
        <Text>Carregando...</Text>
      </View>
    );
  }




const ComentariosRender = () => {
      const coment = barList.comentarios; // Verifique se barList e comentarios estão definidos
      if (!coment) return null; // Evita erro caso coment seja undefined ou null
    
      return (
        <View>
          {coment.map((comentario, index) => (
            <View key={index}>
              <View style = {Styles.comentariosBox}>
                  <Text style = {{fontSize: 17,fontWeight: 'bold',textTransform: 'capitalize'}}>{comentario.usuario}</Text>
                  <Text style = {{fontSize: 14}}>{comentario.comentario}</Text>
                 </View>
            </View>
          ))}
        </View>
      );
    };
 
 

  return (
    <ScrollView style={Styles.box}>
     {barList ? (
        <ScrollView style = {Styles.box}  >
        <TouchableOpacity style = {Styles.back} onPress={() => navigation.navigate('routes')}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style = {Styles.boxImage}>
        <Image source = {{uri: barList.imagemurl}} style={Styles.cardImage}/>
        </View>
<View style = {Styles.boxInformation}> 
    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>{barList.nomebarList}</Text>
  
    <View style = {Styles.boxAvaliation}>
        <View style = {Styles.box2}><Text style = {{textAlign: 'center'}}>{barList.avaliacao}</Text>
       
        </View>
        <View style = {Styles.box3}><Text style = {{textAlign: 'center'}}>{barList.numerodeavaliacao}</Text>
        <Text style = {{textAlign: 'center',fontWeight: 'bold'}}>avaliações</Text>
        
        </View>
    </View>
    <View style={{ height: 1.5, backgroundColor: 'black', marginVertical: 10,width: 350}} />
</View>

<LinearGradient
colors={['#FFBD2C', '#FFCC5C', '#FFDF99']}
start={{ x: 0, y: 0 }}
end={{ x: 1.3, y: 0.5 }}
style={Styles.boxDescription} 
>
{/* Conteúdo dentro do gradiente, se necessário */}
<Text style={{fontSize: 19, fontWeight: 'bold'}}>Descrição do bar</Text>
<View style={{ height: 1.5, backgroundColor: 'black', marginVertical: 1,width: 350}} />
<Text style = {{fontSize: 16,textAlign: 'justify', width: 350}}>{barList.descricao}</Text>
<View style={{ height: 1.5, backgroundColor: 'black', marginVertical: 10,width: 350}} />
</LinearGradient>

<View style = {Styles.boxAll}>
    <View style = {Styles.boxLocation}>
        <View style = {{height: 50,justifyContent: 'center',marginLeft: 15}}>
        <Text style = {{fontSize: 17, color: 'white',fontWeight: 'bold'}}>Localizacao do barList</Text>
        </View>
        <MapView
    style={Styles.map}

    showsUserLocation={true}
    followsUserLocation={true}
>
  
</MapView>
    
    
    </View>
    <View style={{ height: 1.5, backgroundColor: 'black', marginVertical: 10,width: 350}} />
    
    <Text>Nota comentarios</Text>
    <ComentariosRender/>
<TouchableOpacity style = {Styles.buttonAdd}>
  
   <Text>+ ADICIONAR COMENTARIO</Text>
</TouchableOpacity>
<View style = {{width: 100, height: 30}}></View>
</View>
    </ScrollView>

     ) : (
        <View> </View>
     )}
     
    </ScrollView>
  );
};

const Styles = StyleSheet.create ({
  box : {
      flex: 1,
      backgroundColor: '#FBF7ED'
  },
  boxImage: {
      width: '100%',
      height: 350,
      backgroundColor: 'blue',
      marginTop: 5,
      elevation: 1
  },
  boxInformation: {
      backgroundColor: '#FBF7ED',
      width: '100%',
      height: 200,
      gap: 12,
      paddingLeft: 20,
      paddingTop: 10
  },
  boxAvaliation: {
      width: 350
      ,height: 80
      ,backgroundColor: 'white'
      ,borderRadius: 20
      ,borderWidth: 2
      ,borderColor: 'black'
      ,elevation: 5
      ,flexDirection: 'row'
      ,justifyContent: 'center'
      ,alignItems: 'center'
  },
  boxDescription:  {
      flex: 1,
       minWidth: 320
      ,minHeight: 300
      ,backgroundColor: 'white'
      ,paddingLeft: 20
      ,paddingTop: 30
      ,gap: 15
      ,elevation: 5
    
  },
  boxAll : {
      flex: 1,
      minWidth: 320
      ,minHeight: 300,
      justifyContent: 'center',
      alignItems: 'center'
  },
  boxLocation: {
      width: 325,
      height: 340,
      backgroundColor: 'black',
      marginTop: 20,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'black'
  },
  cardImage: {
      width: '100%',
      height: '100%',
 
  },
  map: {
      flex: 1,
      borderRadius: 20,
  },
  comentariosBox: {
      backgroundColor: 'white',
      width: 350,
      marginTop: 10,
      paddingLeft: 10,
      height: 160,
      paddingTop: 15,
      borderRadius: 20,
      borderWidth: 2
      ,borderColor: 'black'
      ,elevation: 2
      ,gap: 5
  },
  buttonAdd: {
      width: 350,
      backgroundColor: '#FFBD2C'
      ,height: 60
      ,marginTop: 30
      ,borderRadius: 10
      ,borderWidth: 2
      ,borderColor: 'black'
      ,justifyContent: 'center'
      ,paddingLeft: 10
  },
  box2: {
      width: '50%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  box3: {
      borderLeftColor:'black' ,
      width: '50%',
      height: '80%',
      borderLeftWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    
  }
  ,back: {
      width: 50,
      height: 50
      ,borderRadius: 100
      ,justifyContent: 'center'
      ,alignItems: 'center'
      ,marginTop: 15
  }
})

export default baresDescription;

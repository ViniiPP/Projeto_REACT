import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,TouchableOpacity } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

export function OneStar ({size}){
    const styles = StyleSheet.create (
        {
            
        }
    )
    return (
        <View>
            <Text>
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
            </Text>
        </View>
    )

   
}
export function TwoStar ({size}){
    const styles = StyleSheet.create (
        {
            
        }
    )
    return (
        <View>
            <Text>
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
            </Text>
        </View>
    )

   
}
export function ThreStar ({size}){
    const styles = StyleSheet.create (
        {
            
        }
    )
    return (
        <View>
            <Text>
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="gray" />
                <AntDesign name="star" size={size} color="gray" />
            </Text>
        </View>
    )

   
}

export function FourStar ({size}){
    const styles = StyleSheet.create (
        {
            
        }
    )
    return (
        <View>
            <Text>
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="orange" />
                <AntDesign name="star" size={size} color="gray" />
            </Text>
        </View>
    )

   
}

export function FiveStar ({size}){
    const styles = StyleSheet.create (
        {
            
        }
    )
    return (
        <View>
            <Text>
                <AntDesign name="star" size={24} color="orange" />
                <AntDesign name="star" size={24} color="orange" />
                <AntDesign name="star" size={24} color="orange" />
                <AntDesign name="star" size={24} color="orange" />
                <AntDesign name="star" size={24} color="orange" />
            </Text>
        </View>
    )

   
}

const styles = StyleSheet.create (
    {
 
    }
)
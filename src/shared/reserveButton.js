import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function reserveButton(props){
    return(
        <TouchableOpacity style={styles.ButtonStyle} onPress={props.action}>
            <Text style={{ color : 'green', marginHorizontal: 5}}>Reserver</Text>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    ButtonStyle:{
        borderColor : 'green' , 
        borderWidth : 1 , 
        borderRadius : 5 ,
        padding : 5 
    },
})
import React from 'react'
import {View,StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

export default function ScanItem(props){
    const color = props.item.payed ? '#0dc400'  : '#D43'
    return(
        <TouchableOpacity style={styles.main_container} onPress={props.action}>
            <View style={[styles.status,{backgroundColor:color}]}>

            </View>
            <Image resizeMode='contain' style={styles.imageStyle} source={{uri:props.item.image}}/>
            <View style={styles.topInsctructions}>
                <Text>Réservation {props.item.nom}</Text>
                <Text style={{fontSize:12,color:'#bcbcbc'}}>De {props.item.start_date} A {props.item.end_date}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    main_container:{
        height:60,
        flexDirection:'row',
        alignItems:'center'
    },
    imageStyle:{
        width:'15%',
        height:'100%'
    },
    topInsctructions:{
        paddingLeft:'5%',
        justifyContent:'space-between'
    },
    status:{
        width:4,
        height:"90%",
        marginRight:5
    }
})
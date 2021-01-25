import React from 'react'
import {View , Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
export default function HeaderComponent(props){
    return(
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                {props.type=='main' ? 
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Icon name="menu" size={20} type="materialicons" color="#fff" />
                </TouchableOpacity> : 
                <TouchableOpacity onPress={props.navigation.goBack}>
                <Icon name="arrowleft" size={20} type="antdesign" color="#fff" />
            </TouchableOpacity> }
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        height:"10%",
        backgroundColor:'#0ad86e',
        alignItems:'flex-end',
        flexDirection:'row',
        elevation:3,
        paddingBottom:5
    },
    title:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
    titleContainer:{
        flex:6,
        paddingHorizontal:'5%'
    },
    menuContainer:{
        flex:1,
        alignItems:'center'
    }
})
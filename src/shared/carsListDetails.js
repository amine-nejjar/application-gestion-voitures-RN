import React from 'react'
import {View, Text, StyleSheet , Dimensions , Image,ImageBackground } from 'react-native'
const { width, height } = Dimensions.get('window');
import ReserveButton from './reserveButton'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default carsListDetails= (props) => {
        return(
            <View style={styles.ShadowStyle}>
                <ImageBackground               
                    source={require('./../../assets/carsBackground.jpg')} 
                    style={{  width: "100%" , height: width * 0.32, borderTopRightRadius:10,borderTopLeftRadius:10,overflow:'hidden',elevation:3 }} 
                ></ImageBackground>
                <Text style={styles.TextStyleBlack}>Clio 4 grise</Text>
                <View style={styles.container1}>
                    <View  style={{  flexDirection : 'row' }}>
                        <Text style={styles.TextStyleGrey}>{props.infoVoiture.Label}</Text>
                        <Text style={styles.TextStyleGrey}>   .{props.infoVoiture.Kilometrage} km</Text>
                    </View>
                    
                    <ReserveButton />
            
                        
                </View>              
            </View>
     )
}
const styles = StyleSheet.create({
    ShadowStyle: {   
        backgroundColor: 'white',
        borderRadius : 10 , 
        elevation:3,
        width:"98%",
        alignSelf:'center'
        
    },
    TextStyleBlack: {
        color : 'black',
        padding : 10 , 
        fontSize : width * 0.05
    },
    TextStyleGrey: {
       color : 'grey',
       textAlignVertical : 'center'
    },
    ButtonStyle:{
        borderColor : 'green' , 
        borderWidth : 1 , 
        borderRadius : 5 ,
        padding : 5 
    },
    container1: {
        flexDirection : 'row',
        paddingHorizontal : 10, 
        paddingBottom : 10,
        justifyContent : 'space-between', 
     
      },
});
 
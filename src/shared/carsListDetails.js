import React from 'react'
import {View, Text, StyleSheet , Dimensions , Image } from 'react-native'
const { width, height } = Dimensions.get('window');
import { TouchableOpacity } from 'react-native-gesture-handler';

export default carsListDetails= (props) => {
        return(
            <View style={styles.ShadowStyle}>
                <Image               
                    source={require('./../../assets/carsBackground.jpg')} 
                    style={{  width: width * 0.9  , height: width * 0.4 , borderTopLeftRadius : 10 , borderTopRightRadius : 10  }} 
                />
                <Text style={styles.TextStyleBlack}>Clio 4 grise</Text>
                <View style={styles.container1}>
                    <View  style={{  flexDirection : 'row' }}>
                        <Text style={styles.TextStyleGrey}>{props.infoVoiture.Label}</Text>
                        <Text style={styles.TextStyleGrey}>   .{props.infoVoiture.Kilometrage} km</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.ButtonStyle} onPress={()=> props.navigation.navigate("ReservationFormScreen")}>
                        <Text style={{ color : 'green', marginHorizontal: 5}}>Reserver</Text>
                    </TouchableOpacity>
            
                        
                </View>              
            </View>
     )
}
const styles = StyleSheet.create({
    ShadowStyle: {    
        elevation: 11,
        backgroundColor: 'white',
        borderRadius : 10 , 
 
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
 
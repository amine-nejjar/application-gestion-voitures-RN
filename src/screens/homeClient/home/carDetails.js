import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
class CarDetailScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>Car details screen</Text>    
            <Button title="go to reservation form" onPress={()=> this.props.navigation.navigate("ReservationFormScreen")}/>        
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#fff'
    },

});
export default CarDetailScreen
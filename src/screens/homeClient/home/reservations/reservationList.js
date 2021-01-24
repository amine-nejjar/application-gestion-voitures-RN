import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
class ReservationListScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>reservation list screen</Text>  
            <Button title="go to factures" onPress={()=> this.props.navigation.navigate("FactureScreen")}/>          
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
export default ReservationListScreen
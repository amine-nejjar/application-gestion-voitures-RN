import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
class ReservationFormScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
              <Text>reservation form screen</Text>            
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
export default ReservationFormScreen
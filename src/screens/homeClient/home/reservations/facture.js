import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
class FactureScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>facture screen</Text>            
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
export default FactureScreen
import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
class HomeScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>Home Screen</Text>     
            <Button title="go to car details" onPress={()=> this.props.navigation.navigate("CarDetailSreen")}/>    
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
export default HomeScreen
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
class ProfileUpdateScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>profile update screen</Text>            
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
export default ProfileUpdateScreen
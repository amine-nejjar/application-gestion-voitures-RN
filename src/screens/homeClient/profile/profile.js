import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
class ProfileScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
               <Text>profile screen</Text>    
               <Button title="go to profile update" onPress={()=> this.props.navigation.navigate("ProfileUpdate")}/>        
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
export default ProfileScreen
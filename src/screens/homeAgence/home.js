import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import Header from '../../shared/header'
import * as firebase from 'firebase'

class HomeAgenceScreen extends React.Component{
    constructor(){
        super();
    }
     logOut = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Loading');
        } catch (e) {
            console.log(e);
        }
    }
    render(){
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="accueil agence" />
            <Text>Home Agence</Text>
            <Button title="se déconnecter" onPress={this.logOut}/>     
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
    },

});
export default HomeAgenceScreen
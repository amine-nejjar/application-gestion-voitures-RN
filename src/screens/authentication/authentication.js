import React from 'react'
import {View,Text,StyleSheet,ImageBackground,TextInput, Button} from 'react-native'


class AuthenticationScreen extends React.Component{
    constructor(){
        super()
        this.state={isLoading:false}
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                </View>
                <View style={styles.inputs}>
                    <Text>Entrer vos informations pour continuer</Text>
                    <TextInput style={styles.textInput} placeholder="entrez votre email" />
                    <TextInput style={styles.textInput} placeholder="mot de passe" secureTextEntry={true} />
                    <Button title="Login" color="#039b4f"/>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Pas de compte ?</Text>
                    <Text style={{color:"#039b4f", fontWeight:'bold'}}>Créer une compte gratuitement</Text>
                </View>              
            </View>
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    top:{
        flex:1,
        backgroundColor:'#D43',
        borderBottomRightRadius:100
    },
    inputs:{
        flex:2,
        justifyContent:'space-evenly',
        width:"90%",
        alignSelf:'center'
        
    },
    bottom:{
        flex:1,
        alignItems:'center'
    },
    textInput:{
        borderColor:'#a1b6cc',
        borderWidth:1
    }
});
export default AuthenticationScreen
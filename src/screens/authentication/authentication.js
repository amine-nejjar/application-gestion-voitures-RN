import React from 'react'
import {View,Text,StyleSheet,ImageBackground,TextInput, Button} from 'react-native'
import {Input} from 'react-native-elements'


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
                    <Text style={{color:"#494c4f",fontSize:12}}>Entrer vos informations pour continuer</Text>
                    <Input style={styles.textInput} placeholder="entrez votre email" />
                    {/* <Text style={{color:"#494c4f",fontSize:12,alignSelf:'flex-end'}}>Mot de passe oublier ?</Text> */}
                    <Input style={styles.textInput} placeholder="mot de passe" secureTextEntry={true}/>
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

    }
});
export default AuthenticationScreen
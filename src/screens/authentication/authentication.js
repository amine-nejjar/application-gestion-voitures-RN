import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import {Input} from 'react-native-elements'
import * as firebase from 'firebase'

class AuthenticationScreen extends React.Component{
    constructor(){
        super()
        this.state={isLoading:false,email:"",password:"",errorMessage:""}
    }
    navigatetoRegister= () => {
        this.props.navigation.navigate("RegisterTypeScreen")
    }
    logIn = ()=> {
        this.setState({isLoading:true})
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {this.setState({isLoading:false});this.props.navigation.navigate('Loading')})
        .catch(error => this.setState({ errorMessage: error.message,isLoading:false }))
    }
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.top} imageStyle={styles.ImageBackgroundStyle} source={require('../../../assets/carsBackground.jpg')}>
                    <View style={styles.insideBackground}>
                        <Image source={require('../../../assets/logo.png')} style={styles.imageStyle} />
                        <Text style={styles.titleStyle}>Bienvenu dans l'application RentaCar</Text>
                    </View>
                </ImageBackground>
                <View style={styles.inputs}>
                    <Text style={{color:"#494c4f",fontSize:12}}>Entrer vos informations pour continuer</Text>
                    <Input style={styles.textInput} placeholder="entrez votre email" onChangeText={(txt)=>this.setState({email:txt})}/>
                    <Input style={styles.textInput} placeholder="mot de passe" secureTextEntry={true} onChangeText={(txt)=>this.setState({password:txt})} />
                    <Button loading={this.state.isLoading} title="Login" buttonStyle={{backgroundColor:'#039b4f'}} onPress={()=> this.logIn()}/>
                    <Text style={styles.errorStyle}>{this.state.errorMessage}</Text>
                </View>   
                <View style={styles.bottom}>
                    <Text style={{color:"#c6c6c6"}}>Pas de compte ?</Text>
                    <TouchableOpacity onPress={()=> this.navigatetoRegister()}>
                        <Text style={{color:"#039b4f", fontWeight:'bold'}}>Créer une compte gratuitement</Text>
                    </TouchableOpacity>
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
        flex:2,
        
    },
    inputs:{
        flex:3,
        justifyContent:'space-evenly',
        width:"90%",
        paddingVertical:"5%",
        alignSelf:'center'
        
    },
    bottom:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{

    },
    insideBackground:{
        backgroundColor:'rgba(132, 176, 188, 0.7)',
        flex:1,
        borderBottomRightRadius:90,
        justifyContent:'space-evenly',
        paddingVertical:20
    },
    imageStyle:{
        resizeMode:'contain',
        width:"40%",
        height:"40%",
        
    },
    ImageBackgroundStyle:{
        borderBottomRightRadius:90,
    },
    titleStyle:{
        fontWeight:'bold',
        fontSize:20,
        paddingLeft:6
    },
    errorStyle:{
        color:'#D43',
        alignSelf:'center',
        textAlign:'center'
    }
});
export default AuthenticationScreen
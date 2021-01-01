import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,Button,TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'


class AuthenticationScreen extends React.Component{
    constructor(){
        super()
        this.state={isLoading:false}
    }
    navigatetoRegister= () => {
        this.props.navigation.navigate("RegisterTypeScreen")
    }
    logIn = ()=> {
        this.props.navigation.navigate("HomeTabs")
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
                    <Input style={styles.textInput} placeholder="entrez votre email" />
                    <Input style={styles.textInput} placeholder="mot de passe" secureTextEntry={true}/>
                    <Button title="Login" color="#039b4f" onPress={()=> this.logIn()}/>
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
    }
});
export default AuthenticationScreen
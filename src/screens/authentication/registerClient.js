import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,Button,TouchableOpacity} from 'react-native'
import {Input} from 'react-native-elements'

class RegisterAgenceScreen extends React.Component{
  navigatetoLogin = () => {
    this.props.navigation.navigate("AuthenticationScreen")
  }
  register = () => {
    this.props.navigation.navigate("HomeTabs")
  }
  render(){
    return (
        <View style={styles.container}>
                <ImageBackground style={styles.top} imageStyle={styles.ImageBackgroundStyle} source={require('../../../assets/registerBackground.jpg')}>
                    <View style={styles.insideBackground}>
                        <Image source={require('../../../assets/logo.png')} style={styles.imageStyle} />
                        <Text style={styles.titleStyle}>Commencer à utiliser rentaCar</Text>
                    </View>
                </ImageBackground>
            <View style={styles.inputs}>
                <Text style={{color:"#494c4f",fontSize:12}}>Entrer vos informations pour continuer(Client)</Text>
                <Input style={styles.textInput} placeholder="Nom complet" />
                <Input style={styles.textInput} placeholder="entrez votre email" />
                <Input style={styles.textInput} placeholder="mot de passe" secureTextEntry={true}/>
                <Button title="Créer un compte" color="#039b4f" onPress={()=> this.register()}/>
            </View>   
            <View style={styles.bottom}>
                <Text style={{color:"#c6c6c6"}}>Vous possedez déja un compte ?</Text>
                <TouchableOpacity onPress={()=> this.navigatetoLogin()}>
                    <Text style={{color:"#039b4f", fontWeight:'bold'}}>Se connecter ici</Text>
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
          flex:4,
          justifyContent:'space-evenly',
          width:"90%",
          paddingVertical:"5%",
          alignSelf:'center'
          
      },
      bottom:{
          flex:1,
          alignItems:'center',
      },
      textInput:{
  
      },
      insideBackground:{
          backgroundColor:'rgba(132, 176, 188, 0.5)',
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
export default RegisterAgenceScreen
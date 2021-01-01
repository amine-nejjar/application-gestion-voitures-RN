import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'

class RegisterTypeScreen extends React.Component{
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
                <TouchableOpacity style={styles.choiceCard} onPress={()=> console.log("client")}>
                    <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/driver.png')}/>
                    <Text style={styles.featureText}>Je suis</Text>
                    <Text style={styles.userType}>Client</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceCard} onPress={()=> console.log("agence location")}>
                    <Image style={styles.imageStyle} resizeMode='contain' source={require('../../../assets/car.png')}/>
                    <Text style={styles.featureText}>Je suis</Text>
                    <Text style={styles.userType}>Agence de location</Text>
                </TouchableOpacity>
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
          alignSelf:'center',
          
      },
      choiceCard:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        margin:15,
        backgroundColor:'#fff',
        elevation:5
    },
    imageStyle:{
        width:"90%",
        height:"45%"
    },
    userType:{
        color:'#0a4f00',
    },
    featureText:{
        fontSize:10,
        textAlign:'center',
        color:'#545556'
    },
      bottom:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
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
export default RegisterTypeScreen
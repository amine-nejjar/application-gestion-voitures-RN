import React from 'react'
import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'
import {Input,Button} from 'react-native-elements'
import * as firebase from 'firebase'
class RegisterAgenceScreen extends React.Component{
    constructor(){
        super();
        this.state={nom:"",email:"",password:"",nameErr:"",emailErr:"",passwordErr:"",firebaseErr:"",loading:false}
    }
    navigatetoLogin = () => {
        this.props.navigation.navigate("AuthenticationScreen")
    }
    register = () => {
        this.setState({loading:true})
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authenticate=>{
            return authenticate.user
            .updateProfile({
            displayName: "agence"
            }).then(function() {
                //nothing for now
            })
            .catch(function(error) {
                // an error occured
            }); }
            )
        .catch(error => this.setState({ errorMessage: error.message }))
    }
    validate=() => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var valid=1;
        // validation du champ nom
        if(this.state.nom==""){
            this.setState({nameErr:"champ obligatoire"})
            valid=0
          }else{this.setState({nameErr:""})}
        // validation du champ email
        if(this.state.email==""){
            this.setState({emailErr:"champ obligatoire"})
            valid=0
          }else if(reg.test(this.state.email)==false){
            this.setState({emailErr:"email non valide"})
            valid=0
          }else{this.setState({emailErr:""})}
        // validation du champ password
        if(this.state.password==""){
            this.setState({passwordErr:"champ obligatoire"})
            valid=0
          }else if(this.state.password.length<6){
            this.setState({passwordErr:"le mot de passe doit contenir au moins 6 caractères"})
            valid=0
          }else{this.setState({passwordErr:""})}
          if(valid==1){
            this.setState({firebaseErr:""})
            this.register()
          }
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
                    <Text style={{color:"#494c4f",fontSize:12}}>Entrer vos informations pour continuer(agence)</Text>
                    <Input style={styles.textInput} placeholder="Nom de l'agence" errorMessage={this.state.nameErr} placeholder="Nom complet" onChangeText={(txt)=> this.setState({nom:txt})}/>
                    <Input style={styles.textInput} placeholder="Adresse de l'agence"/>
                    <Input style={styles.textInput} placeholder="Email" errorMessage={this.state.emailErr} onChangeText={(txt)=> this.setState({email:txt})}/>
                    <Input style={styles.textInput} placeholder="mot de passe" secureTextEntry={true} errorMessage={this.state.passwordErr} onChangeText={(txt)=> this.setState({password:txt})}/>
                    <Button title="Créer un compte" loading={this.state.loading} buttonStyle={{backgroundColor:'#039b4f'}} onPress={()=> this.validate()}/>
                    <Text style={styles.errorStyle}>{this.state.firebaseErr}</Text>
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
      },
      errorStyle:{
        color:'#D43',
        alignSelf:'center'
    }
  });
export default RegisterAgenceScreen
import React from 'react'
import {View, Text, StyleSheet , TouchableOpacity , Image , Alert} from 'react-native'
import Header from '../../../shared/header'
import * as firebase from 'firebase'
import {Button} from 'react-native-elements'
import {Input} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
 
class AddCar extends React.Component{
    constructor(){ 
        super();
        const user = firebase.auth().currentUser;
        this.state={nom:"",email:"",prix:"",type:"",km:"",couleur:"", user :user.uid , url : ''}
         console.log(this.state.user)
        
    }
    
    onChooseImagePress = async (key) => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.cancelled) {

            this.uploadImage(result.uri,key)
                .then(() => {
                    Alert.alert("Successfully uploaded");
                }).then(() => {
                   return firebase.storage().ref().child(key).getDownloadURL(); 
                }).then(downloadURL => {
                   console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
                   this.setState({
                      url : downloadURL ,
                      avatar : result.uri,
                   });
            
                }).catch((error) => {
                    Alert.alert('Error:', error.message);
                });
        }
    }
    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        var ref = firebase.storage().ref().child(imageName);
        return ref.put(blob);

        
    }
    AddInformations(){
        var pushedRef = firebase.database().ref().child('cars').push(
            {
              agence : this.state.user ,
              nom : this.state.nom ,
              color  : this.state.couleur,
              type : this.state.type,
              km : this.state.km,
              prix : this.state.prix ,
              image : this.state.url ,

            }
        );
        console.log(pushedRef.key);
        var pushedRef = firebase.database().ref().child('cars').child(pushedRef.key).child('photos').push( this.state.url);
    }
    render(){
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="Ajouter une voiture" />
                <ScrollView style={{ margin : '3%' }}>
                    <View style={{  alignItems: 'center', width: "100%",justifyContent: 'center' }} >
                        <TouchableOpacity style={styles.avatarPlaceholder} onPress={() => { this.onChooseImagePress(firebase.auth().currentUser.uid);}} >
                            <Image source={{ uri: this.state.avatar }} style={styles.avatar}/>
                                <MaterialIcons name="add-a-photo" size={30} color="white" />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.container2}>
                        <Input style={styles.textInput} placeholder="Nom de voiture" onChangeText={(txt)=>this.setState({nom:txt})}/>
                        <Input style={styles.textInput} placeholder="Prix de location" onChangeText={(txt)=>this.setState({prix:txt})}/>
                        <Input style={styles.textInput} placeholder="Type de voiture" onChangeText={(txt)=>this.setState({type:txt})}/>
                        <Input style={styles.textInput} placeholder="Kilometrage" onChangeText={(txt)=>this.setState({km:txt})}/>
                        <Input style={styles.textInput} placeholder="Couleur" onChangeText={(txt)=>this.setState({couleur:txt})}/>
                        
                        <Button 
                            title="Ajouter" 
                            type='outline' 
                            titleStyle={{ color : 'white'}}
                            onPress={()=> this.AddInformations()}         
                            buttonStyle={{ backgroundColor : '#0ad86e'}}
                        />
                        
                    </View>  
                </ScrollView>                    
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    container2: {
        flex: 1,
        backgroundColor:'#fff',
        margin : '3%'
    },
    listView:{
        flex:4,
        marginTop:"8%",
 
     },
     separator: {
        marginBottom : 25,
    },
    avatarPlaceholder: {
        width: 135,
        height: 135,
        backgroundColor: "grey",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        position: 'absolute',
        width: 130,
        height: 130,
        opacity: 0.6,
        backgroundColor: "grey",
        justifyContent: "center",
        borderRadius: 100,
        alignItems: "center",
    }

});
export default AddCar
import React from 'react'
import {View, Text, StyleSheet , FlatList } from 'react-native'
import Header from '../../../shared/header'
import * as firebase from 'firebase'
import {Button} from 'react-native-elements'
import {Input} from 'react-native-elements'

 
class AddCar extends React.Component{
    constructor(){ 
        super();
        this.state={nom:"",email:"",prix:"",type:"",km:"",couleur:"",}
    }
    
    getCars = () => {
        this.setState({isLoading:true})
        firebase.database().ref('/cars').on('value', doc => {
            var carArray = [];
            doc.forEach(function(snap) {
                var item = snap.val();
                item.key = snap.key;
                carArray.push(item);
            });
            this.setState({cars:carArray,isLoading:false})
        })
    }

    render(){
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="Ajouter une voiture" />
                <View style={styles.container2}>
                    <Input style={styles.textInput} placeholder="Nom de voiture" onChangeText={(txt)=>this.setState({nom:txt})}/>
                    <Input style={styles.textInput} placeholder="Prix de location" onChangeText={(txt)=>this.setState({prix:txt})}/>
                    <Input style={styles.textInput} placeholder="Type de voiture" onChangeText={(txt)=>this.setState({type:txt})}/>
                    <Input style={styles.textInput} placeholder="Kilometrage" onChangeText={(txt)=>this.setState({km:txt})}/>
                    <Input style={styles.textInput} placeholder="Couleur" onChangeText={(txt)=>this.setState({couleur:txt})}/>
                    
                    <Button 
                        title="Ajouter" 
                        type='outline' 
                        titleStyle={{ color : 'green'}}
                        onPress={()=> console.log(this.state.cars)}         
                        buttonStyle={{ borderColor : 'green'}}
                    />
                       
                </View>                      
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
    

});
export default AddCar
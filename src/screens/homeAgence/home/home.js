import React from 'react'
import {View, Text, StyleSheet , FlatList} from 'react-native'
import Header from '../../../shared/header'
import * as firebase from 'firebase'
import {Button} from 'react-native-elements'
 
import CarsListDetails from '../../../shared/carsListDetails';
 
class home extends React.Component{
    constructor(){ 
        super();
        const user = firebase.auth().currentUser;
        this.state={Loading:false,agence: user.displayName ,cars:[]}
     }
    refreshList = () => {
        this.setState({Loading:true})
        setTimeout(()=> {
            this.setState({Loading:false})
        } 
            ,1000)
    }
     getCars = () => {
         
        this.setState({isLoading:true})
        firebase.database().ref('/cars').on('value', doc => {
            var carArray = [];
            doc.forEach(function(snap) {
                var item = snap.val();
                item.key = snap.key;
                console.log(item.key);
                console.log(firebase.auth().currentUser)
                if(item.key === firebase.auth().currentUser.uid){
                    carArray.push(item);
                }
            });
            this.setState({cars:carArray,isLoading:false})
        })
    }
    logOut = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Loading');
        } catch (e) {
            console.log(e);
        }
    }
    componentDidMount(){
        this.getCars()
    }
    render(){
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="accueil agence" type='main'/>
                <View style={styles.container2}>
                    <Button 
                        title="Proposer une Voiture" 
                        type='outline' 
                        titleStyle={{ color : 'green'}}
                        onPress={()=> this.props.navigation.navigate("AddCar")}
                        buttonStyle={{ borderColor : 'green'}}
                    />
                    <View style={styles.listView}>
                        <FlatList
                                data={this.state.cars}
                                extraData={this.state.agence}     
                                refreshing={this.state.Loading}
                                onRefresh={this.getCars}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={
                                    ({ item, index }) => {                     
                                        return (
                                            <View style={styles.separator}>
                                                <CarsListDetails infoVoiture={item} navigation={this.props.navigation}/>         
                                            </View>
                                        );
                                    }
                                }		 
                            />
                    </View>
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
export default home
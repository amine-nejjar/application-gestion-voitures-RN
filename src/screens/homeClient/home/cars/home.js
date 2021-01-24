import React from 'react'
import {View, Text, StyleSheet ,Image , Dimensions ,FlatList } from 'react-native'
import {Button} from 'react-native-elements'
import CarsListDetails from '../../../../shared/carsListDetails';
import {Picker} from '@react-native-picker/picker';
import Header from '../../../../shared/header'
import * as firebase from 'firebase'
const { width, height } = Dimensions.get('window');

const ListVoiture = [
   { id : 1 , Label : 'Clio' , Kilometrage : '152348' },
   { id :  2, Label : 'Clio' , Kilometrage : '152348' },
   { id : 3 , Label : 'Clio' , Kilometrage : '152348' },
   { id : 4 , Label : 'Clio' , Kilometrage : '152348' },
   { id : 5 , Label : 'Clio' , Kilometrage : '152348' },
   { id : 6 , Label : 'Clio' , Kilometrage : '152348' },
]

const Agences = [
    { id : 1 , Agence : 'Ahlam Rent '  },
    { id : 2 , Agence : 'Ahlam Rent '  },
    { id : 3 , Agence : 'Ahlam Rent '  },
 ]

 
class HomeScreen extends React.Component{
    constructor(){ 
        super();
        this.state={Loading:false,agence:"ahlam",cars:[]}
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

                carArray.push(item);
            });
            console.log('ok')
            this.setState({cars:carArray,isLoading:false})
        })
    }
    componentDidMount(){
        this.getCars()
    }
    render(){
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} title="accueil" type="main"/>
                <View style={styles.topView}>
                    <View style={styles.actionsView}>
                        <Text style={styles.TextStyle}>Voitures disponibles</Text>
                        <Button 
                            title="filter" 
                            type='clear' 
                            titleStyle={{ color : 'green'}}
                            onPress={()=> console.log(this.state.cars)}
                        />        
                    </View>
                    <View style={styles.pickerStyle}>
                        <Picker
                        selectedValue={this.state.agence}
                        style={{height: 50, width: "100%"}}
                        
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({agence: itemValue})
                            this.refreshList()
                        }
                            
                        
                        }>
                        <Picker.Item label="Agence Ahlan de location (6)" value="ahlam" />
                        <Picker.Item label="Agence Alwafaa (5)" value="alwafaa" />
                        <Picker.Item label="Agence Agdal location (5)" value="agadl" />
                        </Picker>
                    </View>
                    
                </View>
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
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {    
        flex: 1,
        backgroundColor:'#fff',
    },
    topView: {    
      flex:1,
      paddingHorizontal:'3%'
     },
     listView:{
        flex:4,
        marginTop:"8%",
        paddingHorizontal:'3%'
     },
    actionsView: {
        flexDirection : 'row',
        justifyContent :'space-between',
        marginVertical : width * 0.01 ,
    },
    TextStyle: {
        textAlignVertical : 'center',
        fontSize : 20
    },
    separator: {
        marginBottom : 25,
    },
    pickerStyle:{
        backgroundColor:'#fff',
        borderRadius:4,
        elevation:6
    }

});
export default HomeScreen
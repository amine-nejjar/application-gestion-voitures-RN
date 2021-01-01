import React from 'react'
import {View, Text, StyleSheet ,Image , Dimensions ,FlatList } from 'react-native'
import {Button} from 'react-native-elements'
import CarsListDetails from './../../../shared/carsListDetails';
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
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Image resizeMode='contain' source={require('./../../../../assets/logo.png')} style={{ width: width * 0.3, height: width * 0.12, }} />
                    <View style={styles.container2}>
                        <Text style={styles.TextStyle}>Voitures disponibles</Text>
                        <Button 
                            title="Filtrer" 
                            type='clear' 
                            titleStyle={{ color : 'green'}}
                            onPress={()=> this.props.navigation.navigate("ReservationFormScreen")}
                        />        
                    </View>
          
                    <FlatList
                        data={ListVoiture}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.id}
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
        backgroundColor : 'white',
        flex: 1,
    },
    container1: {    
      width : '90%',
    
      alignSelf : 'center',
      marginTop : width * 0.1 , 
     },
    container2: {
        flexDirection : 'row',
        justifyContent :'space-between',
        marginVertical : width * 0.02 ,
    },
    TextStyle: {
        textAlignVertical : 'center',
        fontSize : 20
    },
    separator: {
       marginBottom : 50
    
    },

});
export default HomeScreen
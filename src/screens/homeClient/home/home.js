import React from 'react'
import {View, Text, StyleSheet ,Image , Dimensions ,FlatList } from 'react-native'
import {Button} from 'react-native-elements'
import CarsListDetails from './../../../shared/carsListDetails';
import {Picker} from '@react-native-picker/picker';

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
        this.state={agence:"ahlam"}
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image resizeMode='contain' source={require('./../../../../assets/logo.png')} style={{ width: width * 0.3, height: width * 0.12, }} />
                    <View style={styles.actionsView}>
                        <Text style={styles.TextStyle}>Voitures disponibles</Text>
                        <Button 
                            title="Filtrer" 
                            type='clear' 
                            titleStyle={{ color : 'green'}}
                            onPress={()=> this.props.navigation.navigate("CarDetailScreen")}
                        />        
                    </View>
                    <View style={styles.pickerStyle}>
                        <Picker
                        selectedValue={this.state.agence}
                        style={{height: 50, width: "100%"}}
                        
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({agence: itemValue})
                        }>
                        <Picker.Item label="Agence Ahlan de location (6)" value="ahlam" />
                        <Picker.Item label="Agence Alwafaa (5)" value="alwafaa" />
                        <Picker.Item label="Agence Agdal location (5)" value="agadl" />
                        </Picker>
                    </View>
                    
                </View>
                <View style={styles.listView}>
                    <FlatList
                            data={ListVoiture}     
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => item.id.toString()}
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
        paddingHorizontal:"3%",
        backgroundColor:'#f8f8f8'
    },
    topView: {    
      flex:1,
      marginTop : width * 0.1 , 
     },
     listView:{
        flex:3,
        marginTop:"8%"
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
        elevation:2
    }

});
export default HomeScreen
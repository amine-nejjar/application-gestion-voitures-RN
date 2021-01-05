import React from 'react'
import {View,Image , Text, StyleSheet, Button , Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window');

class ProfileScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return ( 
            <View style={styles.container}> 
                <View style={styles.TopHeader}>
                  <Text style={styles.StyleTextGras}>Mon Profile</Text> 
                  <Text style={styles.StyleTextGreen}>Parametres</Text>    
                </View> 
                <View style={styles.TopViewContainer}> 
                    <View style={styles.TopView}> 
                      <Image   source={require('./../../../../assets/avatar.png')} style={{ flex : 1 , width : undefined , height : undefined, borderRadius : 100 ,  backgroundColor : 'red',    }} /> 
                      <View style={styles.TopViewRow}>
                        <View style={{ alignSelf :'flex-end' }}>
                            <Text>edit</Text>
                        </View>
                        <View style={styles.TopViewRowinfo}>
                            <Text>Nejjar Ahmed Amine</Text>    
                            <Text>3 Reservations . 2 opinions</Text>    
                        </View> 
                      </View> 
                    </View>
                    <View style={styles.SeparatorStyle} /> 
                    <View style={styles.TopView}> 
                        <Text>Tabs</Text>    
                    </View>                  
                </View>
                <View style={styles.ListStyleContainer}>
                  <Text>Cars screen</Text>    
                </View>
            </View>            
          ); 
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingHorizontal:"3%",
    },
    TopHeader: {
        flex: 1,
        backgroundColor : 'yellow',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    TopViewContainer: {
        flex: 2,
        justifyContent:'center',
        backgroundColor : 'grey',
    },
    StyleTextGras: {
        fontWeight : 'bold',
        fontSize :  width * 0.05
    },
    StyleTextGreen: {
        fontSize :  width * 0.045,
        fontWeight : 'bold',
        color : 'green'
    },
    TopView: {
        flex: 1,
    
        flexDirection : 'row',
 
    },
    TopViewRow: {
        flex: 3,    
        backgroundColor : 'pink'
    },
    TopViewRowinfo: { 
        flex : 1 ,
        justifyContent : 'center',
        backgroundColor : 'red'
    },
    SeparatorStyle: {
        height : 1,
        backgroundColor : 'red'
    },
    ListStyleContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'pink'
    },
});
export default ProfileScreen
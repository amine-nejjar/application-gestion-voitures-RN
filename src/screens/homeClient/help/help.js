import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import Header from '../../../shared/header'
class HelpScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.main_container}>
            <Header title='Aide' type='main' navigation={this.props.navigation} />    
            <View style={{flex:1,paddingTop:'5%'}}> 
                <View style={styles.noticeContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Comment chercher une voiture</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="pluscircleo" size={20} type="antdesign" />
                    </View>
                </View>     
                <View style={styles.noticeContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Comment effectuer une réservation</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="pluscircleo" size={20} type="antdesign" />
                    </View>
                </View>
                <View style={styles.noticeContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Comment payer les factures</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="pluscircleo" size={20} type="antdesign" />
                    </View>
                </View>
                <View style={styles.noticeContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Comment gérer mon profile</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="pluscircleo" size={20} type="antdesign" />
                    </View>
                </View>    
                <View style={styles.noticeContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Comment déclarer une fausse agence</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="pluscircleo" size={20} type="antdesign" />
                    </View>
                </View> 
            </View>
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    main_container: {
    flex: 1,
    backgroundColor:'#fff'
    },
    noticeContainer:{
        height:60,
        borderWidth:1,
        borderColor:'#b7b7b7',
        marginHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'5%',
        justifyContent:'space-between'
    },
    title:{
        flex:7
    },
    icon:{
        flex:1,
    },
    titleText:{
        fontSize:12
    }

});
export default HelpScreen
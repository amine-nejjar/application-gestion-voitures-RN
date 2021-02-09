import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Divider, Icon} from 'react-native-elements'
import { CommonActions } from '@react-navigation/native';
import Moment from 'moment';
import * as firebase from 'firebase'

import Header from '../../../../shared/header'

class FactureScreen extends React.Component{
    constructor(){
        super();
    }
    titleSection = (title) => {
        return(
            <View style={{height:50,paddingLeft:'5%',justifyContent:'center'}}>
                <Text style={{color:'#bfbfbf', fontSize:12}}> • {title}</Text>
            </View>
        )
    }
    payer = (reservation) =>{
        const ref = firebase.database().ref().child('reservations').child(reservation.key).child("payed").set("true")
        this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'ReservationStack' }]
                    })
                  );
    }
    supprimer = (reservation) => {
        const ref = firebase.database().ref().child('reservations').child(reservation.key).remove()
        this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: 'ReservationStack' }]
                    })
                  );
    }
    render(){
        const reservation = this.props.route.params.reservation
        var annul = true 
        var now = Moment()
        var str = Moment(reservation.start_date,'D-MM-y')
        const after = now.isAfter(str)
        if(after || reservation.payed=="true"){
            annul=false
        }
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="factures"  />
            <View style={styles.content_container}>
                {this.titleSection('PYEMENT')}
                <View style={styles.top}>
                    <View style={styles.topScan} >
                        {reservation.payed ?
                        <Icon name='checkcircleo' size={25}  type='antdesign'/> : 
                        <Icon name='exclamationcircleo' size={25}  type='antdesign'/> }
                        <View style={styles.topInsctructions}>
                            <Text>Réservation {reservation.nom}</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    {reservation.payed ?
                    <View style={styles.topInfo}>
                        <Text style={{fontSize:12,textAlign:'center',color:'#cececece'}}>Cette réservation à été payée</Text>
                    </View> : 
                    <TouchableOpacity style={styles.topInfo1} onPress={()=> this.payer(reservation)}>
                    <Text style={{fontSize:12,textAlign:'center',color:'#fff'}}>Payer la reservation</Text>
                    </TouchableOpacity> }
                </View>
                {this.titleSection('INFORMATIONS DE LA RESERVATION')}
                <View style={styles.bottom}>
                    <View style={styles.infosec}>
                        <Icon name='calendar' size={25}  type='antdesign'/> 
                        <View style={styles.topInsctructions}>
                            <Text>Début : {reservation.start_date}</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.infosec}>
                        <Icon name='clockcircleo' size={25}  type='antdesign'/> 
                        <View style={styles.topInsctructions}>
                            <Text>Fin : {reservation.end_date}</Text>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.infosec}>
                        <Icon name='dollar-bill' size={25}  type='foundation'/> 
                        <View style={styles.topInsctructions}>
                            <Text>Total : {reservation.total}DH</Text>
                        </View>
                    </View>
                </View>
                {this.titleSection('ACTIONS')}
                <View style={styles.bottom1}>
                    {annul ?
                    <TouchableOpacity style={[styles.infosec,{backgroundColor:'#f2bfbf'}]} onPress={()=> this.supprimer(reservation)}>
                        <Icon name='closecircleo' size={25}  type='antdesign'/> 
                        <View style={styles.topInsctructions}>
                            <Text>Annuler la réservation</Text>
                        </View>
                    </TouchableOpacity> : 
                   <View style={[styles.infosec,{backgroundColor:'#f2bfbf'}]}>
                   <Icon name='closecircleo' size={25}  type='antdesign'/> 
                   <View style={styles.topInsctructions}>
                       <Text>Reservation non annulable</Text>
                   </View>
                    </View> }
                </View>
            </View>          
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    content_container:{
        flex:1
    },
    top:{
        flex:1,
        backgroundColor:'#fff'
    },
    bottom:{
        flex:2,
        backgroundColor:'#fff'

    },
    bottom1:{
        flex:1,

    },
    topScan:{
        flex:4,
        paddingHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center'
    },
    infosec:{
        height:45,
        paddingHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8
    },
    topInfo:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    topInfo1:{
        flex:2,
        justifyContent:'center',
        backgroundColor:'#bdefce'
    },
    divider:{
        backgroundColor:'#eaeaea'
    },
    topInsctructions:{
        paddingLeft:'5%',
        justifyContent:'space-between'
    }

});
export default FactureScreen
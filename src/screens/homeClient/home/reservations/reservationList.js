

import React from 'react'
import {View,Image , Text, StyleSheet, FlatList , TouchableOpacity } from 'react-native'
import {Divider, Icon} from 'react-native-elements'
import Header from '../../../../shared/header'
import ScanItem from './scanItemComonenet'
import * as firebase from 'firebase'

 

class ReservationListScreen extends React.Component{
    constructor(){
        super();
        this.state={reservation:[]}
    }
    titleSection = (title) => {
        return(
            <View style={{height:50,paddingLeft:'5%',justifyContent:'center'}}>
                <Text style={{color:'#bfbfbf', fontSize:12}}> • {title}</Text>
            </View>
        )
    }
    navAction = (item) => {
        this.props.navigation.navigate("FactureScreen",{reservation:item})
    }
    getReservations= (user) => {
        const ref = firebase.database().ref().child('reservations')
        const query = ref.orderByChild('user').equalTo(user)
        query.on('value', doc => {
            var reservation = [];
            doc.forEach(function(snap) {
                var item = snap.val();
                item.key = snap.key;
                const rf=firebase.database().ref().child('cars').orderByKey().equalTo(item.car)
                const qr = rf.on('value', dc => {
                    dc.forEach(function(snp){
                        item.image=snp.val().image
                        item.nom=snp.val().nom
                    })
                    
                })
                reservation.push(item);
            });
            this.setState({reservation:reservation})
        })
    }
    componentDidMount(){
        const user = firebase.auth().currentUser.uid
        this.getReservations(user)
    }
    render(){
        return ( 
            <View style={styles.container}>
                <Header title='réservations' type='main' navigation={this.props.navigation} />
                {this.titleSection('OUTILS')}
                <View style={styles.top}>
                    <TouchableOpacity style={styles.topScan} onPress={()=> this.props.navigation.navigate("HomeStack")}>
                        <Icon name='carryout' size={40}  type='antdesign'/>
                        <View style={styles.topInsctructions}>
                            <Text>Effectuer une nouvelle reservation</Text>
                            <Text style={{fontSize:11,color:'#bcbcbc'}}>Réserver votre voitre préferée facilemetn</Text>
                        </View>
                    </TouchableOpacity>
                    <Divider style={styles.divider} />
                    <View style={styles.topInfo}>
                        <Text style={{fontSize:12,textAlign:'center',color:'#bcbcbc'}}>La réservation est rapide et sécurisée</Text>
                    </View>
                </View>
                {this.titleSection('VOS ACTIVITES RECENTES')}
                <View style={styles.bottom}>
                    <FlatList 
                        data={this.state.reservation}
                        keyExtractor={(item) => item.key.toString()}
                        ItemSeparatorComponent={()=> <Divider style={styles.divider}/>}
                        renderItem = {({item}) => {
                            return (
                                <ScanItem item={item} action={()=>this.navAction(item)}/>
                            )
                        }}
                    />
                </View>
            </View>        
          ); 
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top:{
        flex:1,
        backgroundColor:'#fff'
    },
    bottom:{
        flex:3,
        backgroundColor:'#fff'

    },
    topScan:{
        flex:4,
        paddingHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center'
    },
    topInfo:{
        flex:2,
        justifyContent:'center'
    },
    divider:{
        backgroundColor:'#eaeaea'
    },
    topInsctructions:{
        paddingLeft:'5%',
        justifyContent:'space-between'
    }
   
});
export default ReservationListScreen
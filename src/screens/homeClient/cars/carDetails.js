import React from 'react'
import { Button } from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground,Image, FlatList} from 'react-native'
import {Overlay} from 'react-native-elements'
import ReserveButton from '../../../shared/reserveButton'

const carImages=["https://i.ibb.co/SyPLGkW/clio1.png","https://i.ibb.co/rvxf4BZ/clio2.jpg","https://i.ibb.co/K7J3jbM/clio3.jpg","https://i.ibb.co/6nywbgr/clio4.jpg"]
const carReviews=["Trés bonne voiture","Voiture en bonne etat","je n'ai aucun regret","Pas mal !!","Consomme beaucoup"]
class CarDetailScreen extends React.Component{
    constructor(){
        super();
        this.state={isVisible:false,chosenUri:""}
    }
    handleModalBackDrop= () => {
        this.setState({isVisible:false})
    }
    renderModal = () => {
        return(
            <Overlay overlayStyle={styles.overlayStyle} onBackdropPress={this.handleModalBackDrop} isVisible={this.state.isVisible}>
                <Image source={{uri:this.state.chosenUri}} resizeMode="contain" style={{width:"100%",aspectRatio:1}}/>
            </Overlay>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.top} resizeMode='cover' source={require('../../../../assets/carimages/clio3.jpg')}>
                    <View style={styles.insideBackground}>
                        <View style={styles.topActions}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Text style={styles.backButtonStyle}> &#60; List des voitures</Text>
                            </TouchableOpacity>
                            <ReserveButton />
                        </View>
                        <View style={styles.topEmpty}></View>
                        <View style={styles.topInfo}>
                            <Text style={styles.topInfoText}>Clio 4 Diesel</Text>
                            <Text style={styles.topInfoText}>Prix : 250DH/jour</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.middle}>
                    <FlatList 
                        data={carImages}
                        horizontal={true}
                        keyExtractor={(item,index)=> index.toString()}
                        renderItem={({item})=> {
                            return(
                                <TouchableOpacity style={styles.imageComponentContainer} onPress={()=> this.setState({isVisible:true,chosenUri:item})}>
                                    <Image source={{uri:item}} style={{width:"100%",height:"100%"}} resizeMode='cover' />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <View style={styles.bottom}>
                    <Text style={{fontSize:16,marginBottom:5}}>Opinions</Text>
                    <FlatList 
                        data={carReviews}
                        keyExtractor={(item,index)=> index.toString()}
                        renderItem={({item})=> {
                            return(
                                <View style={styles.reviewContainer}>
                                    <View style={styles.reviewAvatarContainer}>
                                        <Image style={{width:"80%"}} resizeMode='contain' source={require('../../../../assets/avatar2.png')}/>
                                    </View>
                                    <View style={styles.reviewTextContainer}>
                                        <Text style={styles.reviewText}>{item}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
                {this.renderModal()}
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#fff'
    },
    top:{
        flex:3
    },
    middle:{
        flex:1,
        paddingHorizontal:"5%",
        justifyContent:'center'
    },
    bottom:{
        flex:3,
        paddingHorizontal:"5%"

    },
    insideBackground:{
        flex:1,
        backgroundColor:'rgba(132, 129, 129, 0.4)',
    },
    topActions:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:'5%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    topInfo:{
        flex:1,
        paddingLeft:'10%',
        justifyContent:'center'
    },
    topEmpty:{
        flex:1
    },
    topInfoText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:23
    },
    backButtonStyle:{
        color:'#fff',
    },
    imageComponentContainer:{
        height:"80%",
        aspectRatio:1,
        alignSelf:'center',
        marginRight:10,
        borderWidth:1,
        borderColor:'rgba(132, 129, 129, 0.7)'
    },
    overlayStyle:{
        width:"95%",
        alignItems:'center'
    },
    reviewContainer:{
        flexDirection:'row',
        width:"100%",
        height:50,
        marginBottom:5
    },
    reviewAvatarContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    reviewTextContainer:{
        flex:4,
        paddingLeft:5,
        justifyContent:'center'

    },
    reviewText:{
        fontSize:12
    }

});
export default CarDetailScreen
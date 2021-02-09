import React from 'react'
import {View, ActivityIndicator,StyleSheet} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import * as firebase from 'firebase'
import { cos } from 'react-native-reanimated';


export default class Loading extends React.Component{
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            let routeName="AuthenticationStack"
            if(user!=null) routeName = user.displayName=="client" ? "HomeDrawer" : "HomeAgenceDrawer"
            this.props.navigation.dispatch(CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: routeName }
                  ],
                })
              );
        })
      }
      
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#000'/>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
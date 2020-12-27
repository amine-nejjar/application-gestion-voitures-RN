import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


class AuthenticationScreen extends React.Component{
    constructor(){
        super()
        this.state={isLoading:false}
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Authentication Page</Text>                    
            </View>
          );
        }
    }
const styles = StyleSheet.create({

    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    },
});
export default AuthenticationScreen
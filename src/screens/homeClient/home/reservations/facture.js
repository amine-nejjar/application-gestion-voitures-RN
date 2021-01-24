import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Header from '../../../../shared/header'

class FactureScreen extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.container}>
            <Header navigation={this.props.navigation} title="factures"  />
            <Text>facture screen</Text>            
            </View>
            
          );
        }
    }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
    },

});
export default FactureScreen
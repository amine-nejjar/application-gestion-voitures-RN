import React from 'react'
import {Button} from 'react-native-elements'

export default CostumButton= (props) => {
    return(
        <Button title={props.title} raised={true} loading={props.loading} buttonStyle={{backgroundColor:'#04e8b2',width:150}} onPress={()=>props.action()}/>
    )
}

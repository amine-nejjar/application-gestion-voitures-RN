import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from './help'
const Stack = createStackNavigator();

function HelpStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HelpScreen" component={HelpScreen} />

        </Stack.Navigator>
    )    
}
export default HelpStack
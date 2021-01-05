import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './authentication'
import RegisterClientScreen from './registerClient'
import RegisterAgenceScreen from './registerAgence'
import RegisterTypeScreen from './registerType'
const Stack = createStackNavigator();

function AuthenticationStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Authentication">
            <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
            <Stack.Screen name="RegisterTypeScreen" component={RegisterTypeScreen} />
            <Stack.Screen name="RegisterClientScreen" component={RegisterClientScreen} />
            <Stack.Screen name="RegisterAgenceScreen" component={RegisterAgenceScreen} />
        </Stack.Navigator>
    )    
}
export default AuthenticationStack
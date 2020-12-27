import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './authentication'
import RegisterScreen from './register'

const Stack = createStackNavigator();

function AuthenticationStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Authentication">
            <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    )    
}
export default AuthenticationStack
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './authentication'
import RegisterScreen from './register'
import RegisterTypeScreen from './registerType'

const Stack = createStackNavigator();

function AuthenticationStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Authentication">
            <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="RegisterTypeScreen" component={RegisterTypeScreen} />
        </Stack.Navigator>
    )    
}
export default AuthenticationStack
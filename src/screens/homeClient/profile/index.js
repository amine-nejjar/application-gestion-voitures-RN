import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './profile'
import ProfileUpdate from './profileUpdate'
const Stack = createStackNavigator();

function ProfileStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Authentication">
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} />
        </Stack.Navigator>
    )    
}
export default ProfileStack
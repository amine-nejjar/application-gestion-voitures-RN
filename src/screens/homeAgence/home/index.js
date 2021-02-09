import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home'
import AddCar from './AddCar'

const Stack = createStackNavigator();

function HomeStackAgence(){
    return(
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="home">
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="AddCar" component={AddCar} />
        </Stack.Navigator>
    )    
}
export default HomeStackAgence
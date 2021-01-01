import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home'
import ReservationFormScreen from './reservationForm'
import CarDetailSreen from './carDetails'

const Stack = createStackNavigator();

function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Authentication">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ReservationFormScreen" component={ReservationFormScreen} />
            <Stack.Screen name="CarDetailSreen" component={CarDetailSreen} />
        </Stack.Navigator>
    )    
}
export default HomeStack
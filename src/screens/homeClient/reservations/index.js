import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FactureScreen from './facture'
import ReservationListScreen from './reservationList'
const Stack = createStackNavigator();

function ReservationStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Authentication">
            <Stack.Screen name="ReservationListScreen" component={ReservationListScreen} />
            <Stack.Screen name="FactureScreen" component={FactureScreen} />

        </Stack.Navigator>
    )    
}
export default ReservationStack
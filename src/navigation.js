import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './screens/authentication'
import HomeScreen from './screens/home/home'
const Stack = createStackNavigator();


class MyNavigator extends React.Component{
    
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="AuthenticationStack" component={AuthenticationStack}/>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}
export default MyNavigator
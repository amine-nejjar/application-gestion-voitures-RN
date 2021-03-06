import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './screens/authentication'
import HomeDrawer from './screens/homeClient'
import HomeAgenceDrawer from './screens/homeAgence'
import Loading from './loading'
const Stack = createStackNavigator();


class MyNavigator extends React.Component{
    
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="Loading" component={Loading}/>    
                    <Stack.Screen name="AuthenticationStack" component={AuthenticationStack}/>
                    <Stack.Screen name="HomeDrawer" component={HomeDrawer}/>
                    <Stack.Screen name="HomeAgenceDrawer" component={HomeAgenceDrawer}/>
                 </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}
export default MyNavigator
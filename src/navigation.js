import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationStack from './screens/authentication'
import HomeTabs from './screens/homeClient'
const Stack = createStackNavigator();


class MyNavigator extends React.Component{
    
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="AuthenticationStack" component={AuthenticationStack}/>
                    <Stack.Screen name="HomeTabs" component={HomeTabs}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}
export default MyNavigator
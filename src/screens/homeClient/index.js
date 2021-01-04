import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import HomeStack from './home'
import ProfileStack from './profile'
import ReservationStack from './reservations'
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarLabel: 'accueil',tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="antdesign" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{tabBarLabel: 'accueil',tabBarIcon: ({ color, size }) => (
            <Icon name="user" type="antdesign" color={color} size={size} />
          )
        }}/>
      <Tab.Screen name="ReservationStack" component={ReservationStack} options={{tabBarLabel: 'profile',tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" type="antdesign" color={color} size={size} />
          )
        }}/>
    </Tab.Navigator>
  );
}
export default HomeTabs
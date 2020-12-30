import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './home'
import ProfileStack from './profile'
import ReservationStack from './reservations'
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="ReservationStack" component={ReservationStack} />
    </Tab.Navigator>
  );
}
export default HomeTabs
import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import {Alert} from 'react-native'
import HomeTabs from './home'
import * as firebase from 'firebase'


const Drawer = createDrawerNavigator();

async function signOutUser(){
  try {
      await firebase.auth().signOut();
      navigate('Loading');
  } catch (e) {
      console.log(e);
  }
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Se déconnecter" onPress={() =>
        Alert.alert(
          'Déconnexion',
          'êtes-vous sûr de vouloir vous déconnecter ?',
          [
          {
              text: 'Annuler',
              style: 'cancel'
            },
            { text: 'déconnexion', onPress: signOutUser}
          ],
          { cancelable: false }
        )
      } />
    </DrawerContentScrollView>
  );
}


export default function HomeDrawer() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomeTabs" component={HomeTabs} options={{title:'Accueil'}}/>
      </Drawer.Navigator>
  );
}
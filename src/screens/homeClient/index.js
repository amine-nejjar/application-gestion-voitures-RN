import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import {Alert,View,Text,Image,Dimensions} from 'react-native'
import HomeTabs from './home'
import HelpStack from './help'
import * as firebase from 'firebase'
const { width, height } = Dimensions.get('window');


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
      <View style={{height: 80,alignItems:'center', justifyContent: 'center'}}>
      <Image resizeMode='contain' source={require('../../../assets/logo.png')} style={{height:"80%" }} />

      </View>
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
        <Drawer.Screen name="HelpStack" component={HelpStack} options={{title:'Help'}}/>
      </Drawer.Navigator>
  );
}
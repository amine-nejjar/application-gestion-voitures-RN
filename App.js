import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation'
import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBU_wCC5vKkX2ShaDj3gX1XYJBvNnaXR-Y",
  authDomain: "gestionvoitures-adb53.firebaseapp.com",
  databaseURL: "https://gestionvoitures-adb53-default-rtdb.firebaseio.com",
  projectId: "gestionvoitures-adb53",
  storageBucket: "gestionvoitures-adb53.appspot.com",
  messagingSenderId: "761488678831",
  appId: "1:761488678831:web:f995bb231d5d5c7446d95a",
  measurementId: "G-3FY2NB4F28"
};
// Initialize Firebase
if(firebase.apps.length==0){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <Navigation/> 
  ); 
}


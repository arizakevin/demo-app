import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'; 
import { store } from './redux/app-redux';
import * as firebase from 'firebase';
import TestScreen from './screens/TestScreen';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrWl3EPTuhx49SyuA8p0qK2x2Mfq27IiU",
  authDomain: "fir-app-16480.firebaseapp.com",
  projectId: "fir-app-16480",
  storageBucket: "fir-app-16480.appspot.com",
  messagingSenderId: "506124915256",
  appId: "1:506124915256:web:5e6b66dfa736c2a4158ccd",
  measurementId: "G-4EE5PM9B2S",
  databaseURL: "https://fir-app-16480-default-rtdb.firebaseio.com/"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TestScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

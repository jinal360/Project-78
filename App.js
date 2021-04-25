import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import SignUpLoginScreen from './screen/SignUpLoginScreen'
import db from './config';
import firebase from 'firebase';

export default class App extends React.Component {
  render(){
    return(
    <View>
<SignUpLoginScreen/>
    </View>
     

      )
        }
}

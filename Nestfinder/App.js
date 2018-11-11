import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BotNavigator} from './Router/Router'

export default class App extends Component{
  render(){
    return (
      <BotNavigator />
    );
  }
}



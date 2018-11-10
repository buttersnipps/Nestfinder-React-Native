import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './Screens/Explore';
import Saved from './Screens/Saved';
import Inbox  from './Screens/Inbox';
import Filter  from './Screens/Filter';


// This is the bottom navigator for the application
export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name ="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen : Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name ="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Inbox:{
    screen :  Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Icon name ="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Filter:{
    screen : Filter,
    navigationOptions:{
      tabBarLabel:'FILTER',
      tabBarIcon: ({tintColor}) => (
        <Icon name ="ios-options" color={tintColor} size={24} />
      )
    }
  }

},{
tabBarOptions:{
  activeTintColor:'red',
  inactiveTintColor:'gray',
  styles:{
    backgroundColor:'white',
    borderTopWidth:0,
    shadowOffset:{width:5,height:3},
    shadowColor:'black',
    shadowOpacity:0.5,
    elevation:5
  }
}

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

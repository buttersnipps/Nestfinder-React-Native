import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from '../Screens/Explore';
import Saved from '../Screens/Saved';
import Inbox  from '../Screens/Inbox';
import Filter  from '../Screens/Filter';
import ListView from '../Screens/ListView';
import HomeDetails from '../Screens/Homedetails';
import ApartmentList from '../Screens/ApartmentList';
import FilterList from '../Screens/FilterList';

export const ExploreStack =  createStackNavigator({
  Explore:{
    screen: Explore,
  },
  HomeList:{
    screen : ListView,
  },
  HomeDetails : {
    screen : HomeDetails,
  },
  ApartmentDetails :{
    screen : ApartmentList
  },
  FilterList:{
    screen : FilterList
  },
  Saved:{
    screen : Saved
  }
})

// This is the bottom navigator for the application
export const BotNavigator =  createBottomTabNavigator({
    Explore:{
      screen: ExploreStack,
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
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  home,
  homeActive,
  search,
  searchActive,
  add,
  addActive,
  activity,
  activityActive,
  profile,
  profileActive,
} from '../../assets/homepage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {router} from '../utils/constants';
import Homepage from '../../screens/Homepage';
import Search from '../../screens/Search';
import AddImage from '../../screens/AddImage';
import Activity from '../../screens/Activity';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === router.Home) {
              iconName = focused ? homeActive : home;
            } else if (route.name === router.Search) {
              iconName = focused ? searchActive : search;
            } else if (route.name === router.AddImage) {
              iconName = focused ? addActive : add;
            } else if (route.name === router.Activity) {
              iconName = focused ? activityActive : activity;
            } else if (route.name === router.Profile) {
              iconName = focused ? profileActive : profile;
            }

            return (
              <Image
                source={iconName}
                style={{height: 50, width: 50, marginTop: 16}}
              />
            );
          },
        })}>
        <Tab.Screen
          name={router.Home}
          component={Homepage}
          options={{tabBarLabel: ''}}
        />
        <Tab.Screen
          name={router.Search}
          component={Search}
          options={{tabBarLabel: ''}}
        />
        <Tab.Screen
          name={router.AddImage}
          component={AddImage}
          options={{tabBarLabel: ''}}
        />
        <Tab.Screen
          name={router.Activity}
          component={Activity}
          options={{tabBarLabel: ''}}
        />
        <Tab.Screen
          name={router.Profile}
          component={Profile}
          options={{tabBarLabel: ''}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

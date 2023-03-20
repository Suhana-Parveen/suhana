import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingScreen from '../authentication/ListingScreen';
import MapScreen from '../authentication/MapScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
      },
    }}>
      <Tab.Screen name="Listing" component={ListingScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};

export default Home;

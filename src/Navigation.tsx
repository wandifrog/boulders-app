import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './components/BottomNavigation';
import HomeScreen from './screens/Home.screen';
import ListScreen from './screens/List.screen';
import OrderScreen from './screens/Order.screen';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="List" component={ListScreen} />
        <RootStack.Screen name="Order" component={OrderScreen} />
      </RootStack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

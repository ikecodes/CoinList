import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import CoinDetail from '../screens/Home/CoinDetail';
import {RootStackParamList} from '../types';

export default function Route() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CoinDetail" component={CoinDetail} />
    </Stack.Navigator>
  );
}

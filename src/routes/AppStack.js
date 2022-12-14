import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../views';
import {RouteName} from '../constants';
const Stack = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteName.DASHBOARD} component={HomeScreen} />
    </Stack.Navigator>
  );
};

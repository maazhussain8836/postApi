// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import FlatListData from './FlatListData';
import Map from './Map';
import GetApi from './GetApi';
import Practice from './Practice';
import Practice2 from './Practice2';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FlatListData" component={FlatListData} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="GetApi" component={GetApi} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="Practice2" component={Practice2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
// Libraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Types
import {RootStackParams} from '@/types';
// Components
import Home from '@/views/home';
import detail from '@/views/detail';

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle: {
    color: '#FFF',
  },
};

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgba(7,26,93,255)',
    background: '#ffffff', // Add background color
    card: '#ffffff', // Add card color
    text: '#ffffff', // Add text color
    border: '#000000', // Add border color
    notification: 'rgba(7,26,93,255)', // Add notification color
  },
};

const Routes = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={routeScreenDefaultOptions}
      />
      <Stack.Screen
        name="Detail"
        component={detail}
        options={routeScreenDefaultOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

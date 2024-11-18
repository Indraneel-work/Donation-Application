import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {Routes} from './Routes';
import React from 'react';
import Home from '../screens/Home/Home';
import globalStyle from '../assets/styles/globalStyle';
import SingleDonationItemScreen from '../screens/SingleDonationItemScreen/SingleDonationItemScreen';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      style={globalStyle.backgroundWhite}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () =>{
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      style={globalStyle.backgroundWhite}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItemScreen}
        component={SingleDonationItemScreen}
      />
    </Stack.Navigator>
  );
};

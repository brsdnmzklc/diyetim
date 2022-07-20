import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from './src/screens/auth/SigninScreen/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen/SignupScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            title: 'diyetim',
            headerStyle: {
              backgroundColor: '#07635D',
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            title: 'diyetim',
            headerStyle: {
              backgroundColor: '#07635D',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

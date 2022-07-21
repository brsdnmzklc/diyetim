import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SigninScreen from './src/screens/auth/SigninScreen/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen/SignupScreen';
import UserInfo from './src/screens/auth/UserInfo/UserInfo';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);

  console.log(userSession);
  return (
    <NavigationContainer>
      {userSession ? (
        <>
          <Tab.Navigator>
            <Tab.Screen
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
              name="Home"
              component={HomeScreen}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
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
            <Stack.Screen
              name="UserInfo"
              component={UserInfo}
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
        </>
      )}
    </NavigationContainer>
  );
};

export default Router;

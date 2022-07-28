import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppProvider from './src/context/Provider';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import SigninScreen from './src/screens/auth/SigninScreen/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen/SignupScreen';
import UserInfo from './src/screens/UserInfo/UserInfo';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import MealDetailScreen from './src/screens/MealDetailScreen/MealDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(userSession => {
      setUserSession(userSession);
    });
  }, []);
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={HomeScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {userSession ? (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon name="home" size={30} color="#7209b7" />
                ) : (
                  <Icon name="home" size={30} color="#e0c3fc" />
                ),
              tabBarShowLabel: false,
            }}
            name={'Home'}
            component={HomeStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Icon name="account" size={30} color="#7209b7" />
                ) : (
                  <Icon name="account" size={30} color="#e0c3fc" />
                ),
              tabBarShowLabel: false,
            }}
            name={'Profile'}
            component={ProfileScreen}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

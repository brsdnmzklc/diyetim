import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './HomeScreen.style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import DailyCaloriesCard from '../../cards/DailyCaloriesCard/DailyCalories';
const HomeScreen = () => {
  const [userData, setUserData] = useState({});
  const uid = auth().currentUser.uid;
  useEffect(() => {
    database()
      .ref(`users/${uid}/userInfo`)
      .once('value')
      .then(snapshot => {
        setUserData(snapshot.val());
      });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
      <DailyCaloriesCard userData={userData} />
    </View>
  );
};

export default HomeScreen;

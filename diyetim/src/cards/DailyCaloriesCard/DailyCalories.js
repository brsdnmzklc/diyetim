import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './DailyCaloriesCard.style';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
const DailyCaloriesCard = ({userData}) => {
  const {age, gender, dailyActivityLevel, height, weight} = userData;
  const [dailyCalories, setDailyCalories] = useState(0);
  const round = num => {
    return Math.round(num);
  };
  const fetchDailyCalories = async () => {
    try {
      const response = await axios.get(
        'https://mega-fitness-calculator1.p.rapidapi.com/tdee',
        {
          params: {
            weight: weight,
            height: height,
            activitylevel: dailyActivityLevel,
            age: age,
            gender: gender,
          },
          headers: {
            'X-RapidAPI-Key':
              '64a3952bf1msh8aa6bff39ef506ep1af228jsn17fc392a395e',
            'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com',
          },
        },
      );
      const roundedNum = round(response.data.info.tdee);
      setDailyCalories(roundedNum);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dailyCalories);
  useEffect(() => {
    fetchDailyCalories();
  }, [userData]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daily Calroies</Text>
      <Text style={styles.header}>{dailyCalories}</Text>
      <Button title="fetchDailyCalories" onPress={() => auth().signOut()} />
    </View>
  );
};
export default DailyCaloriesCard;

import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header/Header';
import CaloriesDetail from '../../components/CaloriesDetail/CaloriesDetail';
import MealCard from '../../cards/MealCard/MealCard';
import {useSelector} from 'react-redux';
const HomeScreen = ({navigation}) => {
  const [info, setInfo] = useState({});

  const [loading, setLoading] = useState(false);
  const breakfastCal = useSelector(s => s.breakfastCal);
  const lunchCal = useSelector(s => s.lunchCal);
  const dinnerCal = useSelector(s => s.dinnerCal);
  const url = 'https://fitness-calculator.p.rapidapi.com/dailycalorie';
  const headers = {
    'X-RapidAPI-Key': 'ee1fc3630dmsh7f2bcd7635793e8p15f9d0jsnbd8da99d320a',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  };
  const params = {
    age: info.age,
    gender: info.gender,
    height: info.height,
    weight: info.weight,
    activitylevel: info.activityLevel,
  };
  useEffect(() => {
    setLoading(true);
    database()
      .ref(`users/${auth().currentUser.uid}/`)
      .once('value')
      .then(snapshot => {
        setInfo(snapshot.val().userInfo);
        setLoading(false);
      });
  }, []);
  console.log(info);
  console.log(useSelector(s => s.lunchCal));
  const {data, error} = useFetch(url, headers, params, info);
  console.log(error);
  return (
    <View style={{flex: 1, backgroundColor: '#7209b7'}}>
      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <>
          <Header name={info.name} />
          <CaloriesDetail data={data} />
          <ScrollView>
            <MealCard
              data={data}
              title="Kahvaltı"
              navigation={navigation}
              cal={breakfastCal}
            />
            <MealCard
              data={data}
              title="Öğle Yemeği"
              navigation={navigation}
              cal={lunchCal}
            />
            <MealCard
              data={data}
              title="Akşam Yemeği"
              navigation={navigation}
              cal={dinnerCal}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default HomeScreen;

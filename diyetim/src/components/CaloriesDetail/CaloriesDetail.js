import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './CaloriesDetail.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux/';
const CaloriesDetail = ({data}) => {
  const breakfastCal = useSelector(s => s.breakfastCal);
  const lunchCal = useSelector(s => s.lunchCal);
  const dinnerCal = useSelector(s => s.dinnerCal);
  const totalCal = breakfastCal + lunchCal + dinnerCal;
  return (
    <View style={styles.container}>
      {data ? (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.text}>{Math.round(totalCal)}</Text>
            <Text style={styles.text}>Alınan</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              {data.data.goals['Weight loss'].calory}
            </Text>
            <Text style={styles.text}>Günlük Kalori İhtiyacı</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.text}>
              {Math.round(data.data.goals['Weight loss'].calory - totalCal)}
            </Text>
            <Text style={styles.text}>Kalan</Text>
          </View>
        </>
      ) : (
        <ActivityIndicator size={50} />
      )}
    </View>
  );
};

export default CaloriesDetail;

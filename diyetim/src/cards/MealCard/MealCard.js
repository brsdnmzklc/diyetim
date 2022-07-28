import React, {useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './MealCard.style';
const MealCard = ({title, data, navigation, cal}) => {
  const [totalCal, setTotalCal] = useState(0);
  const onPressHandler = () => {
    navigation.navigate('MealDetail', {data, title});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      {data ? (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.text}>Alınan</Text>
            <Text style={styles.text}>Önerilen</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>{Math.round(cal)}</Text>
            <Text style={styles.subText}>
              {Math.round(data.data.goals['Weight loss'].calory / 3)}
            </Text>
          </View>
        </>
      ) : (
        <ActivityIndicator size={50} />
      )}
    </TouchableOpacity>
  );
};

export default MealCard;

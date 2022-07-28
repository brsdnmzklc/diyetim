import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './MealDetailScreen.style';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import FoodCard from '../../cards/FoodCard/FoodCard';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
const MealDetailScreen = ({route}) => {
  const calories = route.params.data;
  const title = route.params.title;
  const uid = auth().currentUser.uid;
  const [isVisible, setVisible] = useState(false);
  const [list, setList] = useState([]);
  const [cal, setCal] = useState(0);
  const dispatch = useDispatch();
  const parsedMeal = () => {
    switch (title) {
      case 'Kahvaltı':
        return 'breakfast';
      case 'Öğle Yemeği':
        return 'lunch';
      case 'Akşam Yemeği':
        return 'dinner';
      default:
        break;
    }
  };

  const parseList = data => {
    if (data === null) {
      return;
    }
    return Object.keys(data).map(e => {
      return {
        id: e,
        content: data[e],
      };
    });
  };
  const meal = parsedMeal();
  useEffect(() => {
    database()
      .ref(`users/${uid}/foods/${meal}/`)
      .on('value', snapshot => {
        const parsedData = parseList(snapshot.val());
        if (parsedData !== undefined) {
          setCal(
            parsedData.reduce((acc, val) => {
              acc = acc + val.content.calories / val.content.y;
              return acc;
            }, 0),
          );
        }
        if (snapshot.val() === null) {
          setCal(0);
        }
        setList(parsedData);
      });
  }, []);
  useEffect(() => {
    dispatch({type: meal, payload: cal});
  }, [list]);
  const onPressHandler = () => {
    setVisible(!isVisible);
  };
  const removeFood = id => {
    setList(list.filter(e => e.id !== id));
    database().ref(`users/${uid}/foods/${meal}/${id}`).remove();
  };
  return (
    <View style={{backgroundColor: '#7209b7', flex: 1}}>
      <Modal isVisible={isVisible} onPress={onPressHandler} meal={meal} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>Alınan</Text>
          <Text style={styles.text}>Önerilen</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>{Math.round(cal)}</Text>
          <Text style={styles.subText}>
            {Math.round(calories.data.goals['Weight loss'].calory / 3)}
          </Text>
        </View>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <FoodCard
            label={item.content.label}
            calories={item.content.calories}
            digest={item.content.digest}
            y={item.content.y}
            id={item.id}
            icon="delete"
            onPress={removeFood}
          />
        )}
      />
      <Button style="primary" title="Besin Ekle" onPress={onPressHandler} />
    </View>
  );
};

export default MealDetailScreen;

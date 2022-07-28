import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Modal,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Modal.style';
import SearchBar from '../SearchBar/SearchBar';
import FoodCard from '../../cards/FoodCard/FoodCard';
import axios from 'axios';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Modals = ({isVisible, onPress, meal}) => {
  const [text, setText] = useState('');
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const uid = auth().currentUser.uid;
  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: text},
    headers: {
      'X-RapidAPI-Key': 'ee1fc3630dmsh7f2bcd7635793e8p15f9d0jsnbd8da99d320a',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
    },
  };
  const parsedMeal = () => {
    switch (meal) {
      case 'Kahvaltı':
        return 'ADD_BREAKFAST';
      case 'Öğle Yemeği':
        return 'ADD_LUNCH';
      case 'Akşam Yemeği':
        return 'ADD_DINNER';
      default:
        break;
    }
  };

  const searchFood = () => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setFoods(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchFood();
  }, [text]);
  const onPressHandler = (label, calories, digest, y) => {
    database().ref(`users/${uid}/foods/${meal}/`).push({
      label: label,
      calories: calories,
      digest: digest,
      y: y,
    });
  };
  return (
    <Modal visible={isVisible}>
      <View style={{backgroundColor: '#7209b7', flex: 1}}>
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <Icon name="close-circle" size={35} color="#ffff" />
        </TouchableOpacity>
        <SearchBar onChange={setText} />
        {loading ? (
          <ActivityIndicator size={50} color="#ffff" />
        ) : (
          <FlatList
            data={foods.hits}
            renderItem={({item}) => (
              <FoodCard
                label={item.recipe.label}
                calories={item.recipe.calories}
                digest={item.recipe.digest}
                y={item.recipe.yield}
                icon="plus-circle-outline"
                onPress={onPressHandler}
              />
            )}
          />
        )}
      </View>
    </Modal>
  );
};
export default Modals;

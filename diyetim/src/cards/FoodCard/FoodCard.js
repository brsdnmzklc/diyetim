import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FoodCard.style';

const FoodCard = ({label, calories, digest, icon, onPress, y, id}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 200}}>
        <Text style={styles.title}>{label}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.text}>{Math.round(calories / y)} kcal</Text>
          <Text style={styles.text}>
            protein {Math.round(digest[2].total / y)} g
          </Text>
          <Text style={styles.text}>
            yağ {Math.round(digest[0].total / y)} g
          </Text>
          <Text style={styles.text}>
            karb {Math.round(digest[1].total / y)} g
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          if (id !== null) {
            onPress(id);
          }
          onPress(label, calories, digest, y);
        }}>
        <Icon name={icon} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;

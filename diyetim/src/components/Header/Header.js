import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Header.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Header = ({name}) => {
  const uid = auth().currentUser.uid;
  const [uri, setUri] = useState(null);
  let today = new Date();
  let day = '';
  useEffect(() => {
    database()
      .ref(`users/${uid}/userInfo/profilePic`)
      .on('value', snapshot => {
        snapshot.val();
        setUri(snapshot.val());
      });
  }, []);
  switch (today.getDay()) {
    case 0:
      day = 'Pazar';
      break;
    case 1:
      day = 'Pazartesi';
      break;
    case 2:
      day = 'Salı';
      break;
    case 3:
      day = 'Çarşamba';
      break;
    case 4:
      day = 'Perşembe';
      break;
    case 5:
      day = 'Cuma';
      break;
    case 6:
      day = 'Cumartesi';
      break;

    default:
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.name}>Merhaba {name}</Text>
      </View>
      <View style={styles.imageContainer}>
        {uri ? (
          <Image source={{uri: uri}} style={styles.image} />
        ) : (
          <Image source={require('../../assets/pp.jpg')} style={styles.image} />
        )}
      </View>
    </View>
  );
};

export default Header;

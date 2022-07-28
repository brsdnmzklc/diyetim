import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import styles from './ProfileScreen.style';
import EditInfo from '../../components/EditInfo/EditInfo';
import Button from '../../components/Button/Button';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen = () => {
  const uid = auth().currentUser.uid;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const options = {
    mediaType: 'photo',
    maxWidth: 200,
    maxHeight: 200,
    quality: 0.5,
    saveToPhotos: true,
  };
  const imagePick = () => {
    launchImageLibrary(options, res => {
      res.didCancel
        ? ''
        : database().ref(`users/${uid}/userInfo/`).update({
            profilePic: res.assets[0].uri,
          });
    });
  };
  useEffect(() => {
    database()
      .ref(`users/${uid}/userInfo/`)
      .on('value', snapshot => {
        snapshot.val();
        setUser(snapshot.val());
      });
  }, []);

  const onPressHandler = () => {
    database().ref(`users/${uid}/userInfo/`).update({
      name: name,
      age: age,
      height: height,
      weight: weight,
    });
  };
  console.log(loading);
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => auth().signOut()}>
            <Icon name="logout" size={35} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={imagePick} style={styles.imageContainer}>
            {user.profilePic ? (
              <Image source={{uri: user.profilePic}} style={styles.image} />
            ) : (
              <Image
                source={require('../../assets/pp.jpg')}
                style={styles.image}
              />
            )}
          </TouchableOpacity>
          <EditInfo title="İsim" placeholder={user.name} onChange={setName} />
          <EditInfo title="Yaş" placeholder={user.age} onChange={setAge} />
          <EditInfo
            title="Boy"
            placeholder={`${user.height} cm`}
            onChange={setHeight}
          />
          <EditInfo
            title="Kilo"
            placeholder={`${user.weight} kg`}
            onChange={setWeight}
          />

          <Button
            title="Güncelle"
            style="primary"
            onPress={onPressHandler}
            loading={loading}
          />
        </>
      ) : (
        <ActivityIndicator size={50} color="#ffff" />
      )}
    </View>
  );
};

export default ProfileScreen;

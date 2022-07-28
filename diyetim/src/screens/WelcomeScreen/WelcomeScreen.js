import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './WelcomeScreen.style';
import Button from '../../components/Button/Button';

const WelcomeScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('UserInfo');
  };
  const signIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <ImageBackground
      source={require('../../assets/welcome.jpg')}
      style={styles.imagebackground}>
      <Text style={styles.welcomeText}>Diyetim ile Sağlıklı Yaşa!</Text>
      <Button
        style="primary"
        title="Kaydol ve Başla"
        onPress={onPressHandler}
      />

      <Text style={styles.text}>Hesabın var mı? </Text>
      <TouchableOpacity onPress={signIn}>
        <Text style={styles.signinText}>Giriş</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WelcomeScreen;

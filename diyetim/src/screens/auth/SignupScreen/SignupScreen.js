import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './SignupScreen.style';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Şifreler Uyuşmuyor');

      return;
    }
    if (password === '' || email === '') {
      Alert.alert('Email veya Şifre Boş Bırakılamaz');

      return;
    }
    navigation.navigate('UserInfo', {
      email: email,
      password: password,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.footerText}> Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './SignupScreen.style';
import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Şifreler Uyuşmuyor');
    }
    if (password === '' || email === '') {
      Alert.alert('Email veya Şifre Boş Bırakılamaz');
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          {loading ? (
            <ActivityIndicator size={20} color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>SIGN UP</Text>
          )}
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

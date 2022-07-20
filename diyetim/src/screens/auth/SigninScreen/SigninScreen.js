import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './SigninScreen.style';
import auth from '@react-native-firebase/auth';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
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
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          {loading ? (
            <ActivityIndicator size={20} color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>SIGN IN</Text>
          )}
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerText}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;

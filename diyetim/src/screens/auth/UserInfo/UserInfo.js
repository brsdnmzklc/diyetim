import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import styles from './UserInfo.style';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const UserInfo = ({navigation, route}) => {
  const {email, password} = route.params;
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Gender');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dailyActivityLevel, setDailyActivityLevel] = useState('');

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      database().ref(`users/${auth().currentUser.uid}/userInfo`).set({
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        dailyActivityLevel: dailyActivityLevel,
      });
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
          placeholder="Age"
          style={styles.input}
          onChangeText={setAge}
        />
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <View style={styles.line} />
        <TextInput
          placeholder="Height"
          style={styles.input}
          onChangeText={setHeight}
        />
        <TextInput
          placeholder="Weight"
          style={styles.input}
          onChangeText={setWeight}
        />
        <Picker
          style={styles.input}
          selectedValue={dailyActivityLevel}
          onValueChange={(itemValue, itemIndex) =>
            setDailyActivityLevel(itemValue)
          }>
          <Picker.Item label="Daily Excercise" value="" />

          <Picker.Item label="Sedentary: little or no exercise" value="se" />
          <Picker.Item label="Exercise 1-3 times/wee" value="la" />
          <Picker.Item label="Exercise 4-5 times/week" value="ma" />
          <Picker.Item label="Intense exercise 6-7 times/week" value="va" />
          <Picker.Item
            label="Very intense exercise daily, or physical job"
            value="ea"
          />
        </Picker>
        <View style={styles.line} />
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

export default UserInfo;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './SignupScreen.style';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
const SignupScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const userData = route.params;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(mail, password);
      await database().ref(`users/${auth().currentUser.uid}/userInfo/`).set({
        name: name,
        age: userData.age,
        gender: userData.gender,
        weight: userData.weight,
        height: userData.height,
        activityLevel: userData.activityLevel,
      });
      dispatch({type: 'GET_USERINFO', payload: userData});
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="İsim" onChange={setName} />
      <Input placeholder="Email" onChange={setMail} />
      <Input placeholder="Şifre" onChange={setPassword} isSecure={true} />
      <Button
        title="Kayıt Ol"
        style="secondary"
        onPress={handleFormSubmit}
        loading={loading}
      />
      <Text>Zaten hesabın var mı?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

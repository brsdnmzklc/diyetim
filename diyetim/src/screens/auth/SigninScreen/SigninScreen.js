import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './SigninScreen.style';
import auth from '@react-native-firebase/auth';

const SigninScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnPress = async () => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Email" onChange={setEmail} />
      <Input placeholder="Şifre" onChange={setPassword} isSecure={true} />
      <Button
        title="Giriş Yap"
        style="secondary"
        onPress={handleOnPress}
        loading={loading}
      />
      <Text>Hesabın yok mu?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './UserInfo.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Pickers from '../../components/Picker/Picker';
const UserInfo = ({navigation}) => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const genderItems = [
    {label: 'Cinsiyet', value: ''},
    {label: 'Kadın', value: 'female'},
    {label: 'Erkek', value: 'male'},
  ];
  const activityItems = [
    {value: '', label: 'Günlük Aktivite'},
    {value: 'level_1', label: 'Hareketsiz'},
    {value: 'level_2', label: 'Hafif Aktif'},
    {value: 'level_3', label: 'Orta Derece Aktif'},
    {value: 'level_4', label: 'Çok Aktif'},
    {value: 'level_5', label: 'Ekstra Aktif'},
  ];



  const onPressHandler = () => {
    navigation.navigate('Signup', {
      gender,
      age,
      weight,
      height,
      activityLevel,
    });
  };

  return (
    <View style={styles.container}>
      <Pickers
        title="Cinsiyet"
        list={genderItems}
        value={gender}
        setValue={setGender}
      />
      <Input placeholder="Yaş" onChange={setAge} />
      <Input placeholder="Kilo" unit="KG" onChange={setWeight} />
      <Input placeholder="Boy" unit="CM" onChange={setHeight} />
      <Pickers
        title="Günlük Aktivite"
        list={activityItems}
        value={activityLevel}
        setValue={setActivityLevel}
      />
      <Text style={styles.text}>
        Bu bilgileri sana daha doğru ve sağlıklı öneriler sunmak için
        kullanacağız.
      </Text>
      <Button
        title="İlerle"
        style="secondary"
        onPress={onPressHandler}
        loading={false}
      />
    </View>
  );
};
export default UserInfo;

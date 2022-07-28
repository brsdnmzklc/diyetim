import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './EditInfo.style';
const EditInfo = ({title, placeholder, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={onChange}
      />
    </View>
  );
};

export default EditInfo;

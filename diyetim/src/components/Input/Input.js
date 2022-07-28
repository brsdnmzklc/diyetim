import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './Input.style';
const Input = ({placeholder, unit, onChange, isSecure}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{placeholder}</Text>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChange}
          secureTextEntry={isSecure}
        />
      </View>
      <Text>{unit}</Text>
    </View>
  );
};
export default Input;

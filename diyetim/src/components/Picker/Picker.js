import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './Picker.style';
const Pickers = ({list, title, value, setValue}) => {
  const pickers = () => {
    return list.map(element => {
      return (
        <Picker.Item
          label={element.label}
          value={element.value}
          key={element.key}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
        {pickers()}
      </Picker>
    </View>
  );
};
export default Pickers;

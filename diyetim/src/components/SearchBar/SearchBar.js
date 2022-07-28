import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SearchBar = ({onChange}) => {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={30} />
      <TextInput placeholder="Besin ara" onChangeText={onChange} />
    </View>
  );
};

export default SearchBar;

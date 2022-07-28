import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
const Button = ({title, style, onPress, loading}) => {
  if (style === 'primary') {
    return (
      <TouchableOpacity style={styles.primaryContainer} onPress={onPress}>
        <Text import style={styles.primaryTitle}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  if (style === 'secondary') {
    return (
      <TouchableOpacity style={styles.secondaryContainer} onPress={onPress}>
        {loading ? (
          <ActivityIndicator size={30} color="#fff" />
        ) : (
          <Text import style={styles.secondaryTitle}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
};
export default Button;

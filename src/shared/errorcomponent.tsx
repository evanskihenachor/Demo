import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ErrorComponent = () => {
  return (
    <View style={styles.centralizedContainer}>
      <Text>An Error Occured</Text>
    </View>
  );
};

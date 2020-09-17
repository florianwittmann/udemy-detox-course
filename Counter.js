import React from 'react';
import {Text} from 'react-native';

export const Counter = ({value, testID}) => (
  <Text testID={testID}>{value.toString()}</Text>
);

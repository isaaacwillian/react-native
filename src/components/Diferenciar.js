import {Text, Platform} from 'react-native';
import React from 'react';

export function Diferenciar() {
  if (Platform.OS === 'android') {
    return <Text>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text>iOS</Text>;
  } else {
    return <Text>Eita!</Text>;
  }
}

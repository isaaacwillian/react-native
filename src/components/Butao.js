import {View, Button} from 'react-native';
import React from 'react';

export default function Butao(props) {
  function press() {
    console.warn('Pressed');
  }
  return (
    <View>
      <Button title={props.title} onPress={press} />
    </View>
  );
}

import {View, Button, Text} from 'react-native';
import React, {useState} from 'react';

export default function Butao(props) {
  const [count, setCount] = useState(0);
  function press() {
    setCount(count + 1);
  }
  return (
    <View>
      <Button title={props.title} onPress={press} />
      <Text>{count}</Text>
    </View>
  );
}

import {Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Random({min, max}) {
  const delta = max - min;
  const random = Math.trunc(Math.random() * delta + min);
  return <Text style={style.random}>Random Number: {random}</Text>;
}
const style = StyleSheet.create({
  random: {
    fontSize: 30,
    color: 'black',
  },
});

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro';
import {One, Two, Three} from './components/Multi';

export default () => {
  console.warn('oi');
  return (
    <View style={style.App}>
      <Primeiro />
      <One />
      <Two />
      <Three />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    backgroundColor: '#F3AA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

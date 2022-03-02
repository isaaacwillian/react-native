import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro';
import {One, Two, Three} from './components/Multi';
import Random from './components/Random';

export default () => {
  return (
    <View style={style.App}>
      <Random min={1} max={10} />
      <Random min={1} max={10} />
      <Random min={1} max={10} />
      <Random min={1} max={10} />
      <Random min={1} max={10} />
      <Random min={1} max={10} />
      <Random min={1} max={10} />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    backgroundColor: '#F3F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
});

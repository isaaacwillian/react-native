import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Primeiro from './components/Primeiro';
import {One, Two, Three} from './components/Multi';
import Random from './components/Random';
import Butao from './components/Butao';
import {Diferenciar} from './components/Diferenciar';

export default () => {
  return (
    <View style={style.App}>
      <Diferenciar />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    backgroundColor: '#DED',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
});

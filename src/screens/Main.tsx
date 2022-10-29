/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
import React from 'react';
import Route from '../routes/Route';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Route />
    </SafeAreaView>
  );
};

export default Main;

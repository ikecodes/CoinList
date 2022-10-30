import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Route from '../routes/Route';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Route />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Main;

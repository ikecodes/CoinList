import {ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = () => {
  return <ActivityIndicator style={styles.loading} size="small" color="#ccc" />;
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    elevation: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Loader;

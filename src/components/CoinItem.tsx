import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import colors from '../config/colors';

interface ICoinItem {
  navigation: any;
  item: {
    pair: string;
    key: string;
    rate: string;
  };
}
const CoinItem: FC<ICoinItem> = ({navigation, item}) => {
  function handlePress() {
    navigation.navigate('CoinDetail');
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{item.pair}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 1,
    // marginVertical: 5,
  },
  text: {
    color: colors.gray,
    fontSize: 20,
  },
});

export default CoinItem;

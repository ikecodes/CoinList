import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import colors from '../config/colors';

interface ICoinItem {
  setSearch: Dispatch<SetStateAction<string>>;
  item: {
    pair: string;
    key: string;
    rate: number;
  };
  navigation: any;
}
const CoinItem: FC<ICoinItem> = ({navigation, item, setSearch}) => {
  async function handlePress() {
    navigation.navigate('CoinDetail', {
      pair: item.pair as string,
      rate: item.rate as number,
    });
    setSearch('');
  }
  return (
    <TouchableOpacity
      testID="coin-item"
      onPress={handlePress}
      style={styles.container}>
      <Text style={styles.text}>{item.pair}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 16,
    marginVertical: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  text: {
    color: colors.gray,
    fontSize: 15,
  },
});

export default CoinItem;

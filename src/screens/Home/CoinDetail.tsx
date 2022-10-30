import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import {RootStackParamList} from '../../types';
import {StackScreenProps} from '@react-navigation/stack';

type CoinDetailScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
const CoinDetail: FC<CoinDetailScreenProps> = props => {
  function handleBack() {
    props.navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
          <Icon name="chevron-back" size={35} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.pairs}>BTC</Text>
        <Text style={styles.rate}>17777.7777</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    backgroundColor: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  pairs: {
    color: colors.white,
    fontSize: 50,
  },
  rate: {
    color: colors.secondary,
    fontSize: 30,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
export default CoinDetail;

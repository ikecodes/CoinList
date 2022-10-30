import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import CoinItem from '../../components/CoinItem';
import {ICoinItem, RootStackParamList} from '../../types';
import axios from 'axios';
import Loader from '../../components/Loader';

interface ICoins {
  pair: string;
  key: string;
  rate: string;
}
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

// const coins: ICoins[] = [
//   {
//     name: 'Bitcoin',
//     key: 1,
//   },
//   {
//     name: 'Litecoin',
//     key: 2,
//   },
//   {
//     name: 'Dash',
//     key: 3,
//   },
// ];

const Home: FC<HomeScreenProps> = props => {
  const {navigation} = props;
  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(false);

  const renderCoinItem: FC<ICoinItem> = useCallback(
    ({item}) => <CoinItem item={item} navigation={navigation} />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const renderSeparator = () => <View style={styles.separator} />;

  async function getCoins() {
    console.log('CALLING');
    try {
      setLoading(true);
      const {data} = await axios.get(
        'https://staging-biz.coinprofile.co/v3/currency/rate',
      );
      setLoading(false);
      let currencyPairs = [];
      const rates = data.data.rates;
      for (const key in rates) {
        currencyPairs.push({
          pair: key,
          rate: rates[key].rate,
          key: rates[key].key,
        });
      }

      console.log('PAIRS', currencyPairs);
    } catch (error: any) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Icon name="search" size={20} color={colors.white} />
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            placeholderTextColor={colors.white}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={coins}
          renderItem={renderCoinItem}
          keyExtractor={(_, i) => i.toString()}
          removeClippedSubviews={true}
          maxToRenderPerBatch={30}
          updateCellsBatchingPeriod={0}
          initialNumToRender={30}
          windowSize={21}
          onEndReachedThreshold={0.01}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      {loading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 5,
    backgroundColor: colors.secondary,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{translateY: 25}],
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  inputStyle: {
    height: 50,
    flex: 1,
    fontSize: 15,
    color: colors.white,
  },
  bottom: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 20,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 2,
  },
});

export default Home;

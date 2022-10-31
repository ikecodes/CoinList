import {View, StyleSheet, TextInput, FlatList, Animated} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import CoinItem from '../../components/CoinItem';
import {ICoinItem, RootStackParamList} from '../../types';
import axios from 'axios';
import Loader from '../../components/Loader';

interface ICoins {
  pair: string;
  key: string;
  rate: number;
}
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeScreenProps> = props => {
  const {navigation} = props;
  const scaleAnimation = useRef(new Animated.Value(-1)).current;
  const [coins, setCoins] = useState<ICoins[]>([]);
  const [filteredData, setFilteredData] = useState<ICoins[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  function searchFilter(text: string) {
    if (text) {
      const newData = coins.filter(item => {
        const itemData = item.pair ? item.pair.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(coins);
      setSearch(text);
    }
  }
  const renderCoinItem: FC<ICoinItem> = useCallback(
    ({item}) => (
      <CoinItem item={item} navigation={navigation} setSearch={setSearch} />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  async function getCoins() {
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
      setFilteredData(currencyPairs);
      setCoins(currencyPairs);
    } catch (error: any) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCoins();
    Animated.spring(scaleAnimation, {
      toValue: 20,
      useNativeDriver: true,
    }).start();
  }, [scaleAnimation]);

  return (
    <View style={styles.container} testID="home-screen">
      <View style={styles.header}>
        <Animated.View
          style={[
            styles.inputContainer,
            {transform: [{translateY: scaleAnimation}]},
          ]}>
          <View style={styles.iconContainer}>
            <Icon name="search" size={20} color={colors.white} />
          </View>
          <TextInput
            testID="textField"
            style={styles.inputStyle}
            placeholder="Search"
            value={search}
            onChangeText={text => searchFilter(text)}
            placeholderTextColor={colors.white}
          />
        </Animated.View>
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={filteredData}
          renderItem={renderCoinItem}
          contentContainerStyle={styles.contentContainer}
          keyExtractor={item => item.key}
          removeClippedSubviews={true}
          maxToRenderPerBatch={30}
          updateCellsBatchingPeriod={0}
          initialNumToRender={30}
          windowSize={21}
          onEndReachedThreshold={0.01}
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
    height: 150,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 5,
    backgroundColor: colors.secondary,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
  contentContainer: {
    padding: 10,
  },
});

export default Home;

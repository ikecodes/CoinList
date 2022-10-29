import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens/Main';

// import axios from 'axios';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  // useEffect(() => {
  //   getCoins();
  // }, []);

  // async function getCoins() {
  //   const {data} = await axios.get(
  //     'https://staging-biz.coinprofile.co/v3/currency/rate',
  //   );
  //   let currencyPairs = [];
  //   const rates = data.data.rates;

  //   for (const key in rates) {
  //     currencyPairs.push({
  //       pair: key,
  //       rate: rates[key].rate,
  //       key: rates[key].key,
  //     });
  //   }
  // }

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
};

export default App;

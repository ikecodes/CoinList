import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

interface Props {
  name: string;
}
const App: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Welcome</Text>
    </SafeAreaView>
  );
};

export default App;

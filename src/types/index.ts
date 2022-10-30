export type RootStackParamList = {
  Home: undefined;
  CoinDetail: undefined;
};
export interface ICoinItem {
  item: {
    pair: string;
    key: string;
    rate: number;
  };
}

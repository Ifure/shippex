import {
  ParamListBase,
  RouteProp,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {
  NativeStackNavigatorProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack/lib/typescript/src/types';
import {JSX} from 'react/jsx-runtime';

export type RootStackParamList = {
  // auth
  Shipping: {};
  Profile: {};
  Barcode: {};
  Wallets: {};
  LoginScreen: {};
  NotFound: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export interface IObjectMapper {
  [index: string]: string;
}

export interface INavigatorTabIcon {
  size: number;
  focused: boolean;
  color: string;
}

export interface INavigatorScreenOptionProp {
  route: RouteProp<ParamListBase, string>;
}

export type IAppStack = TypedNavigator<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  ({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NativeStackNavigatorProps) => JSX.Element
>;
export interface INavigatorTabIcon {
  size: number;
  focused: boolean;
  color: string;
}
export enum Routes {
  RootTabs = 'RootTabs',
  LoginScreen = 'LoginScreen',
  Shipping = 'Shipping',
  Wallets = 'Wallets',
  Barcode = 'BarCode',
  Profile = 'Profile',
}

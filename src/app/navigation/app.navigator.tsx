import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  INavigatorScreenOptionProp,
  INavigatorTabIcon,
  Routes,
} from './interface.navigation';
import {IonicRoutes} from '../shared/constants/index';
import styles from '../navigation/styles';
import Icon from '../shared/utils/components/Icon';
import React from 'react';
import {useAppTheme} from '../hooks/useAppTheme';
import Shipping from '../../features/shipping/screens/shipping.screen';
import BarCode from '../../features/barcode/screens/barCode.screen';
import Profile from '../../features/profile/screens/profile.screen';
import Wallets from '../../features/wallets/screens/wallets.screen';
import {IThemeColor} from '../theme/colors';

const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();

const createScreenOptions =
  (colors: IThemeColor) =>
  ({route}: INavigatorScreenOptionProp): BottomTabNavigationOptions => {
    const isIonic = IonicRoutes.includes(route.name);
    const isShippingRoute = route.name === Routes.Shipping;
    return {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: isShippingRoute ? 'red' : 'blue',
      tabBarActiveTintColor: 'white',
      tabBarStyle: {
        ...styles.tab,
        backgroundColor: colors.background,
      },
      tabBarIcon: ({size, focused, color}: INavigatorTabIcon) => {
        return <Icon focused={focused} route={route.name} />;
      },
    };
  };

const AppTabs = () => {
  const colors = useAppTheme().colors;
  return (
    <Tab.Navigator
      initialRouteName={Routes.Shipping}
      screenOptions={createScreenOptions(colors)}>
      <Tab.Screen name={Routes.Shipping} component={Shipping} />
      <Tab.Screen name={Routes.Barcode} component={BarCode} />
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name={Routes.RootTabs} component={AppTabs} />
    {/* Exchange Screens Group */}
    <AppStack.Group>
      <AppStack.Screen name={Routes.Shipping} component={Shipping} />
      <AppStack.Screen name={Routes.Wallets} component={Wallets} />
      <AppStack.Screen name={Routes.Profile} component={Profile} />
      <AppStack.Screen name={Routes.Barcode} component={BarCode} />
    </AppStack.Group>
  </AppStack.Navigator>
);

export default AppNavigator;

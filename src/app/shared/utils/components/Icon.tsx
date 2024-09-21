import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {Avatar, Barcode, Boxes, Wallet} from '../../../../assets/svg';

interface IIconProps {
  route: string;
  focused: boolean;
  color: string;
  size: number;
}

const Icon = ({color, focused, route, size}: IIconProps) => {
  const colors = useAppTheme().colors;

  return (
    <View style={styles.icon_focused}>
      {route === 'Wallets' ? (
        <Wallet
          fill={focused ? colors.primary : 'red'}
          width={size}
          height={size}
        />
      ) : route === 'Shipping' ? (
        <Boxes
          fill={focused ? colors.primary : 'red'}
          width={size}
          height={size}
        />
      ) : route === 'Profile' ? (
        <Avatar
          fill={focused ? colors.primary : 'red'}
          width={size}
          height={size}
        />
      ) : (
        <Barcode
          fill={focused ? colors.primary : 'red'}
          width={size}
          height={size}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon_focused: {
    padding: 20,
  },
});

export default Icon;

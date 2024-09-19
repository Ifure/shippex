import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../../hooks/useAppTheme';
import {Avatar, Boxes, Wallet, Barcode} from '../../../../assets/svg/index';
import {styles} from '../styles';

interface IIconProps {
  route: string;
  focused: boolean;
}

const Icon = ({focused, route}: IIconProps) => {
  const colors = useAppTheme().colors;

  return (
    <View style={[focused && {backgroundColor: 'red'}, styles.icon_focused]}>
      {route === 'Wallet' ? (
        <Wallet />
      ) : route === 'Shipping' ? (
        <Boxes />
      ) : route === 'Profile' ? (
        <Avatar />
      ) : (
        <Barcode />
      )}
    </View>
  );
};

export default Icon;

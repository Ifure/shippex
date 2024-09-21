import {View, Text} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import {CustomStatusBar} from '../../../components/CustomStatusBar';
import {styles} from '../styles';

const Wallets = () => {
  const {fonts, colors, barStyle, isDark} = useAppTheme();
  return (
    <View style={styles.container}>
      <CustomStatusBar color={colors.themeColor} barStyle={barStyle} />
      <View style={{paddingTop: 20}}>
        <Text>This is the bar Screen</Text>
      </View>
    </View>
  );
};

export default Wallets;

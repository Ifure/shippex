import {View, Text} from 'react-native';
import React from 'react';
import {CustomStatusBar} from '../../../components/CustomStatusBar';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import {styles} from '../styles';

const BarCode = () => {
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

export default BarCode;

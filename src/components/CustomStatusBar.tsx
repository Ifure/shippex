import React from 'react';
import {
  StatusBar,
  StatusBarProps,
  View,
  SafeAreaView,
  StatusBarStyle,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useAppTheme} from '../app/hooks/useAppTheme';

interface ICustomStatusBarProps {
  color: string;
  barStyle: StatusBarStyle;
}

const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  const {isDark, colors} = useAppTheme();
  const barStyle = isDark ? 'light-content' : 'dark-content';

  return isFocused ? (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={colors.background}
      translucent
      {...props}
    />
  ) : null;
};

export const CustomStatusBar = ({color, barStyle}: ICustomStatusBarProps) => {
  return (
    <View style={{height: StatusBar.currentHeight}}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={color} barStyle={barStyle} />
      </SafeAreaView>
    </View>
  );
};

export default FocusAwareStatusBar;

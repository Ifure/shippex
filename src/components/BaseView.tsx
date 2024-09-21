import React, {PropsWithChildren} from 'react';
import {
  StatusBarProps,
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import FocusAwareStatusBar from './CustomStatusBar';
import {useAppTheme} from '../app/hooks/useAppTheme';

interface IStatusBarProps extends StatusBarProps {
  backgroundColor?: string;
}

interface IBaseWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const MyStatusBar = ({backgroundColor, ...props}: IStatusBarProps) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <FocusAwareStatusBar {...props} />
    </SafeAreaView>
  </View>
);

const BaseView = ({
  children,
  backgroundColor,
}: PropsWithChildren<IBaseWrapperProps>) => {
  const {colors, barStyle} = useAppTheme();

  return (
    <View style={styles.container}>
      <MyStatusBar
        backgroundColor={backgroundColor ?? colors.background}
        barStyle={barStyle}
      />
      <View style={[styles.content, {backgroundColor: colors.background}]}>
        {children}
      </View>
    </View>
  );
};

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {flex: 1},
  statusBar: {height: STATUSBAR_HEIGHT},
  content: {flex: 1},
});

export default BaseView;

import {NavigationContainer} from '@react-navigation/native';
import {useAppTheme} from '../hooks/useAppTheme';
import AppNavigator from './app.navigator';
import React from 'react';
import AuthNavigator from './auth.navigator';

export const Navigation = () => {
  const {appTheme} = useAppTheme();
  const isAuthenticated = true;

  return (
    <NavigationContainer theme={appTheme}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

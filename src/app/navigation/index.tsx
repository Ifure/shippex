import {NavigationContainer} from '@react-navigation/native';
import {useAppTheme} from '../hooks/useAppTheme';
import AppNavigator from './app.navigator';
import React, {useEffect, useState} from 'react';
import AuthNavigator from './auth.navigator';
import SplashScreen from 'react-native-splash-screen';
import {Platform, ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Navigation = () => {
  const {appTheme} = useAppTheme();
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      const authStatus = await AsyncStorage.getItem('isAuthenticated');
      setIsAuthenticated(authStatus === 'true');
    } catch (error) {
      console.error('Failed to retrieve authentication status', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  useEffect(() => {
    const authStatusListener = async () => {
      checkAuthStatus();
    };

    authStatusListener();
  }, [isAuthenticated]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={appTheme.colors.black} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={appTheme}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

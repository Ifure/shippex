import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../features/authentication/screens/splash.screen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Splash" component={SplashScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

import {View, Text} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import {styles} from '../styles';
import {CustomStatusBar} from '../../../components/CustomStatusBar';
import Button from '../../../components/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {
  RootStackScreenProps,
  Routes,
} from '../../../app/navigation/interface.navigation';
type IProfileScreen = RootStackScreenProps<Routes.Profile>;
const Profile = ({navigation}: IProfileScreen) => {
  const {fonts, colors, barStyle, isDark} = useAppTheme();

  const logout = async () => {
    try {
      // Set isAuthenticated to 'false' as a string
      await AsyncStorage.setItem('isAuthenticated', 'false');

      navigation.navigate('LoginScreen', {});
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar color={colors.themeColor} barStyle={barStyle} />
      <View style={{paddingTop: 20}}>
        <Text>This is the Profile Screen</Text>
        <Button
          buttonColor="red"
          size="inApp"
          title="Logout"
          onPress={logout}
        />
      </View>
    </View>
  );
};

export default Profile;

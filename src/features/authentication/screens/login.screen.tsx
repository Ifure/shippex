import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomStatusBar} from '../../../components/CustomStatusBar';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import {Shippex, Package} from '../../../assets/svg';
import Button from '../../../components/button/Button';
import {LoginModal} from '../components/LoginModal';
import {styles} from './styles';

const LoginScreen = () => {
  const {colors, barStyle} = useAppTheme();
  const [showModal, setShowModal] = useState(false);

  function toggleLoginModal() {
    setShowModal(!showModal);
  }
  return (
    <View style={[styles.login, {backgroundColor: colors.primary}]}>
      <CustomStatusBar color={'#000'} barStyle={barStyle} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Shippex />
      </View>

      <Button
        title="Login"
        titleColor={colors.primary}
        buttonColor={colors.white}
        onPress={toggleLoginModal}
      />

      <LoginModal modalVisible={showModal} toggleModal={toggleLoginModal} />
    </View>
  );
};

export default LoginScreen;

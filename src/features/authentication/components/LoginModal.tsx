import {View, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomModal from '../../../components/modal/Modal';
import {Chevron} from '../../../assets/svg';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import Text from '../../../components/text/Text';
import CustomTextInput from '../../../components/textInput/CustomTextInput';
import Button from '../../../components/button/Button';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const LoginModal = ({
  modalVisible,
  toggleModal,
}: {
  modalVisible: boolean;
  toggleModal: () => void;
}) => {
  const {colors, fonts} = useAppTheme();
  const {
    control,
    handleSubmit,
    clearErrors,
    setValue,
    reset,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const login = async ({usr, pwd}: {usr: string; pwd: string}) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const res = await axios.post(
        'https://shippex-demo.bc.brandimic.com/api/method/login',
        {
          usr,
          pwd,
        },
      );
      setSuccess(true);
      await AsyncStorage.setItem('isAuthenticated', 'true');
      console.log('sucess');
    } catch (err) {
      console.log(err);
      setErrorMessage(
        'Login failed. Please check your credentials and try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data: any) => {
    login({usr: data.username, pwd: data.password});
  };

  const urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleUrlChange = (text: string) => {
    setValue('url', text);
    if (urlPattern.test(text)) {
      clearErrors('url');
    }
  };

  const handleModalClose = () => {
    reset();
    toggleModal();
  };

  return (
    <CustomModal visible={modalVisible} onClose={handleModalClose}>
      <View style={{height: '90%', justifyContent: 'space-between'}}>
        <ScrollView contentContainerStyle={{paddingBottom: 0, flexGrow: 1}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Chevron />
            <Pressable onPress={handleModalClose}>
              <Text color={colors.primary}>Cancel</Text>
            </Pressable>
          </View>
          <View style={{marginVertical: 20, gap: 15}}>
            <Text fontWeight="600" size={fonts.h4}>
              Login
            </Text>
            <Text color={colors.ritualCyan} lineHeight={18.9}>
              Please enter your URL, Username, and Password to sign in.
            </Text>
            <View style={{gap: 20}}>
              <CustomTextInput
                placeholder="URL"
                control={control}
                name="url"
                rules={{
                  pattern: {
                    value: urlPattern,
                    message: 'Enter a valid URL',
                  },
                }}
                onBlurText={handleUrlChange}
                onFocus={() => clearErrors('url')}
              />

              <CustomTextInput
                name="username"
                control={control}
                placeholder="Username/Email"
                rules={{required: 'Username/Email is required'}}
              />

              <CustomTextInput
                name="password"
                control={control}
                placeholder="Password"
                rules={{required: 'Password is required'}}
              />
            </View>
          </View>
        </ScrollView>

        {errorMessage && (
          <View>
            <Text color={colors.dangerRed}>{errorMessage}</Text>
          </View>
        )}
        <Button
          isLoading={loading}
          titleColor="#FFF"
          title="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={loading} // Disable button during loading
        />
      </View>
    </CustomModal>
  );
};

import React, {ReactElement, useState} from 'react';
import {View, TextInput, KeyboardTypeOptions, Pressable} from 'react-native';
import {
  Control,
  Controller,
  FieldValues,
  Noop,
  RegisterOptions,
} from 'react-hook-form';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import Text from '../text/Text';
import {Eye} from '../../assets/svg';

export interface CustomTextInputProps {
  label?: string;
  iconName?: ReactElement<any>;
  password?: boolean;
  error?: null;
  name?: any;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, 'password'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  control?: Control<FieldValues, any>;
  placeholder?: string;
  onFocus?: () => void;
  onChangeText?: (text: any) => void;
  onBlurText?: (text: any) => void;
  value?: any;
  suggestedValue?: string;
  keyboardType?: KeyboardTypeOptions;
  handleAction?: () => void;
  editable?: boolean;
  securedTextEntry?: boolean;
}

const CustomTextInput = ({
  password,
  placeholder,
  onFocus,
  onChangeText,
  name,
  onBlurText,
  control,
  rules,
  editable = true,
}: CustomTextInputProps) => {
  const {colors, fonts} = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(password);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <View style={{gap: 10}}>
          <TextInput
            style={[
              styles.input,
              {borderColor: error ? colors.dangerRed : colors.lightPurple},
            ]}
            placeholder={placeholder}
            onChangeText={text => {
              onChange(text);
              onChangeText && onChangeText(text);
            }}
            onFocus={() => {
              onFocus;
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
              onBlurText && onBlurText(value);
            }}
            editable={editable && editable}
            secureTextEntry={password}
            value={value}
          />
          {password && (
            <Pressable
              onPress={() => setSecureTextEntry(prev => !prev)}
              style={{position: 'absolute', right: 16, top: 16}}>
              <Eye />
            </Pressable>
          )}

          {error && (
            <Text color={colors.dangerRed} size={fonts.sm}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomTextInput;

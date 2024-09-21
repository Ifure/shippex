import React from 'react';
import {
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
  ActivityIndicator,
} from 'react-native';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import Text from '../text/Text';

interface IButtonProps {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonColor?: string;
  titleColor?: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  size?: string;
}

const Button: React.FC<IButtonProps> = ({
  title = '',
  icon,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  size,
  disabled = false,
  isLoading = false,
}) => {
  const {colors} = useAppTheme();

  const backgroundColor = disabled
    ? colors.disabled
    : buttonColor || colors.primary;
  const textColor = disabled ? '#CDCAD9' : titleColor || '#1C1C1C';

  return (
    <TouchableOpacity
      style={[
        styles.button_container,
        buttonStyle,
        {
          backgroundColor: disabled
            ? backgroundColor
            : isLoading
            ? '#EAE7F2'
            : backgroundColor,
          width: size === 'inApp' ? '35%' : size === 'half' ? '50%' : '100%',
        },
      ]}
      onPress={disabled ? undefined : onPress}
      activeOpacity={disabled ? 1 : 0.7} // Ensure no visual feedback when disabled
    >
      <View>{icon ? icon : <View />}</View>
      {isLoading && <ActivityIndicator size="large" color={colors.primary} />}
      <Text color={textColor}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

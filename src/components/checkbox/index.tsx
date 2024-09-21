import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import {heightPixel, widthPixel} from '../../app/theme/config';
import {Check, WhiteCheck} from '../../assets/svg';

const Checkbox = ({
  checked,
  circle,
  square,
  radio,
  onChange,
  disabled,
}: {
  checked?: boolean;
  circle?: boolean;
  square?: boolean;
  radio?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}) => {
  const {colors} = useAppTheme();
  const [pressed, setPressed] = useState(checked);

  const outerBg = pressed ? (disabled ? '#757281' : colors.primary) : '#D0D5DD';
  const bg = pressed ? (circle ? colors.primary : '#D9E6FD') : 'white';

  const handleAction = () => {
    if (!disabled) {
      setPressed(!pressed);
      onChange && onChange(!pressed);
    }
  };

  return (
    <TouchableOpacity
      onPress={disabled ? undefined : handleAction}
      style={[
        styles.checkbox,
        {
          borderColor: outerBg,
          borderRadius: square ? 5 : 50,
          width: widthPixel(20),
          height: heightPixel(20),
          backgroundColor: bg,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      disabled={disabled}>
      {square ? (
        <View style={[styles.checkbox_inner]}>{pressed && <Check />}</View>
      ) : circle ? (
        <View style={[styles.checkbox_inner]}>{pressed && <WhiteCheck />}</View>
      ) : radio ? (
        <View style={[styles.checkbox_inner]}>
          {pressed && (
            <View
              style={[
                styles.radio,
                {
                  backgroundColor: colors.primary,
                },
              ]}
            />
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;

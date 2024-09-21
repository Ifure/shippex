import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {useAppTheme} from '../../app/hooks/useAppTheme';

interface IBaseTextProps {
  color?: string;
  size?: number;
  bold?: boolean;
  center?: boolean;
  end?: boolean;
  numberOfLines?: number;
  lineHeight?: number;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '600'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '700'
    | '800'
    | '900';
}

const BaseText = ({
  children,
  color,
  size,
  bold,
  center,
  end,
  numberOfLines,
  lineHeight,
  fontWeight,
}: PropsWithChildren<IBaseTextProps>) => {
  const {colors, fonts} = useAppTheme();
  const checkfontWeight = bold ? '600' : 'normal';
  const textAlign = center ? 'center' : 'auto';

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color: color ?? colors.text,
          fontSize: size ?? fonts.body,
          fontWeight: fontWeight ?? checkfontWeight,
          textAlign: textAlign ?? end,
          lineHeight: lineHeight,
        },
      ]}>
      {children}
    </Text>
  );
};

export default BaseText;

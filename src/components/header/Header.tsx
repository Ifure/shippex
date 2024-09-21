import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import Text from '../text/Text';
import {isString} from '../../app/shared/utils/helpers';

interface IHeader {
  color?: string;
  backgroundColor?: string;
  title?: ReactElement<any> | string;
  headerLeft?: ReactElement<any>;
  headerRight?: ReactElement<any>;
}

const Header = ({
  title,
  headerLeft,
  headerRight,
  color,
  backgroundColor,
}: IHeader) => {
  const {colors} = useAppTheme();

  return (
    <View
      style={[
        {backgroundColor: backgroundColor ?? colors.background},
        styles.header,
      ]}>
      {headerLeft}
      {isString(title) ? (
        <Text fontWeight="500" color={color}>
          {title}
        </Text>
      ) : (
        title
      )}
      {headerRight ? headerRight : <View />}
    </View>
  );
};

export default Header;

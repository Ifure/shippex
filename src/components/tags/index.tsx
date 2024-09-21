import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import Text from '../text/Text';
import {styles} from './styles';

interface TagsProps {
  color?: string;
  backgroundColor?: string;
  title: string;
  big?: boolean;
  clickable?: boolean;
}

const Tags: React.FC<TagsProps> = ({
  color,
  backgroundColor,
  title,
  big,
  clickable,
}) => {
  const {colors} = useAppTheme();
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (clickable) {
      setPressed(prev => !prev);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.tag,
        {
          paddingVertical: big ? 10 : 5,
          backgroundColor,
          borderWidth: pressed && clickable ? 1 : 0,
          borderColor: clickable ? colors.primary : 'transparent',
        },
      ]}>
      <Text color={color}>{title}</Text>
    </Pressable>
  );
};

export default Tags;

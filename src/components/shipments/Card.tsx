import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Checkbox from '../checkbox';
import Text from '../text/Text';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {Across, Icon, Package} from '../../assets/svg';
import Tags from '../tags';
import {styles} from './styles';
import ExpandedCard from './ExpandedCard';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const Card = ({
  tagColor,
  tagBackgroundColor,
  title,
}: {
  tagColor?: string;
  tagBackgroundColor?: string;
  title: string;
}) => {
  const {colors, fonts} = useAppTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const height = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isExpanded ? 200 : 0, {duration: 300}),
      opacity: withTiming(isExpanded ? 1 : 0, {duration: 300}),
    };
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    height.value = isExpanded ? 0 : 1;
  };

  return (
    <View>
      <View
        style={[styles.shipmentCard, {backgroundColor: colors.lightPurple}]}>
        <View style={styles.checkCard}>
          <Checkbox square />
          <Package />
        </View>
        <View>
          <Text fontWeight="300">AWB</Text>
          <Text size={fonts.h6} fontWeight="500">
            41785691423
          </Text>
          <View style={styles.cardDetails}>
            <Text fontWeight="200" color={colors.gray}>
              Cairo
            </Text>
            <Icon />
            <Text fontWeight="200" color={colors.gray}>
              Alexandria
            </Text>
          </View>
        </View>
        <Tags
          color={tagColor}
          backgroundColor={tagBackgroundColor}
          title={title}
        />

        <TouchableOpacity onPress={toggleExpand} style={styles.dropdown}>
          <Across />
        </TouchableOpacity>
      </View>

      {/* Animated expanded card */}
      <Animated.View style={[animatedStyle, {overflow: 'hidden'}]}>
        <ExpandedCard />
      </Animated.View>
    </View>
  );
};

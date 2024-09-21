import React from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import Text from '../text/Text';
import {Icon, Phone, Whatsapp} from '../../assets/svg';
import Button from '../button/Button';

const ExpandedCard = () => {
  const {colors, fonts} = useAppTheme();

  return (
    <View style={[styles.expandedContainer, {backgroundColor: colors.cyan}]}>
      <View style={styles.dashed}>
        <View style={styles.dashedBorder} />
      </View>

      <View style={styles.location}>
        <View>
          <Text color={colors.primary} fontWeight="200">
            Origin
          </Text>
          <Text size={fonts.h6} fontWeight="400">
            Cairo
          </Text>
          <Text color={colors.gray} fontWeight="200">
            Dokki, 22 Nile St.
          </Text>
        </View>

        <Icon width={20} height={20} />

        <View>
          <Text color={colors.primary} fontWeight="200">
            Destination
          </Text>
          <Text size={fonts.h6} fontWeight="400">
            Cairo
          </Text>
          <Text color={colors.gray} fontWeight="200">
            Dokki, 22 Nile St.
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Call"
          titleColor="#FFFF"
          buttonColor="#6E91EC"
          size="inApp"
          icon={<Phone />}
        />
        <Button
          title="WhatsApp"
          titleColor="#FFFF"
          buttonColor="#6E91EC"
          size="inApp"
          icon={<Whatsapp />}
        />
      </View>
    </View>
  );
};

export default ExpandedCard;

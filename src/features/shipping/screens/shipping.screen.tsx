import {View} from 'react-native';
import React, {useState} from 'react';
import {CustomStatusBar} from '../../../components/CustomStatusBar';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import {styles} from '../styles';
import Header from '../../../components/header/Header';
import {Bell, Filter, Logo, Scan, User} from '../../../assets/svg';
import Text from '../../../components/text/Text';
import Button from '../../../components/button/Button';
import Checkbox from '../../../components/checkbox';
import {Card} from '../../../components/shipments/Card';
import {ScrollView} from 'react-native-gesture-handler';
import FilterModal from '../components/FilterModal';
import BaseView from '../../../components/BaseView';

const Shipping = () => {
  const {fonts, colors, barStyle, isDark} = useAppTheme();
  const [open, setOpen] = useState(false);
  function filterList() {
    setOpen(!open);
  }
  return (
    <BaseView>
      <View style={styles.container}>
        {/* <CustomStatusBar color={colors.themeColor} barStyle={barStyle} /> */}
        <ScrollView
          style={{paddingTop: 10}}
          showsVerticalScrollIndicator={false}>
          <Header
            headerLeft={<User />}
            title={<Logo />}
            headerRight={<Bell />}
          />
          <View style={{paddingTop: 10}}>
            <Text fontWeight="200">Hello,</Text>
            <Text size={fonts.h5} fontWeight="600" lineHeight={32.99}>
              Ibrahim Shaker
            </Text>
          </View>
          <View style={styles.buttons}>
            <Button
              size="half"
              title="Filter"
              buttonColor={colors.lightPurple}
              icon={<Filter />}
              onPress={filterList}
            />
            <Button
              size="half"
              title="Add Scan"
              buttonColor={colors.primary}
              icon={<Scan />}
              titleColor={colors.white}
            />
          </View>
          <View style={styles.shipments}>
            <View style={styles.flex}>
              <Text size={fonts.h6} fontWeight="600">
                Shipments
              </Text>
              <View style={styles.checkBox}>
                <Checkbox square />
                <Text color={colors.primary}>Mark All</Text>
              </View>
            </View>
            <Card
              tagBackgroundColor={colors.mildRed}
              tagColor={colors.dangerRed}
              title="Error"
            />
            <Card
              tagBackgroundColor={colors.lightGreen}
              tagColor={colors.dryGreen}
              title="Delivered"
            />
            <Card
              tagBackgroundColor={colors.lightBlue}
              tagColor={colors.primary}
              title="Received"
            />
            <Card
              tagBackgroundColor={colors.mildYellow}
              tagColor={colors.orange}
              title="On Hold"
            />
          </View>
        </ScrollView>
        <FilterModal modalVisible={open} toggleModal={filterList} />
      </View>
    </BaseView>
  );
};

export default Shipping;

import {Pressable, View} from 'react-native';
import React from 'react';
import CustomModal from '../../../components/modal/Modal';
import {useAppTheme} from '../../../app/hooks/useAppTheme';
import Text from '../../../components/text/Text';
import Tags from '../../../components/tags';
import {styles} from './styles';

const FilterModal = ({
  modalVisible,
  toggleModal,
}: {
  modalVisible: boolean;
  toggleModal: () => void;
}) => {
  const {colors} = useAppTheme();

  const tagsData = [
    {title: 'Received'},
    {title: 'Putaway'},
    {title: 'Delivered'},
    {title: 'Canceled'},
    {title: 'Rejected'},
    {title: 'Lost'},
    {title: 'On Hold'},
  ];

  return (
    <CustomModal visible={modalVisible} onClose={toggleModal}>
      <View style={{paddingVertical: 10}}>
        <View style={[styles.filterContainer, {borderColor: colors.cyan}]}>
          <Pressable onPress={toggleModal}>
            <Text color={colors.primary}>Cancel</Text>
          </Pressable>
          <Text>Filters</Text>
          <Pressable onPress={toggleModal}>
            <Text color={colors.primary}>Done</Text>
          </Pressable>
        </View>
        <View>
          <Text color={colors.ritualCyan}>SHIPMENT STATUS</Text>
          <View style={styles.status}>
            {tagsData.map((tag, index) => (
              <View key={index} style={{width: '33.33%', padding: 5}}>
                <Tags
                  color={colors.ritualCyan}
                  backgroundColor={colors.cyan}
                  title={tag.title}
                  big
                  clickable
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

export default FilterModal;

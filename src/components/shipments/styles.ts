import {StyleSheet} from 'react-native';
import {SPACING} from '../../app/theme/spacing';
import {heightPixel, widthPixel} from '../../app/theme/config';

const {horizontalSpacing, verticalSpacing} = SPACING;
export const styles = StyleSheet.create({
  shipmentContainer: {borderRadius: 10},
  shipmentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 20,
  },
  checkCard: {flexDirection: 'row', alignItems: 'center', gap: 20},
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  dashed: {height: 1, overflow: 'hidden'},
  dashedBorder: {
    height: 2,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
  },
  expandedContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 10,
  },
});

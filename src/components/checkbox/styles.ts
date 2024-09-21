import {StyleSheet} from 'react-native';
import {SPACING} from '../../app/theme/spacing';
import {heightPixel, widthPixel} from '../../app/theme/config';

const {horizontalSpacing, verticalSpacing} = SPACING;
export const styles = StyleSheet.create({
  checkbox: {
    width: widthPixel(20),
    height: heightPixel(20),
    borderWidth: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox_inner: {
    width: widthPixel(10),
    height: heightPixel(10),
    borderRadius: 50,
  },
  radio: {
    width: widthPixel(10),
    height: heightPixel(10),
    borderRadius: 100,
  },
});

import {StyleSheet} from 'react-native';
import {SPACING} from '../../app/theme/spacing';
import {heightPixel} from '../../app/theme/config';

const {horizontalSpacing, verticalSpacing} = SPACING;
export const styles = StyleSheet.create({
  button_container: {
    marginTop: verticalSpacing.m,
    height: heightPixel(60),
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  button_title: {fontSize: 15},
});

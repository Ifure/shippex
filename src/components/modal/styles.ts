import {StyleSheet} from 'react-native';
import {SPACING} from '../../app/theme/spacing';
import {
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../../app/theme/config';

const {horizontalSpacing, verticalSpacing} = SPACING;
export const styles = StyleSheet.create({
  modal: {
    // paddingBottom: 50,
    flex: 1,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: 'absolute',
    shadowRadius: 2,
    justifyContent: 'flex-end',
  },
  dModal: {
    justifyContent: 'flex-end',
    borderTopRightRadius: 50,
    borderTopStartRadius: 50,
  },
  modal_content: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
  },
  drag_down: {
    padding: 3,
    width: widthPixel(32),
    height: heightPixel(4),
    borderRadius: 50,
    marginTop: pixelSizeVertical(16),
    alignSelf: 'center',
  },
});

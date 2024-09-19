import {COLORS} from '../theme/colors';
import {FONTS} from '../theme/fonts';
import {SIZES} from '../theme/size';
import {SPACING} from '../theme/spacing';

const DARK = {
  dark: true,
  ...COLORS.dark,
  ...FONTS,
  ...SIZES,
  ...SPACING,
};

const LIGHT = {
  dark: false,
  ...COLORS.light,
  ...FONTS,
  ...SIZES,
  ...SPACING,
};

export default {DARK, LIGHT};

export interface IThemeColor {
  themeColor: string;
  background: string;
  blue: string;
  disabled: string;
  white: string;
  black: string;
  lightPurple: string;
}

export const palette = {
  white: '#FFFFFF',
  black: '#000000', // Ensure the black color is a full hex code
  blue: '#2F50C1', // Fixed the color code
  offWhite: '#F4F2F8',
  lightPurple: '#F4F2F8',
  dangerRed: '#D12030',
  mildRed: '#FEE3D4',
  gray: '#757281',
  cyan: '#F4F2F880',
  lightBlue: '#D9E6FD',
  dryGreen: '#208D28',
  lightGreen: '#E3FAD6',
  ritualCyan: '#58536E',
  mildYellow: '#FFF3D5',
  orange: '#DB7E21',
  dark_gray: '#292929',
};

export const COLORS = {
  light: {
    colors: {
      themeColor: palette.white,
      background: palette.white,
      primary: palette.blue,
      text: palette.black,
      disabled: palette.offWhite,
      ...palette,
    },
  },
  dark: {
    colors: {
      themeColor: palette.black,
      background: palette.black,
      primary: palette.blue,
      text: palette.white,
      disabled: palette.offWhite,
      ...palette,
    },
  },
};

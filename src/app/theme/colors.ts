export interface IThemeColor {
  themeColor: string;
  background: string;
}

export const palette = {
  white: '#FFFFFF',
  black: '#000',
};

export const COLORS = {
  light: {
    colors: {
      themeColor: palette.white,
      background: palette.white,
      ...palette,
    },
  },
  dark: {
    colors: {
      themeColor: palette.black,
      background: palette.black,
      ...palette,
    },
  },
};

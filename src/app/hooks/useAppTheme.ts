import {
  StatusBarStyle,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import theme from '../theme';

export const useAppTheme = () => {
  const scheme = useColorScheme();
  const {width, height} = useWindowDimensions();
  const isDark = scheme === 'dark';
  const barStyle: StatusBarStyle = 'dark-content';
  const appTheme = theme.LIGHT;
  const colors = appTheme.colors;
  const fonts = appTheme.fonts;
  const spacingH = appTheme.horizontalSpacing;
  const spacingV = appTheme.verticalSpacing;
  const sizes = {
    breakpoints: appTheme.breakpoints,
    borderRadil: appTheme.borderRadii,
    small: appTheme.small,
    medium: appTheme.medium,
    large: appTheme.large,
    xl: appTheme.xl,
    xxl: appTheme.xxl,
  };

  return {
    appTheme,
    colors,
    fonts,
    spacingV,
    spacingH,
    sizes,
    width,
    height,
    isDark,
    barStyle,
  };
};

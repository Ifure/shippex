import {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface IGestureHandlerContext {
  startTop: number;
}

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const useModal = (visible: boolean, onClose: () => void) => {
  const dimensions = useWindowDimensions();
  const SCREEN_HEIGHT = dimensions.height;

  const HALFSCREEN_HEIGHT = -SCREEN_HEIGHT * 0.1;
  const top = useSharedValue(SCREEN_HEIGHT);

  const modalGestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: IGestureHandlerContext) => {
      // context.startTop = top.value;
      context.startTop = top.value;
    },
    onActive: (event, context: IGestureHandlerContext | any) => {
      top.value = context.startTop + event.translationY;
    },
    onEnd: () => {
      // runOnJS(onClose)();
      if (top.value > HALFSCREEN_HEIGHT + 200) {
        runOnJS(onClose)();

        top.value = SCREEN_HEIGHT;
      } else {
        top.value = HALFSCREEN_HEIGHT;
      }
    },
  });

  const modalVisible = useMemo(() => {
    if (visible) {
      top.value = withSpring(HALFSCREEN_HEIGHT, SPRING_CONFIG);
    } else {
      top.value = withSpring(SCREEN_HEIGHT, SPRING_CONFIG);
    }
    return visible;
  }, [visible]);

  const modalReanimatedStyles = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  return {
    modalGestureHandler,
    modalVisible,
    modalReanimatedStyles,
  };
};

export {useModal};

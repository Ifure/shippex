import React, {PropsWithChildren} from 'react';
import {Pressable, Modal as ReactNativeModal, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  PanGestureHandler,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import {useAppTheme} from '../../app/hooks/useAppTheme';
import {styles} from './styles';
import {useModal} from '../../app/hooks/useModal';

interface IModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomModal = ({
  children,
  visible,
  onClose,
}: PropsWithChildren<IModalProps>) => {
  const {modalGestureHandler, modalReanimatedStyles, modalVisible} = useModal(
    visible,
    onClose,
  );
  const {colors} = useAppTheme();
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const ModalChild = gestureHandlerRootHOC(() => (
    <PanGestureHandler onGestureEvent={modalGestureHandler}>
      <AnimatedPressable
        style={[
          styles.modal,
          modalReanimatedStyles,
          {backgroundColor: '#0000004D'},
        ]}
        onPress={onClose}>
        <Pressable style={[styles.dModal]}>
          <View style={[styles.modal_content, {backgroundColor: colors.white}]}>
            <View
              style={[styles.drag_down, {backgroundColor: colors.ritualCyan}]}
            />
            {children}
          </View>
        </Pressable>
      </AnimatedPressable>
    </PanGestureHandler>
  ));

  return (
    <ReactNativeModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}>
      <ModalChild />
    </ReactNativeModal>
  );
};

export default CustomModal;

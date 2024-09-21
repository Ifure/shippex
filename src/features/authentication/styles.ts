import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: '#F4F2F8',
    borderRadius: 10,
    borderWidth: 1,
    color: '#2F50C1',
  },

  modalContainer: {
    height: '90%',
    justifyContent: 'space-between',
  },
  cancel: {flexDirection: 'row', gap: 10},
});

import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/app.constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centralizedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexGrow: 1,
  },
  searchContainerStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  // inputStyle: {color: 'purple'},
  searchInputContainerStyle: {
    backgroundColor: '#fff',
    borderRadius: 35,
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export const colorArray = [
  'green.500',
  'amber.500',
  'lightBlue.400',
  'indigo.500',
  'cyan.500',
  'purple.600',
  'emerald.400',
];

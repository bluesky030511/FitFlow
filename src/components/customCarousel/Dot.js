import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { hpx, wpx } from '../../helpers/scale';

const Dot = ({ index, paginationIndex }) => {
  return <View style={paginationIndex === index ? styles.dot : styles.dotOpacity} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#354B5C',
    height: hpx(3),
    width: wpx(30),
    marginHorizontal: 5,
    borderRadius: 8,
  },
  dotOpacity: {
    backgroundColor: '#CBCBCB',
    height: hpx(3),
    width: wpx(30),
    marginHorizontal: 5,
    borderRadius: 8,
    opacity: 0.5,
  },
});

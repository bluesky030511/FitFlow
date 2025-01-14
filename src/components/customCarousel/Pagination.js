import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hpx } from '../../helpers/scale';
import Dot from './Dot';
import { animals } from '../../constants/animals';

const Pagination = ({ paginationIndex }) => {
  return (
    <View style={styles.container}>
      {animals.map((_, index) => {
        return <Dot index={index} key={index} paginationIndex={paginationIndex} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hpx(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

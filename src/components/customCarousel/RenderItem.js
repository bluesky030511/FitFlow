import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View, Text} from 'react-native';
import { hpx, nf, SCREEN_WIDTH, wpx } from '../../helpers/scale';

const RenderItem = ({ item, index, x }) => {
  const { width } = useWindowDimensions();
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const opacityValue = opacityAnim.interpolate({
      inputRange,
      outputRange: [0, 1, 0], // Changed to avoid negative values
      extrapolate: 'clamp',
    });

    const listener = x.addListener(({ value }) => {
      opacityAnim.setValue(opacityValue); // Updating the opacity based on the interpolated value directly
    });

    return () => {
      x.removeListener(listener);
    };
  }, [index, width, x, opacityAnim]);

  return (
    <View style={{ width }}>
      {/* <Animated.Image
        resizeMode="cover"
        source={{ uri: item.image }}
        style={[styles.titleImage, { opacity: opacityAnim }]}
      /> */}
      <Text style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.text}>
        {item.text}
      </Text>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  titleImage: {
    width: SCREEN_WIDTH - wpx(32),
    height: hpx(194),
    alignSelf: 'center',
    borderRadius: nf(16),
  },
  title: {
    marginTop: 100,
    color: '#354B5C',
    fontSize: 24,
    paddingHorizontal: 44,
    fontWeight: 'bold'
  },
  text: {
    paddingTop: 50,
    color: '#7B7B7B',
    fontSize: 14,
    paddingHorizontal: 44,
  },
});

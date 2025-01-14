import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, View, useWindowDimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { hpx, SCREEN_HEIGHT } from '../../helpers/scale';
import Pagination from './Pagination';
import RenderItem from './RenderItem';
import { animals } from '../../constants/animals';


const CustomCarousel = () => {
  const { width } = useWindowDimensions();
  const [data] = useState(animals);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current; 
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const interval = useRef();

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const currentIndex = viewableItems[0].index;
      setCurrentIndex(currentIndex);
      setPaginationIndex(currentIndex % animals.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handlePress = () => {
      const nextIndex = (currentIndex + 1) % data.length;
      if (nextIndex == 0) {
        //navigate sign in or sign up
      } else {
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
      }
      
  }

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          scrollToIndex(nextIndex);
          return nextIndex;
        });
      }, 4000);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [isAutoPlay, data.length]);

  const scrollViewRef = useRef();

  const scrollToIndex = (index) => {
    if (index >= 0 && index < data.length) {
      scrollViewRef.current.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={scrollViewRef}
        style={{ height: SCREEN_HEIGHT - 400, flexGrow: 0 }}
        onScrollBeginDrag={() => setIsAutoPlay(false)}
        // onScrollEndDrag={() => setIsAutoPlay(true)}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        data={data}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({ item, index }) => <RenderItem item={item} index={index} x={scrollX} />}
      />
      <Pagination paginationIndex={paginationIndex} />
      <TouchableOpacity
      onPress={handlePress}
      style={styles.button}
      >
        <Image
          style={styles.btn_image}
          source={require('../../assets/images/btn_forward.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 300,
    top: 366,
    paddingHorizontal: 20,
    zIndex: 10
  },
  btn_image: {
    width: 50,
    height: 50
  }
});

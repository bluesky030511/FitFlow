import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image, Animated } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  {
    id: '1',
    title: 'Item 1',
    text: 'Text for Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
    text: 'Text for Item 2',
  },
  {
    id: '3',
    title: 'Item 3',
    text: 'Text for Item 3',
  },
  // Add more items as needed
];

const AnimatedCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const index = Math.floor(event.nativeEvent.contentOffset.x);
        setActiveIndex(index);
      },
    }
  );

  const renderItem = (item) => (
    <View style={styles.carouselItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {carouselItems.map(item => (
          <View key={item.id} style={{ width: screenWidth * 0.8, marginHorizontal: 10 }}>
            {renderItem(item)}
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.pagination}>
        {carouselItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});

export default AnimatedCarousel;

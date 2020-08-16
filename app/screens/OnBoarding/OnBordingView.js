import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  useValue,
  interpolateColor,
  onScrollEvent,
  useScrollHandler,
} from 'react-native-redash';
import Animated, {multiply, divide} from 'react-native-reanimated';
import colors from '../../config/colors';

import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './Slide';
import Subslide from './Subslide';
import Pagination from './Pagination';

const {width} = Dimensions.get('window');
const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find Your Outfits',
    description:
      "Confused about your outfit?Don't worry! Find the best outfit here!",
    color: colors.onBoradingScreen1,
    picture: require('../../assets/images/1.png'),
  },
  {
    title: 'Playfull',
    subTitle: 'Hear it First , Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfits ideas',
    color: colors.onBoradingScreen2,
    picture: require('../../assets/images/2.png'),
  },
  {
    title: 'Excentric',
    subTitle: 'Your Style , Your Way',
    description:
      'Create your individuals & unique style and look amzaing eveyday',
    color: colors.onBoradingScreen3,
    picture: require('../../assets/images/3.png'),
  },
  {
    title: 'Funky',
    subTitle: 'Look Good , Fell Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: colors.onBoradingScreen4,
    picture: require('../../assets/images/4.png'),
  },
];

export default function OnBordingView() {
  // const x = useValue(0);
  const scroll = useRef(null);
  // const scroll = useRef < Animated.ScrollView > null;
  //for scroll event
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <Animated.View style={[styles.footerContent]}>
          <View style={styles.slidepagination}>
            {slides.map((_, index) => (
              <Pagination
                key={index}
                currentindex={divide(x, width)}
                {...{index}}
              />
            ))}
          </View>
          <Animated.View
            style={{
              width: width * slides.length,
              flexDirection: 'row',
              flex: 1,
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {slides.map(({subTitle, description}, index) => (
              <Subslide
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({x: width * (index + 1), animated: true});
                  }
                }}
                key={index}
                last={index === slides.length - 1}
                {...{subTitle, description}}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footerContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    paddingTop: 40,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  slidepagination: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(100,200,300,0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    height: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
});

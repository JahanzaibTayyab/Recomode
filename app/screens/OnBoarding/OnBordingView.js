import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useValue, interpolateColor, onScrollEvent} from 'react-native-redash';
import Animated, {multiply} from 'react-native-reanimated';
import colors from '../../config/colors';

import Slide, {SLIDE_HEIGHT} from './Slide';
import Subslide from './Subslide';

const {width} = Dimensions.get('window');

const BORDER_RADIUS = 75;
// Slides data
const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find Your Outfits',
    description:
      "Confused about your outfit?Don't worry! Find the best outfit here!",
    color: colors.onBoradingScreen1,
  },
  {
    title: 'Playfull',
    subTitle: 'Hear it First ,Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfits ideas',
    color: colors.onBoradingScreen2,
  },
  {
    title: 'Excentric',
    subTitle: 'Your Style , Your Way',
    description:
      'Create your individuals & unique style and look amzaing eveyday',
    color: colors.onBoradingScreen3,
  },
  {
    title: 'Funky',
    subTitle: 'Look Good ,Fell Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: colors.onBoradingScreen4,
  },
];

export default function OnBordingView() {
  const x = useValue(0); // Animated value
  const scroll = useRef(null); // on scroll press
  // const scroll = useRef < Animated.ScrollView > null;
  //for scroll event
  const onScroll = onScrollEvent({x});
  // rendering background color based on animation  and value of x
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
          {...{onScroll}}>
          {/* Slide component and call map */}
          {slides.map(({title}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <Animated.View
          style={[
            styles.footerContent,
            //footer conent to scrool down
            {
              width: width * slides.length,
              flex: 1,
              transform: [{translateX: multiply(x, -1)}],
            },
          ]}>
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
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
});

import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {
  useValue,
  interpolateColor,
  onScrollEvent,
  useScrollHandler,
} from 'react-native-redash';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import colors from '../../config/colors';

import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from './components/Slide';
import Subslide from './components/Subslide';
import Pagination from './components/Pagination';
import routes from '../../navigation/routes';
//width by window
const {width} = Dimensions.get('window');
//slides data
const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find Your Outfits',
    description:
      "Confused about your outfit?Don't worry! Find the best outfit here!",
    color: colors.onBoradingScreen1,
    picture: {
      uri: require('../../assets/images/1.png'),
      width: 480,
      height: 640,
    },
  },
  {
    title: 'Playfull',
    subTitle: 'Hear it First , Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfits ideas',
    color: colors.onBoradingScreen2,
    picture: {
      uri: require('../../assets/images/2.jpg'),
      width: 460,
      height: 604,
    },
  },
  {
    title: 'Excentric',
    subTitle: 'Your Style , Your Way',
    description:
      'Create your individuals & unique style and look amzaing eveyday',
    color: colors.onBoradingScreen3,
    picture: {
      uri: require('../../assets/images/3.png'),
      width: 545,
      height: 640,
    },
  },
  {
    title: 'Funky',
    subTitle: 'Look Good , Fell Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: colors.onBoradingScreen4,
    picture: {
      uri: require('../../assets/images/4.png'),
      width: 490,
      height: 590,
    },
  },
];
function OnBordingView({navigation}) {
  // const x = useValue(0);
  const scroll = useRef(null); // for footer movement

  // const scroll = useRef < Animated.ScrollView > null;
  //for scroll event using readsh
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      {/* Picture backgroud data put in slider  */}
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        {slides.map(({picture}, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, {opacity}]} key={index}>
              <Image
                source={picture.uri}
                style={{
                  width: width - BORDER_RADIUS,
                  height:
                    ((width - BORDER_RADIUS) * picture.height) / picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        {/* Slide data put here in like backgroud color and title */}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}>
          {/* Slide data  */}
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        {/* pagination under the slide  */}
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
            {/* data display under the slide subslide data conenct */}
            {slides.map(({subTitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  onPress={() => {
                    if (last) {
                      console.log('Yha aya');
                      navigation.navigate(routes.GETSTARTED);
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                  key={index}
                  {...{subTitle, description, last}}
                />
              );
            })}
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
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
});
export default OnBordingView;

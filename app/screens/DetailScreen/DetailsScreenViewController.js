import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import styles from './styles';
import css from '../../Styles/Styles';
import {
  FONT_Regular,
  FONT_SEMIBOLD,
  FONT_LIGHT,
  FONT_BOLD,
} from '../../config/Constant';
import colors from '../../config/colors';
import DiscripationViewController from './DiscripationViewController/DiscripationViewController';
import FeatureViewController from './FeatureViewController/FeatureViewController';
import ReviewsViewController from './ReviewsViewController/ReviewsViewController';
import AIcon from 'react-native-vector-icons/MaterialIcons';

export default function DetailsScreenViewController(props) {
  const {item, from} = props.route.params;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [counter, setCounter] = React.useState(-2);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  const renderStep = () => {
    return (
      <View
        style={{alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
        <TouchableOpacity
          style={{height: 25, width: 64, top: 5, marginHorizontal: 10}}
          onPress={() => props.navigation.goBack()}>
          <Image source={require('../../assets/icons/backBtnTasks.png')} />
        </TouchableOpacity>
        {from === 'Shirt' ? (
          <View style={{marginHorizontal: 40}}>
            <Text style={styles.headerStep}>
              STEP 1
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerLight}> {''} STEP 2</Text>
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerLight}> {''} STEP 3</Text>
            </Text>
          </View>
        ) : from === 'Pants' ? (
          <View style={{marginHorizontal: 40}}>
            <Text style={styles.headerLight}>
              STEP 1
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerStep}> {''} STEP 2</Text>
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerLight}> {''} STEP 3</Text>
            </Text>
          </View>
        ) : (
          <View style={{marginHorizontal: 40}}>
            <Text style={styles.headerLight}>
              STEP 1
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerLight}> {''} STEP 2</Text>
              <View>
                <Text style={{color: colors.lightGrey}}> _ </Text>
              </View>
              <Text style={styles.headerStep}> {''} STEP 3</Text>
            </Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled>
      {renderStep()}
      <View
        style={{
          height: 250,
          overflow: 'hidden',
          marginTop: 5,
          borderRadius: 10,
        }}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          //backgroundColor: '#F8F8F8',
          marginBottom: 10,
        }}>
        <View
          style={{
            marginTop: 10,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.white,
            elevation: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 16,
              fontFamily: FONT_SEMIBOLD,
              color: colors.onBoradingScreen3,
            }}>
            M
          </Text>
        </View>
        <Text
          style={{
            marginTop: 5,
            fontFamily: FONT_BOLD,
            fontSize: 18,
            color: colors.primary,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontFamily: FONT_Regular,
            fontSize: 14,
            color: colors.black,
          }}>
          Rs {item.price}
        </Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={20}
          onFinishRating={ratingCompleted}
          ratingColor="#3498db"
          ratingBackgroundColor="#c8c7c8"
          style={{paddingVertical: 5}}
          //readonly={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: 5,
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        <TouchableOpacity
          onPress={() => {
            setLiked(!liked);
          }}>
          <AIcon
            name={liked ? 'favorite' : 'favorite-border'}
            size={25}
            color={liked ? 'red' : 'black'}></AIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'transparent'}]}>
          <Text
            style={{
              fontFamily: FONT_BOLD,
              fontSize: 14,
              color: colors.bluelight,
              marginRight: -20,
            }}>
            Complete Look
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{fontFamily: FONT_BOLD, fontSize: 14, color: colors.white}}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
      <SegmentedControlTab
        values={['Discripation', 'Features', 'Reviews']}
        tabStyle={css.segmentTabStyle}
        activeTabStyle={css.activeSegtmentTabStyle}
        selectedIndex={selectedIndex}
        tabsContainerStyle={css.tabsContainerStyle}
        tabTextStyle={css.tabTextStyle}
        activeTabTextStyle={css.activeTabTextStyel}
        onTabPress={(index) => handleIndexChange(index)}
      />
      {selectedIndex === 0 ? (
        <DiscripationViewController />
      ) : selectedIndex === 1 ? (
        <FeatureViewController item={item} />
      ) : (
        <ReviewsViewController />
      )}
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

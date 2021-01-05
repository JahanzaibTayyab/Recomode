import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import css from '../../../../Styles/Styles';
import colors from '../../../../config/colors';
import {
  FONT_BOLD,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../../../config/Constant';
import {IMAGEASSETS} from './../../../../assets/images/index';
export default function index(props) {
  const [data, setData] = React.useState({
    t2:
      'Chest Measure horizontally under the ampits ariund the fullest of the chest and shoulder blades',
    t3:
      'Waist Measure the waist circumference at the smallest part of the waist, often at the belly button',
    t4:
      'Arm Length: Measure the distance from the shoulder ball and socket joint to the wrist bone',
    t5: 'INSIDE LEG: Measure from the ankle bone to the groin.',
    t6:
      'Stand up straight. Make sure your outer garments are removed because you need to measure on the skin and not over clothing to ensure you get the most accurate measurement',
    t7: 'Locate the middle part of the rib cage and the top of the hip bone',
    t8:
      'Place the tape measure at that middle point and then wrap it around the natural waist with one end overlapping the other',
    t9: 'Breathe normally and record the measurements accordingly',
    t10:
      'The chest is the most important body part for jacket, shirt or suit jacket measurement',
    t11: 'Stand up straight, relax your arms at your side.',
    t12:
      'Ideally ask your mum, spouse, or best friend, to wrap the tape measure around your chest area.',
    t13:
      'Make sure the tape measure has a little room (max. an inch) to move. Depending on the type of jacket (casual vs. formal) you can add an inch (casual can be looser).',
    t14:
      'Measure horizontally around the body at the strongest part of the chest with a tape measure',
    t15:
      'The hip is measured in the same way as described above for the chest but around your hip. Measure horizontally at the strongest part of the buttocks.',
    t16:
      'Please take off your shoes as measurements need to be made without shoes, from head to toe. The recommended measuring point is the door frame in which you can stand up straight',
  });
  return (
    <>
      <View
        style={[css.topBarView, {flexDirection: 'column', marginBottom: 20}]}>
        <Text
          style={{
            fontFamily: FONT_BOLD,
            fontSize: 24,
            textAlign: 'center',
            color: colors.black,
            marginHorizontal: 25,
            top: 15,
          }}>
          {' '}
          Body Measuremnts{' '}
        </Text>
        <TouchableOpacity
          style={{height: 25, width: 60, top: 15, marginHorizontal: 5}}
          onPress={() => props.navigation.goBack()}>
          <Image
            source={require('../../../../assets/icons/backBtnTasks.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <ScrollView
          style={{flex: 1, backgroundColor: colors.white, top: 5}}
          showsVerticalScrollIndicator={false}>
          <View style={{height: 300, overflow: 'hidden', width: '100%'}}>
            <Image
              source={IMAGEASSETS.bodySize}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.groupTitle}>Getting the Right Fit</Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              2.
              <Text style={styles.endText}> {data.t2}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              3.
              <Text style={styles.endText}> {data.t3}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              5.
              <Text style={styles.endText}> {data.t4}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              6.
              <Text style={styles.endText}> {data.t5}</Text>
            </Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.groupTitle}>How to Measure Waist of Men?</Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              1.<Text style={styles.endText}> {data.t6}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              2.<Text style={styles.endText}> {data.t7}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              3.<Text style={styles.endText}> {data.t8}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              4.<Text style={styles.endText}> {data.t9}</Text>
            </Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.groupTitle}>
              How to Measure Chest Size of Men?
            </Text>
            <Text style={styles.endText}> {data.t10}</Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              1.<Text style={styles.endText}> {data.t11}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              2.<Text style={styles.endText}> {data.t12}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              3.<Text style={styles.endText}> {data.t13}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              4.<Text style={styles.endText}> {data.t14}</Text>
            </Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.groupTitle}>How to measure Hip or Height?</Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              Hip measurement : <Text style={styles.endText}> {data.t15}</Text>
            </Text>
            <Text
              style={{
                color: colors.black,
                marginTop: 5,
              }}>
              Height measurement :{' '}
              <Text style={styles.endText}> {data.t16}</Text>
            </Text>
          </View>
          <Text></Text>
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 5,
    marginTop: 5,
  },
  head: {height: 40, backgroundColor: colors.onBoradingScreen1},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: colors.primary},
  row: {height: 35},
  headtext: {
    textAlign: 'center',
    fontFamily: FONT_SEMIBOLD,
    fontSize: 12,
    color: colors.black,
  },
  titletext: {
    textAlign: 'center',
    fontFamily: FONT_SEMIBOLD,
    fontSize: 12,
    color: colors.white,
  },
  text: {
    textAlign: 'center',
    fontFamily: FONT_Regular,
    fontSize: 12,
    color: colors.black,
  },
  endText: {
    marginTop: 10,
    fontFamily: FONT_LIGHT,
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 10,
  },
  groupTitle: {
    marginTop: 10,
    fontFamily: FONT_BOLD,
    fontSize: 20,
    color: colors.black,
  },
  wieghtTitle: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: FONT_SEMIBOLD,
    color: colors.black,
  },
});

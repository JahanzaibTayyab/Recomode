import React from 'react';
import {View, Text} from 'react-native';

import colors from '../../config/colors';
import Button from '../../components/Button';
import styles from './styles';
const loose = 'M';
const regular = 'S';
const tight = 'XS';

function HeightView() {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Text style={styles.headertext}>COMPLETE</Text>
      </View>
      <View style={styles.sizecontainer}>
        <View style={styles.sizeheader}>
          <Text style={styles.sizeheadertitle}>YOUR RECOMMENDED SIZE</Text>
        </View>
        <View style={styles.boxcontainer}>
          <View
            style={[styles.box, {backgroundColor: colors.onBoradingScreen1}]}>
            <Text style={styles.boxinnertext}>{tight}</Text>
            <View>
              <Text style={styles.boxoutertext}>Tight fit</Text>
            </View>
          </View>
          <View
            style={[
              styles.box,
              {
                width: 80,
                height: 80,
                top: -15,
                backgroundColor: colors.onBoradingScreen2,
              },
            ]}>
            <Text style={styles.boxinnertext}>{regular}</Text>
            <View>
              <Text style={[styles.boxoutertext, {top: 30}]}>Regular fit</Text>
            </View>
          </View>
          <View
            style={[styles.box, {backgroundColor: colors.onBoradingScreen3}]}>
            <Text style={styles.boxinnertext}>{loose}</Text>
            <View>
              <Text style={styles.boxoutertext}>Losse fit</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.footertext}>
          Your
          <Text style={{fontFamily: 'SFProText-Semibold'}}>
            {' '}
            Recomode Profile{' '}
          </Text>
          is completed.
        </Text>
        <Text style={styles.footertext}>
          Outfits recommendation are now available
        </Text>
        <View style={styles.footerbutton}>
          <Button title="Go HOME" titlecolor="white" width="70%" />
        </View>
      </View>
    </View>
  );
}
export default HeightView;

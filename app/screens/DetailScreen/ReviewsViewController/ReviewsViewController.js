import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import Star from './Star';

const PercentageBar = ({starText, percentage}) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
  }, [percentage]);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Text style={styles.progressText}>{starText}</Text>
      <View style={styles.progressMiddle}>
        <View style={styles.progressWrap}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>
      <Text style={styles.progressPercentText}>{percentage}%</Text>
    </View>
  );
};

export default function ReviewsViewController(props) {
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <Text style={styles.title}>Customer reviews</Text>
        <View style={styles.totalWrap}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </View>
          <Text>4.7 out of 5</Text>
        </View>
        <Text style={styles.amountText}>
          {Math.floor(Math.random() * 100) + 1} customer ratings
        </Text>
        <View style={{marginTop: 40}}>
          <View style={styles.spacer}>
            <PercentageBar starText="5 star" percentage={84} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="4 star" percentage={9} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="3 star" percentage={4} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="2 star" percentage={2} />
          </View>
          <View style={styles.spacer}>
            <PercentageBar starText="1 star" percentage={1} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  reviewContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 40,
    minWidth: '100%',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    shadowColor: 'rgba(193, 211, 251, 0.5)',
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#323357',
    textAlign: 'center',
  },
  totalWrap: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: '#F5F8FF',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  amountText: {
    fontSize: 16,
    color: '#595B71',
    textAlign: 'center',
  },
  howWeCalculate: {
    fontSize: 15,
    color: '#2A5BDA',
    textAlign: 'center',
  },
  spacer: {
    marginBottom: 14,
  },
  progressText: {
    width: 50,
    fontSize: 14,
    color: '#2A5BDA',
  },
  progressPercentText: {width: 40, fontSize: 14, color: '#323357'},
  progressMiddle: {
    height: 15,
    flex: 1,
    marginHorizontal: 10,
  },
  progressWrap: {
    backgroundColor: '#F5F8FF',
    borderRadius: 18,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 2,
  },
  progressBar: {
    flex: 1,
    shadowOffset: {width: 0, height: 0},
    shadowColor: '#ffcc48',
    shadowOpacity: 1.0,
    shadowRadius: 4,
    backgroundColor: '#FFCC48',
    borderRadius: 18,
    minWidth: 5,
  },
});

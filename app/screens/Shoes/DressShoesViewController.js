import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import Modal from 'react-native-modal';
import firestore from '@react-native-firebase/firestore';

import {images, icons, COLORS, FONTS, SIZES} from './constants';
import Card from '../../components/Card';
import colors from '../../config/colors';
import Button from '../../components/Button';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/stylesheet/styles';
import {FlatGrid} from 'react-native-super-grid';
import {
  FONT_ITALIC,
  FONT_Regular,
  FONT_SEMIBOLD,
  FONT_BOLD,
  FONT_MEDIUM,
  FONT_LIGHT,
} from '../../config/Constant';
import {connect} from 'react-redux';
const DressShoesViewController = (props) => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showComplateLookModal, setComplateLookModal] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [counter, setCounter] = React.useState(-2);
  const [dataSource, setDataSource] = React.useState([]);

  // Dummy Data
  const [trending, setTrending] = React.useState([]);

  const [recentlyViewed, setRecentlyViewed] = React.useState(null);
  const fetchData = () => {
    const subscriber = firestore()
      .collection('shoes')
      .where('type', '==', 'Dress Shoes')
      .limit(5)
      .onSnapshot((querySnapshot) => {
        const shoes = [];
        querySnapshot.forEach((documentSnapshot) => {
          shoes.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setDataSource(shoes);
        const TD = [];
        const RV = [];
        for (var x = 0; x < 4; x++) {
          TD.push(shoes[x]);
        }
        for (var x = 0; x < 3; x++) {
          RV.push(shoes[x]);
        }
        setTrending(TD);
        setRecentlyViewed(RV);
        console.log('Returned from Firebase ', shoes);
        console.log('Total : ', shoes.length - 1);
      });
    return () => subscriber();
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  // Render

  const renderRecentView = () => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            marginTop: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
            height: 300,
            marginTop: -5,
            marginBottom: 20,
          },
          styles.recentContainerShadow,
        ]}>
        <View style={{width: 70, marginLeft: SIZES.base}}>
          <Image
            source={images.recentlyViewedLabel}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
            justifyContent: 'center',
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            data={recentlyViewed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>
    );
  };
  function renderTrendingShoes(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    } else {
      trendingStyle = {};
    }

    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...trendingStyle,
        }}
        onPress={() => {
          props.navigation.navigate('DetailScreen', {
            item,
            from: 'Shoes',
          });
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.h5}}>{item.type}</Text>

        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              backgroundColor: item.color,
            },
            styles.trendingShadow,
          ]}>
          <View style={{height: '35%', justifyContent: 'space-between'}}>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              {item.title}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>{item.price}</Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
          }}>
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>

        <Image
          source={{uri: item.img}}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            transform: [{rotate: '-15deg'}],
          }}
        />
      </TouchableOpacity>
    );
  }
  const renderRecomendationViwes = () => {
    return (
      <FlatGrid
        itemDimension={130}
        data={dataSource}
        style={{
          flex: 1,
        }}
        spacing={10}
        renderItem={({item, index}) => (
          <>
            <Card
              index={index}
              title={item.title}
              subTitle={item.brand}
              image={item.img}
              brandlogo={item.brandLogo}
              onPress={() => {
                props.navigation.navigate('DetailScreen', {
                  item,
                  from: 'Shoes',
                });
              }}
            />
          </>
        )}
      />
    );
  };

  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setSelectedItem(item);
          setComplateLookModal(true);
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={{uri: item.img}}
            resizeMode="contain"
            style={{
              width: '100%',
              height: 100,
              justifyContent: 'center',
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>{item.name}</Text>
          <Text style={{...FONTS.h3}}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: SIZES.radius,
            marginHorizontal: SIZES.padding,
            ...FONTS.largeTitleBold,
          }}>
          TRENDING
        </Text>

        <View style={{height: 260, marginTop: SIZES.radius}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trending}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => renderTrendingShoes(item, index)}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONT_SEMIBOLD,
              color: colors.bitblue,
              marginHorizontal: 16,
            }}>
            Our Recomendations
          </Text>
        </View>
        {renderRecomendationViwes()}
      </View>
      {selectedItem && (
        <View>
          <Modal
            isVisible={showComplateLookModal}
            coverScreen={true}
            onSwipeComplete={() => setComplateLookModal(false)}
            onBackButtonPress={() => setComplateLookModal(false)}
            backdropColor={colors.bitblue}
            backdropOpacity={0.5}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}>
            <View style={styles.modelCard}>
              <TouchableOpacity
                style={{marginHorizontal: 10, marginTop: 10}}
                onPress={() => setComplateLookModal(false)}>
                <Image
                  source={require('../../images/icons/icon-backs.png')}
                  resizeMode="contain"
                  style={{width: 25}}
                />
              </TouchableOpacity>
              <View style={{alignItems: 'center', marginTop: -20}}>
                <Text
                  style={{
                    fontFamily: FONT_LIGHT,
                    fontSize: 8,
                    color: colors.primary,
                  }}>
                  STEP 1
                  <View>
                    <Text style={{color: colors.lightGrey}}> _ </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: FONT_LIGHT,
                      fontSize: 8,
                      color: colors.lightGrey,
                    }}>
                    {' '}
                    {''} STEP 2
                  </Text>
                  <View>
                    <Text style={{color: colors.lightGrey}}> _ </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: FONT_LIGHT,
                      fontSize: 8,
                      color: colors.lightGrey,
                    }}>
                    {' '}
                    {''} STEP 3
                  </Text>
                </Text>
              </View>
              <ScrollView>
                <Image
                  style={{
                    width: '100%',
                    height: 300,
                    marginTop: 10,
                  }}
                  source={{uri: selectedItem.img}}
                  resizeMode="contain"
                />
                <View
                  style={{
                    marginHorizontal: 25,
                    marginBottom: 10,
                    marginTop: 20,
                  }}>
                  <View style={styles.modelInner}>
                    <Image
                      source={{uri: selectedItem.brandlogo}}
                      resizeMode="contain"
                      style={{
                        position: 'absolute',
                        bottom: 10,
                        width: '80%',
                        height: 100,
                      }}
                    />
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setLiked(!liked);
                    }}>
                    <View style={styles.modrlHeart}>
                      <AIcon
                        name="favorite"
                        size={25}
                        color={liked ? 'red' : 'white'}></AIcon>
                    </View>
                  </TouchableWithoutFeedback>
                  <Text
                    style={{
                      marginBottom: 5,
                      fontFamily: FONT_SEMIBOLD,
                      color: colors.bitblue,
                    }}
                    numberOfLines={1}>
                    {selectedItem.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT_MEDIUM,
                      fontSize: 12,
                      color: '#333333',
                    }}
                    numberOfLines={2}>
                    {selectedItem.type}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontFamily: FONT_SEMIBOLD}}>Size:</Text>
                      <Text
                        style={{
                          fontFamily: FONT_MEDIUM,
                          marginHorizontal: 10,
                          color: colors.bitblue,
                        }}>
                        {selectedItem.size}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontFamily: FONT_SEMIBOLD,
                          marginHorizontal: 10,
                        }}>
                        Color:
                      </Text>
                      <View
                        style={[
                          {width: 30, height: 20, borderRadius: 5},
                          {backgroundColor: selectedItem.color},
                        ]}></View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 5,
                      marginTop: 5,
                    }}>
                    <FeatherIcons name="heart" />
                    <Text
                      style={{
                        fontFamily: FONT_LIGHT,
                        fontSize: 12,
                        marginHorizontal: 10,
                      }}>
                      {selectedItem.like}
                    </Text>
                  </View>
                  <ScrollView style={{height: 30, marginTop: 5}}>
                    <Text
                      numberOfLines={2}
                      style={{fontFamily: FONT_LIGHT, fontSize: 12}}>
                      {selectedItem.description}
                    </Text>
                  </ScrollView>
                  <View style={{marginTop: -15, flexDirection: 'row'}}>
                    <Button
                      title="Add to Cart"
                      titlecolor="white"
                      buttoncolor="bitblue"
                      fontFamily={FONT_Regular}
                      width="50%"
                      onPress={() => {
                        props.addCartItem(selectedItem);
                      }}
                    />
                    <Button
                      title="Complete Look"
                      titlecolor="white"
                      fontFamily={FONT_Regular}
                      width="50%"
                      onPress={() => {
                        setComplateLookModal(false);
                        //setActivityIndicator(!showActivityIndicator)
                        const color = selectedItem.color;
                        console.log('color', color);
                        setTimeout(function () {
                          props.navigation.navigate('Pant', {color});
                        }, 700);
                        // props.navigation.navigate("Pant")
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </View>
      )}
    </ScrollView>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (product) => dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};
export default connect(null, mapDispatchToProps)(DressShoesViewController);

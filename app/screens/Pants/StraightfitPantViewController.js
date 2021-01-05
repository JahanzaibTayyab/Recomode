import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import firestore from '@react-native-firebase/firestore';
import styles from '../../assets/stylesheet/styles';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../config/Constant';
import Header from '../../components/Header';
import colors from '../../config/colors';
import {Avatar} from 'react-native-paper';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import MiniCard from '../../components/MiniCard';
import PantColors from './../../api/PantColors';
import {FlatGrid} from 'react-native-super-grid';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import AIcon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const StraightFitPantsController = (props) => {
  const data = props.route.params;
  const [pantColor, setPantColor] = React.useState([
    'khaki',
    'skin',
    'offWhite',
    'black',
    'grey',
    'darkGrey',
    'blue',
    'glacierBlue',
    'tunaBlue',
    'khaki',
  ]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showComplateLookModal, setComplateLookModal] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [counter, setCounter] = React.useState(-2);
  const [popularData, setPopularData] = React.useState(null);
  const [dataSource, setDataSource] = React.useState([]);
  const recomendationdata = () => {
    const subscriber = firestore()
      .collection('pants')
      .where('type', '==', 'StraightFit')
      .where('color', 'in', pantColor)
      .onSnapshot((querySnapshot) => {
        const pants = [];
        querySnapshot.forEach((documentSnapshot) => {
          pants.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setDataSource(pants);
        console.log('Returned from Firebase ', pants);
        console.log('Total : ', pants.length - 1);
      });
    return () => subscriber();
  };
  React.useEffect(() => {
    recomendationdata();
  }, []);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
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
          <Card
            index={index}
            title={item.title}
            subTitle={item.brand}
            image={item.img}
            brandlogo={item.brandLogo}
            onPress={() => {
              props.navigation.navigate('DetailScreen', {item, from: 'Pants'});
            }}
          />
        )}
      />
    );
  };
  return (
    <View style={[styles.container, {backgroundColor: '#f0f2f5'}]}>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScrollToTop={() => console.log('yha')}>
          <View style={{marginBottom: 5, backgroundColor: 'white'}}>
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
        </ScrollView>
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
                        setTimeout(function () {
                          props.navigation.navigate('Shoes');
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
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCartItem: (product) => dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};
export default connect(null, mapDispatchToProps)(StraightFitPantsController);

import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  Platform,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from './styles';
import {IMAGEASSETS} from '../../../assets/images';
import FastImage from 'react-native-fast-image';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Nav from '../../../components/Nav';
import useAuth from '../../../auth/useAuth';
import colors from '../../../config/colors';
import {
  FONT_BOLD,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../../config/Constant';
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const ProfileViewController = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isGroupClick, setIsGroupClick] = React.useState(false);
  const [modelData, setModelData] = React.useState({});
  const {user} = useAuth();
  console.log(user);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    return () => {
      unsubscribe;
    };
  }, [navigation]);
  const toggleGroupClickView = () => {
    setIsGroupClick(!isGroupClick);
  };
  const renderNameView = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <View style={styles.image}>
          <FastImage
            style={{width: '100%', height: '100%'}}
            source={{
              uri: user.imageUrl,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
        <View style={{flexDirection: 'column', left: -20}}>
          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.emailText}>{user.email}</Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'column',
            marginTop: 10,
          }}>
          <TouchableOpacity style={styles.edit}>
            <Text style={styles.editText}>Edit</Text>
            <FeatherIcon name="edit-2" color={colors.COLOR_FILLED} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderHairView = (item) => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item}
          renderItem={({item}) => (
            <View
              style={[
                styles.hiarContainer,
                item.color === 'blond'
                  ? {backgroundColor: '#FAF0BE'}
                  : {backgroundColor: item.color},
              ]}>
              <Text
                style={[
                  {fontFamily: FONT_Regular, fontSize: 12, color: colors.white},
                  item.color === 'white' ||
                  item.color === 'other' ||
                  item.color === 'blond'
                    ? {color: colors.black}
                    : {color: colors.white},
                ]}>
                {item.color}
              </Text>
              <Text
                style={[
                  {fontFamily: FONT_Regular, fontSize: 12, color: colors.white},
                  item.color === 'white' ||
                  item.color === 'other' ||
                  item.color === 'blond'
                    ? {color: colors.black}
                    : {color: colors.white},
                ]}>
                Confidence
              </Text>
              <Text
                style={[
                  {fontFamily: FONT_SEMIBOLD, fontSize: 12},
                  item.color === 'white' ||
                  item.color === 'other' ||
                  item.color === 'blond'
                    ? {color: colors.black}
                    : {color: colors.white},
                ]}>
                {item.confidence}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const renderAccessoriesView = (item) => {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={item}
          renderItem={({item}) => (
            <>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 30,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontFamily: FONT_SEMIBOLD, fontSize: 12}}>
                    {item.type}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONT_Regular,
                      fontSize: 12,
                      marginBottom: 10,
                    }}>
                    {item.confidence}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomColor: '#00A9FF',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                    marginHorizontal: 40,
                  }}></View>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const dataView = () => {
    return (
      <View
        style={{
          marginTop: 5,
          flex: 1,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <View
          style={{
            marginTop: 5,
            flex: 1,
          }}>
          <Text style={styles.acceseries}>Hair</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
              marginBottom: 5,
            }}>
            <Text style={styles.mediumText}>Bald</Text>
            <Text style={styles.regularText}>
              {user.faceAttributes.hair.bald}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
            }}>
            <Text style={styles.mediumText}>Invisible</Text>
            {user.faceAttributes.hair.invisible ? (
              <Text
                style={{
                  fontFamily: FONT_Regular,
                  fontSize: 12,
                  color: colors.primary,
                }}>
                true
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: FONT_Regular,
                  fontSize: 12,
                  color: colors.danger,
                }}>
                false
              </Text>
            )}
          </View>
          {renderHairView(user.faceAttributes.hair.hairColor)}
          <View style={styles.genderView}></View>
          <Text style={styles.acceseries}>Facial Hair</Text>
          <View style={styles.view}>
            <Text style={styles.mediumText}>Moustache</Text>
            <Text style={styles.regularText}>
              {user.faceAttributes.facialHair.moustache}
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.mediumText}>Beard</Text>
            <Text style={styles.regularText}>
              {user.faceAttributes.facialHair.beard}
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.mediumText}>Sideburns</Text>
            <Text style={styles.regularText}>
              {user.faceAttributes.facialHair.sideburns}
            </Text>
          </View>
          <View style={styles.glassesContainer}>
            <Text style={styles.semiText}>Glasses</Text>
            <Text style={styles.regularText}>
              {user.faceAttributes.glasses}
            </Text>
          </View>
          <Text style={styles.acceseries}>Accessories</Text>
          <View style={{flex: 1, width: '100%'}}>
            {renderAccessoriesView(user.faceAttributes.accessories)}
          </View>
        </View>
      </View>
    );
  };
  const renderRecommendColor = () => {
    return user.shirtColors.map((data) => {
      return (
        <View
          style={[
            {
              marginHorizontal: 2,
              borderRadius: 10,
              marginTop: 10,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: data,
            },
          ]}>
          <Text style={styles.colorName}>{data}</Text>
        </View>
      );
    });
  };
  return (
    <View style={styles.conatiner}>
      <Nav navigation={navigation} />
      <ImageBackground
        blurRadius={60}
        source={IMAGEASSETS.buubleImage}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="stretch">
        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            backgroundColor: 'transparent',
          }}
          showsVerticalScrollIndicator={false}>
          {renderNameView()}
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <View style={styles.genderView}>
              <Text style={styles.semiText}>Gender</Text>
              <Text style={styles.regularText}>
                {user.faceAttributes.gender}
              </Text>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.semiText}>Age</Text>
              <Text style={styles.regularText}>{user.faceAttributes.age}</Text>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.semiText}>Weight</Text>
              <Text style={styles.regularText}>
                {Math.floor(user.weight * 0.453592)} Kg
              </Text>
            </View>
            <View style={styles.genderView}>
              <Text style={styles.semiText}>Height</Text>
              <Text style={styles.regularText}>{user.height} F</Text>
            </View>
          </View>
          {dataView()}
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              marginTop: 10,
              flex: 1,
              marginHorizontal: 10,
            }}>
            <View>
              <Text style={styles.recommendedColor}>Recommended Colors</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                flexWrap: 'wrap',
                marginBottom: 10,
                marginHorizontal: 10,
              }}>
              {renderRecommendColor()}
            </View>
            <Text></Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default ProfileViewController;

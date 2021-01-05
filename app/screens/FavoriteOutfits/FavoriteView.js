import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';

import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Outfit from './Outfit';
const {width, height} = Dimensions.get('window');

import refreshdata from './data';
const outfits = [
  {
    id: 1,
    image: require('../../../sampleImages/1.jpg'),
    aspectRatio: 1,
  },
  {
    id: 2,
    image: require('../../../sampleImages/2.jpg'),
    aspectRatio: 120 / 145,
  },
  {
    id: 3,
    image: require('../../../sampleImages/3.jpg'),
    aspectRatio: 210 / 145,
  },
  {
    id: 4,
    image: require('../../../sampleImages/4.jpg'),
    aspectRatio: 160 / 145,
  },
  {
    id: 5,
    image: require('../../../sampleImages/5.jpg'),
    aspectRatio: 1,
  },
  {
    id: 6,
    image: require('../../../sampleImages/6.jpg'),
    aspectRatio: 1,
  },
  {
    id: 7,
    image: require('../../../sampleImages/7.jpg'),
    aspectRatio: 1,
  },
  {
    id: 8,
    image: require('../../../sampleImages/8.jpg'),
    aspectRatio: 1,
  },
  {
    id: 9,
    image: require('../../../sampleImages/9.jpg'),
    aspectRatio: 1,
  },
  {
    id: 10,
    image: require('../../../sampleImages/10.jpg'),
    aspectRatio: 1,
  },
  {
    id: 11,
    image: require('../../../sampleImages/11.jpg'),
    aspectRatio: 1,
  },
  {
    id: 12,
    image: require('../../../sampleImages/12.jpg'),
    aspectRatio: 120 / 145,
  },
  {
    id: 13,
    image: require('../../../sampleImages/13.jpg'),
    aspectRatio: 210 / 145,
  },
  {
    id: 14,
    image: require('../../../sampleImages/14.jpg'),
    aspectRatio: 160 / 145,
  },
  {
    id: 15,
    image: require('../../../sampleImages/15.jpg'),
    aspectRatio: 1,
  },
  {
    id: 16,
    image: require('../../../sampleImages/16.jpg'),
    aspectRatio: 1,
  },
  {
    id: 17,
    image: require('../../../sampleImages/17.jpg'),
    aspectRatio: 1,
  },
  {
    id: 18,
    image: require('../../../sampleImages/18.jpg'),
    aspectRatio: 1,
  },
  {
    id: 19,
    image: require('../../../sampleImages/19.jpg'),
    aspectRatio: 1,
  },
  {
    id: 20,
    image: require('../../../sampleImages/20.jpg'),
    aspectRatio: 1,
  },
];
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({id: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};
function FavoriteView(props) {
  const [colum, setColum] = useState(3);
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState(outfits);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 40) {
      setListData(refreshdata);
      setRefreshing(false);
    } else {
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          numColumns={colum}
          data={formatData(listData, colum)}
          keyExtractor={(outfit) => outfit.id.toString()}
          renderItem={({item}) => (
            <Outfit
              imagewidth={(width - 8 * colum) / colum}
              image={item.image}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}
export default FavoriteView;

import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../config/colors';
import css from '../../../Styles/Styles';
import {FlatGrid} from 'react-native-super-grid';
import Card from '../../../components/Card';

export default function CategoriesDetailContainer(props) {
  const {data, from} = props.route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#f0f2f5'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginHorizontal: 10,
          backgroundColor: colors.white,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{height: 24, width: 24, marginTop: 38, marginRight: 10}}
          onPress={() => props.navigation.goBack()}>
          <FeatherIcon
            name="chevron-left"
            size={28}
            color={colors.COLOR_FILLED}
          />
        </TouchableOpacity>
        <View
          style={[
            css.viewSearchBarOnTopBar,
            {marginBottom: 20, marginRight: 30},
          ]}>
          <TextInput
            placeholder="Search"
            style={css.textInputSearchBar}></TextInput>
          <FontAwesome name="search" size={16} color={colors.COLOR_BORDER} />
        </View>
      </View>
      <FlatGrid
        itemDimension={130}
        data={data}
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
              props.navigation.navigate('DetailScreen', {item, from});
            }}
          />
        )}
      />
    </View>
  );
}

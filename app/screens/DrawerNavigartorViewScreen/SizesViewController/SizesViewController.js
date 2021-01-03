import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import styles from './styles';
import TopsViewController from './TopsViewController';
import BottomViewController from './BottomViewController';
import BeltsViewController from './BeltsViewController';
import InseamsViewController from './InseamsViewController';
import HeightAndWeightViewController from './HeightAndWeightViewController';
import css from '../../../Styles/Styles';
import Nav from '../../../components/Nav';
export default function SizesViewController(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={styles.conatiner}>
      <Nav navigation={props.navigation} />
      <View style={styles.conatiner}>
        <SegmentedControlTab
          values={['Size', 'Tops', 'Bottoms', 'Belts', 'Inseams']}
          tabStyle={css.segmentTabStyle}
          activeTabStyle={css.activeSegtmentTabStyle}
          selectedIndex={selectedIndex}
          tabsContainerStyle={css.tabsContainerStyle}
          tabTextStyle={css.tabTextStyle}
          activeTabTextStyle={css.activeTabTextStyel}
          onTabPress={(index) => handleIndexChange(index)}
        />
        {selectedIndex === 0 ? (
          <HeightAndWeightViewController navigation={props.navigation} />
        ) : selectedIndex === 1 ? (
          <TopsViewController />
        ) : selectedIndex === 2 ? (
          <BottomViewController />
        ) : selectedIndex === 3 ? (
          <BeltsViewController />
        ) : (
          <InseamsViewController />
        )}
      </View>
    </View>
  );
}

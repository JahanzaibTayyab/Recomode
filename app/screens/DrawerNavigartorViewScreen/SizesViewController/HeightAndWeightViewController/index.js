import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import colors from '../../../../config/colors';
import {
  FONT_BOLD,
  FONT_SEMIBOLD,
  FONT_Regular,
  FONT_LIGHT,
  FONT_MEDIUM,
} from '../../../../config/Constant';
export default function index({navigation}) {
  const [group1TableHead, setGroup1TableHead] = React.useState([
    'Height',
    '130 & Less',
    '131-140',
    '141-150',
    '151-160',
  ]);
  const [group2TableHead, setGroup2TableHead] = React.useState([
    'Height',
    '161 - 170',
    '171-176',
    '177-182',
    '183-187',
  ]);
  const [group3TableHead, setGroup3TableHead] = React.useState([
    'Height',
    '188 - 194',
    '195-204',
    '205-214',
    '215-229',
    '230 & Up',
  ]);
  const [group1TableData, setGroup1TableData] = React.useState([
    ['XS', 'S', '', ''],
    ['XS', 'S', 'S', ''],
    ['XS', 'S', 'S', ''],
    ['XS', 'S', 'S', ''],
    ['S', 'S', 'S', 'M'],
    ['S', 'S', 'S', 'M'],
    ['S', 'S Long', 'S Long', 'M'],
    ['S', 'S Long', 'S Long', 'S Long'],
    ['S', 'S Long', 'S Long', 'S Long'],
    ['S', 'S Long', 'S Long', 'S Long'],
    ['', 'S Long', 'S Long', 'S Long'],
    ['', 'S Long', 'S Long', 'S Long'],
    ['', '', 'S Long', 'S Long'],
    ['', '', 'S Long', 'S Long'],
    ['', '', 'M Long', 'M Long'],
    ['', '', '', 'M Long'],
    ['', '', '', 'M Long'],
  ]);
  const [group2TableData, setGroup2TableData] = React.useState([
    ['M', 'M', 'M Large', 'M Large'],
    ['M', 'M', 'M', 'M Large'],
    ['M', 'M', 'M', 'M Large'],
    ['M', 'M', 'M', 'M Large'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['S Long ', 'M', 'M Large', 'M Large'],
    ['S Long ', 'M Long', 'M Large', 'M Large'],
    ['S Long ', 'M Long', 'M Large', 'M Large'],
    ['S Long ', 'M Long', 'M Large', 'M Large'],
    ['M Long ', 'M Long', 'M Large', 'M Large'],
    ['M Long ', 'M Long', 'M Long', 'M Large'],
    ['M Long ', 'M Long', 'M Long', 'M Large'],
  ]);
  const [group3TableData, setGroup3TableData] = React.useState([
    ['L', 'L', '', '', ''],
    ['L', 'L', '', '', ''],
    ['M Large', 'L', 'XL', '', ''],
    ['M Large', 'L', 'XL', 'XX Large', ''],
    ['M Large', 'L', 'XL', 'XX Large', 'XX Large'],
    ['M Large', 'L', 'XL', 'XX Large', 'XX Large'],
    ['M Large', 'L', 'XL', 'X Large', 'XX Large'],
    ['M Large', 'L', 'XL', 'X Large', 'XX Large'],
    ['M Large', 'L', 'XL', 'X Large', 'XX Large'],
    ['L', 'L', 'L', 'X Large', 'XX Large'],
    ['L', 'L', 'L', 'X Large', 'XX Large'],
    ['L', 'L', 'X-Large', 'XX Large', 'XX Large'],
    ['L', 'L', 'X-Large', 'XX Large', 'XX Large'],
  ]);
  const [group1TableTitle, setGroup1TableTitle] = React.useState([
    '5.1 and Less',
    '5.2',
    '5.3',
    '5.4',
    '5.5',
    '5.6',
    '5.7',
    '5.8',
    '5.9',
    '5.10',
    '5.11',
    '6',
    '6.1',
    '6.2',
    '6.3',
    '6.4',
    '6.5 & Up',
  ]);
  const [group2TableTitle, setGroup2TableTitle] = React.useState([
    '5.5',
    '5.6',
    '5.7',
    '5.8',
    '5.9',
    '5.10',
    '5.11',
    '6',
    '6.1',
    '6.2',
    '6.3',
    '6.4',
    '6.5 & Up',
  ]);
  return (
    <ScrollView style={styles.conatiner} showsVerticalScrollIndicator={false}>
      <View style={{marginHorizontal: 10}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: FONT_BOLD,
              fontSize: 16,
              color: colors.primary,
            }}>
            Note
          </Text>
          <Text style={styles.endText}>
            * Height in
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {' '}
              Feet{' '}
            </Text>
          </Text>
          <Text style={styles.endText}>
            * Weight in{' '}
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {' '}
              Pounds{' '}
            </Text>
          </Text>
          <Text style={styles.endText}>
            Men with longer legs and shorter torso should
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {' '}
              subtract 2 inches{' '}
            </Text>{' '}
            from their height.
          </Text>
          <Text style={styles.endText}>
            Men with shorter legs and longer torso should
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {' '}
              add 2 inches{' '}
            </Text>
            from their height.
          </Text>
          <Text style={styles.endText}>
            Men with Large chests or large shoulders should
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {' '}
              add 7 pounds
            </Text>{' '}
            to their weight.
          </Text>
          <Text style={styles.endText}>
            X ={'>'}
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {'  '}
              'Extra'
            </Text>
            {'   '}S ={'>'}
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {'  '}
              'Small'
            </Text>
            {'   '}M ={'>'}
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {'  '}
              'Medium'
            </Text>
            {'   '}L ={'>'}
            <Text style={{fontWeight: 'bold', fontFamily: FONT_BOLD}}>
              {'  '}
              'Long'
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MeasureHeight')}>
            <Text
              style={{
                fontFamily: FONT_BOLD,
                color: colors.danger,
                fontSize: 12,
                marginTop: 10,
              }}>
              How to measure Height and weight ?
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.groupTitle}>Group 1</Text>
      </View>
      <Text style={styles.wieghtTitle}>Weight</Text>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={group1TableHead}
          flexArr={[1, 1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headtext}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={group1TableTitle}
            style={styles.title}
            heightArr={[35, 35]}
            textStyle={styles.titletext}
          />
          <Rows
            data={group1TableData}
            flexArr={[1, 1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <Text style={[styles.groupTitle, {marginHorizontal: 10}]}>Group 2</Text>
      <Text style={styles.wieghtTitle}>Weight</Text>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={group2TableHead}
          flexArr={[1, 1, 1, 1, 1]}
          style={[styles.head, {backgroundColor: colors.COLOR_BORDER}]}
          textStyle={styles.headtext}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={group2TableTitle}
            style={styles.title}
            heightArr={[35, 35]}
            textStyle={styles.titletext}
          />
          <Rows
            data={group2TableData}
            flexArr={[1, 1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <Text style={[styles.groupTitle, {marginHorizontal: 10}]}>Group 3</Text>
      <Text style={styles.wieghtTitle}>Weight</Text>
      <Table borderStyle={{borderWidth: 1, marginEnd: 10}}>
        <Row
          data={group3TableHead}
          flexArr={[1, 1, 1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headtext}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={group2TableTitle}
            style={styles.title}
            heightArr={[35, 35]}
            textStyle={styles.titletext}
          />
          <Rows
            data={group3TableData}
            flexArr={[1, 1, 1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <Text></Text>
    </ScrollView>
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

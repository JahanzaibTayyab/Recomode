import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
export default function index() {
  const [tableHead, setTableHead] = React.useState([
    'Size',
    'Chest',
    'Waist',
    'Neck',
    'ArmLength',
  ]);
  const [tableData, setTableData] = React.useState([
    ['32-34', '26-28', '14.5', '30.5'],
    ['35-37', '29-31', '15', '31.75'],
    ['38-40', '32-34', '15.5', '33'],
    ['41-43', '35-36', '16-16.5', '34'],
    ['44-46', '37-40', '17-17.5', '35'],
    ['48-52', '41-44', '18-18.5', '35.75'],
    ['54-58', '45-48', '19-19.5', '36.5'],
  ]);
  const [tableTitle, setTableTitle] = React.useState([
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    '3XL',
  ]);
  return (
    <ScrollView style={styles.conatiner} showsVerticalScrollIndicator={false}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={tableHead}
          flexArr={[1, 1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headtext}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableTitle}
            style={styles.title}
            heightArr={[35, 35]}
            textStyle={styles.titletext}
          />
          <Rows
            data={tableData}
            flexArr={[1, 1, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
      <Text style={styles.endText}>
        *<Text>All measuremnts are in inches</Text>
      </Text>
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
    fontFamily: FONT_SEMIBOLD,
    fontSize: 12,
    color: colors.black,
    marginHorizontal: 10,
  },
});

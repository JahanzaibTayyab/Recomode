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
  const [tableHead, setTableHead] = React.useState(['Belt Size', 'Waist']);
  const [tableData, setTableData] = React.useState([
    ['up to 30'],
    ['31-33'],
    ['34-35'],
    ['36-37'],
    ['38-39'],
    ['40-41'],
    ['42-43'],
    ['44-45'],
    ['46-47'],
    ['48 and up'],
  ]);
  const [tableTitle, setTableTitle] = React.useState([
    '32',
    '34',
    '36',
    '38',
    '40',
    '42',
    '44',
    '46',
    '48',
    '50',
  ]);
  return (
    <ScrollView style={styles.conatiner} showsVerticalScrollIndicator={false}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={tableHead}
          flexArr={[1, 1]}
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
            flexArr={[1]}
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

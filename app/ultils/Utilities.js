
import { Platform, Dimensions, Alert } from 'react-native';
import constants from '../assets/stylesheet/Constants'
import { min } from 'react-native-reanimated';
export function formatDate(date, format, fromCalander) {
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var daysShort = [
    'Sn',
    'M',
    'T',
    'W',
    'R',
    'F',
    'S',
  ]

  var day;
  var dayS;
  var monthE;
  var currentDate;
  var year;

  if (fromCalander) {
    var dateString = date.split("-")
    currentDate = dateString[2];
    monthE = months[(dateString[1]) - 1];
    year = dateString[0];

  }
  else {
    day = days[date.getDay()];
    dayS = daysShort[date.getDay()]
    monthE = months[date.getMonth()];
    currentDate = date.getDate();
    year = date.getFullYear();
  }
  if (format === constants.DATE_FORMAT_MONTH_DATE_YEAR) {
    return `${monthE} ${currentDate}th, ${year}`;
  }
  else if (format === 'mm-dd') {
    return `${monthE} ${currentDate}th`;
  }
  else if (format === 'mm-yy') {
    return `${monthE} ${year}`;
  }
  else if (format === 'yy-mm-dd') {
    return `${year}-${date.getMonth() + 1}-${currentDate}`;
  }
  else if (format === 'dd-d') {
    return `${dayS}-${currentDate}`
  }

  if (day === 1) {
    return `${day}, ${monthE} ${currentDate}st`;
  }
  else if (day === 2) {
    return `${day}, ${monthE} ${currentDate}nd`;
  }
  else if (day === 3) {
    return `${day}, ${monthE} ${currentDate}rd`;
  }
  else {
    return `${day}, ${monthE} ${currentDate}th`;
  }


}

export function formatTime(timeStamp) {

  var t = new Date(timeStamp);
  var hours = t.getHours();
  var minutes = t.getMinutes();
  var newformat = t.getHours() >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format 
  hours = hours % 12;

  // To display "0" as "12" 
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var formatted =
    ('0' + hours).slice(-2)
    + ':' + ('0' + t.getMinutes()).slice(-2)
    + ' ' + newformat;




  return formatted

}

export function calculateRemainingTime(startedAt) {
  var remaingTime = new Date(startedAt).getTime() - new Date().getTime();    //Future date - current date
  const hours = Math.floor(remaingTime / (60 * 60 * 1000));
  const mins = Math.floor((remaingTime - (hours * 60 * 60 * 1000)) / (60 * 1000));
  var value = `${hours}hour, ${mins} minutes`
  return value
}
export function getNextDate(selectedDate) {


  const currentDayInMilli = new Date(selectedDate).getTime()
  const oneDay = 1000 * 60 * 60 * 24
  const nextDayInMilli = currentDayInMilli + oneDay
  const nextDate = new Date(nextDayInMilli)

  return nextDate

}
export function isRunningOniOS() {
  var blnResult = false;
  blnResult = Platform.OS === 'ios' ? true : false;
  return blnResult;
}

export function isRunningOniPhoneXSeries() {
  let d = Dimensions.get('window');
  const { height, width } = d;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
}

export function isValidString(strValue) {
  var blnResult = false;
  if (strValue != undefined) {
    if (typeof strValue === 'string') {
      if (strValue.trim() != '') {
        blnResult = true;
      }
    }
  }
  return blnResult;
}

export function checkAPICallStatus(statusCode) {
  if (statusCode == 200)
    return true;
  else
    return false;
}

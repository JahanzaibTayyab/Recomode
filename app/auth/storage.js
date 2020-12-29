import AsyncStorage from '@react-native-community/async-storage';

const saveKeyInUserDefaults = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    alert(error);
    console.log('Error saving data' + error);
  }
};
const getKeyFromUserDefaults = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    alert(error);
    console.log('Error saving data' + error);
  }
};
const saveJSONInUserDefaults = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    error(error);
    console.log('Error saving data' + error);
  }
};
const getJSONFromUserDefaults = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
    console.log('Error saving data' + e);
  }
};
const saveJSONInOrderDefaults = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    error(error);
    console.log('Error saving data' + error);
  }
};
const getJSONFromOrderDefaults = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
    console.log('Error saving data' + e);
  }
};
const saveJSONShippingDefaults = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    error(error);
    console.log('Error saving data' + error);
  }
};
const getJSONFromShippingDefaults = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
    console.log('Error saving data' + e);
  }
};
const saveJSONOnlinePaymentDefaults = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    error(error);
    console.log('Error saving data' + error);
  }
};
const getJSONFromOnlinePaymentDefaults = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
    console.log('Error saving data' + e);
  }
};
const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

export default {
  saveKeyInUserDefaults,
  getKeyFromUserDefaults,
  removeToken,
  saveJSONInUserDefaults,
  getJSONFromUserDefaults,
  saveJSONInOrderDefaults,
  getJSONFromOrderDefaults,
  saveJSONShippingDefaults,
  getJSONFromShippingDefaults,
  saveJSONOnlinePaymentDefaults,
  getJSONFromOnlinePaymentDefaults,
};

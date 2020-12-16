import constants from '../../assets/stylesheet/Constants';


export const callGetReq = async (url, callback) => {
  let fetchingURL = constants.API_SERCER_BASE_URL + url
  console.log(fetchingURL)
  await fetch(fetchingURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  })
    .then((response) => response.json())
    .then((responseJson) => {
      let statusCode = responseJson.code;

      callback(statusCode, responseJson.data);
    })
    .catch((error) => {
      //showAlert("Something went wrong")
    });
};

export const callPostReq = async (url, params, callback) => {


  var body = JSON.stringify(params);
  console.log(url)
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: body,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      let statusCode = responseJson.code;

      callback(statusCode, responseJson);

    })
    .catch((error) => {
      console.log("API error")
      //showAlert("Something went wrong")
    });
};

export const callGetReqForUserCityAndCountry = async (callback) => {
  let fetchingURL = constants.API_USER_CITY_COUNTRY
  console.log(fetchingURL)
  await fetch(fetchingURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      callback(responseJson);
    })
    .catch((error) => {
      console.log(error);
    });
};


import AsyncStore from "@react-native-community/async-storage";


const key = "8ba790f3-5acd-4a08-bc6a-97a36c124f29";
const key2 = "@MySuperStore:key2";

const storeUser = async (userinfo) => {
  console.log("User Info Call")
  try {
    await AsyncStore.setItem(key2, JSON.stringify(userinfo))
  } catch (error) {
    console.log("Error storing the UserToken token", error);
  }
};
const getUserInfo = async () => {
  try {
    return await AsyncStore.getItem(key2);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};
const removeUser = async () => {
  try {
    await AsyncStore.removeItem(key2);
  } catch (error) {
    console.log("Error removing the auth token", error);
  };
}
const storeToken = async (authToken) => {
  try {
    await AsyncStore.setItem(key, authToken)
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};
const getToken = async () => {
  try {
    return await AsyncStore.getItem(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};
const getUser = async () => {
  const token = await getToken();
  const userinfo = await getUserInfo()
  return userinfo
};

const removeToken = async () => {
  try {
    await AsyncStore.removeItem(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  };

};

export default { getToken, getUser, removeToken, storeToken, storeUser, getUserInfo, removeUser };

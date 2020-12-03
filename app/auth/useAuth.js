import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const guesetUser = (key, value) => {
    authStorage.saveJSONInUserDefaults(key, value)
  }
  const logIn = (key, value) => {
    authStorage.saveJSONInUserDefaults(key, value).then(() => {
      setUser(value);
    }).catch((errror) => {
      console.warn(errror)
    })
  };
  const logOut = (key) => {
    authStorage.removeToken(key);
    setUser(null);
  };
  return { user, logIn, logOut, guesetUser };
};

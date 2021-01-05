/** @format */

import { applyMiddleware, compose, createStore } from "redux";


import reducers from "../cartItems"



// const store = createStore(reducers, {}, applyMiddleware(...middleware));

const configureStore = () => {
  let store = null;
  store = createStore(reducers);
  return store;
};

export default configureStore();

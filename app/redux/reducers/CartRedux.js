/** @format */

import { Constants, Tools, Languages } from "@common";

const types = {
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_CART_ITEM: "DELETE_CART_ITEM",
  EMPTY_CART: "EMPTY_CART",
};

export const actions = {
  addCartItem: (dispatch, product) => {
    dispatch({
      type: types.ADD_CART_ITEM,
      product,
    });
  },
  removeCartItem: (dispatch, product) => {
    dispatch({
      type: types.REMOVE_CART_ITEM,
      product,
    });
  },

  deleteCartItem: (dispatch, product, quantity) => {
    dispatch({
      type: types.DELETE_CART_ITEM,
      product,
      quantity,
    });
  },

  emptyCart: (dispatch) => {
    dispatch({
      type: types.EMPTY_CART,
    });
  },
};

const initialState = {
  cartItems: [],
  total: 0,
  totalPrice: 0,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.ADD_CART_ITEM: {
      const isExisted = state.cartItems.some((cartItem) =>
        compareCartItem(cartItem, action)
      );

      return Object.assign(
        {},
        state,
        isExisted
          ? { cartItems: state.cartItems.map((item) => cartItem(item, action)) }
          : { cartItems: [...state.cartItems, cartItem(undefined, action)] },
        {
          total: state.total + 1,
          totalPrice: state.totalPrice + getPrice(action),
        }
      );
    }
    case types.REMOVE_CART_ITEM: {
      const index = state.cartItems.findIndex((cartItem) =>
        compareCartItem(cartItem, action)
      ); // check if existed
      return index == -1
        ? state // This should not happen, but catch anyway
        : Object.assign(
          {},
          state,
          state.cartItems[index].quantity == 1
            ? {
              cartItems: state.cartItems.filter(
                (cartItem) => !compareCartItem(cartItem, action)
              ),
            }
            : {
              cartItems: state.cartItems.map((item) =>
                cartItem(item, action)
              ),
            },
          {
            total: state.total - 1,
            totalPrice: state.totalPrice - getPrice(action),
          }
        );
    }
    case types.DELETE_CART_ITEM: {
      const index1 = state.cartItems.findIndex((cartItem) =>
        compareCartItem(cartItem, action)
      ); // check if existed
      return index1 == -1
        ? state // This should not happen, but catch anyway
        : Object.assign({}, state, {
          cartItems: state.cartItems.filter(
            (cartItem) => !compareCartItem(cartItem, action)
          ),
          total: state.total - Number(action.quantity),
          totalPrice:
            state.totalPrice - Number(action.quantity) * getPrice(action),
        });
    }
    case types.EMPTY_CART:
      return Object.assign({}, state, {
        type: types.EMPTY_CART,
        cartItems: [],
        total: 0,
        totalPrice: 0,
      });
    default: {
      return state;
    }
  }
};

const compareCartItem = (cartItem, action) => {
  // warn(action.variation);
  return cartItem.product.id === action.product.id;
};

const cartItem = (
  state = { product: undefined, quantity: 1 },
  action
) => {
  switch (action.type) {
    case types.ADD_CART_ITEM:
      return state.product === undefined
        ? Object.assign({}, state, {
          product: action.product,
        })
        : !compareCartItem(state, action)
          ? state
          : Object.assign({}, state, {
            quantity:
              state.quantity < Constants.LimitAddToCart
                ? state.quantity + 1
                : state.quantity,
          });
    case types.REMOVE_CART_ITEM:
      return !compareCartItem(state, action)
        ? state
        : Object.assign({}, state, { quantity: state.quantity - 1 });
    default:
      return state;
  }
};

// get price from variation or product and format
function getPrice(action) {
  return Number(
    Tools.getPriceIncluedTaxAmount(action.product, null, true)
  );
}

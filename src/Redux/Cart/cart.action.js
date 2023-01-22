import {
  GET_CART_LOADING,
  GET_CART_ERROR,
  GET_CART_SUCCESS
} from './cart.type';
import { getCartAPI, deleteItemAPI } from './cart.api';
let currentUser = JSON.parse(localStorage.getItem('user'));

export const getCartData = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let response = await getCartAPI();
    let data = response.filter((item) => item.email === currentUser.email);
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  await deleteItemAPI(id);
  dispatch(getCartData());
};

import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS
} from './products.type';
import {
  getProductsAPI,
  getCartItemsAPI,
  addToCartAPI,
  getSingleProductAPI
} from './products.api';

let currentUser = JSON.parse(localStorage.getItem('user'));

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getProductsAPI();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const addToCart = async (newItem, quantity = 1) => {
  let isPresent = false;
  let cartItems = await getCartItemsAPI();

  let filteredCartItems = cartItems.filter(
    (items) => items.email === currentUser.email
  );

  filteredCartItems.map((items) => {
    if (items.id === newItem.id) isPresent = true;
  });

  if (!isPresent)
    await addToCartAPI({
      ...newItem,
      email: currentUser.email,
      quantity: +quantity,
      timeStamp: currentUser.lastSignInTime
    });

  return isPresent;
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let data = await getSingleProductAPI(id);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

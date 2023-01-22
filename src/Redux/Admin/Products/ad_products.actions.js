import {
  AD_PRODUCTS_ERROR,
  AD_PRODUCTS_LOADING,
  AD_PRODUCTS_SUCCESS,
} from "./ad_products.actionTypes";
import {
  products_addItem_request,
    products_bunch_update_request,
  products_delete_request,
  products_success_request,
  products_update_request,
} from "./ad_products.api";

export const product_success_action = (cred) => async (dispatch) => {
  dispatch({ type: AD_PRODUCTS_LOADING });
  try {
    const gotIt = await products_success_request(cred);
    console.log("gotIt:", gotIt);
    dispatch({ type: AD_PRODUCTS_SUCCESS, payload: gotIt });
  } catch (err) {
    dispatch({ type: AD_PRODUCTS_ERROR });
  }
};

//Todo: DELETE THE ITEM FROM SERVER

export const product_delete_action = (cred) => async (dispatch) => {
  dispatch({ type: AD_PRODUCTS_LOADING });
  try {
    let data = await products_delete_request(cred);
    dispatch(product_success_action(cred.apikey));
  } catch (err) {
    dispatch({ type: AD_PRODUCTS_ERROR });
  }
};

//TODO: EDIT THE ITEM
export const product_update_action = (cred) => async (dispatch) => {
  console.log('cred:', cred)
  dispatch({ type: AD_PRODUCTS_LOADING });
  try {
    await products_update_request(cred);
    dispatch(product_success_action(cred.apikey));
  } catch (err) {
    dispatch({ type: AD_PRODUCTS_ERROR });
  }
};


//TODO: EDIT THE ITEM
export const product_bunch_update_action = (cred) => async (dispatch) => {
    console.log('cred:', cred)
    dispatch({ type: AD_PRODUCTS_LOADING });
    try {
      await products_bunch_update_request(cred);
      dispatch(product_success_action(cred.apikey));
    } catch (err) {
      dispatch({ type: AD_PRODUCTS_ERROR });
    }
  };


  //TODO: ADD NEW ITEM
  export const product_addItem_action = (cred) => async (dispatch) =>{
    dispatch({ type: AD_PRODUCTS_LOADING });
    try {
      await products_addItem_request(cred);
      dispatch(product_success_action(cred.api_key));
    } catch (err) {
      dispatch({ type: AD_PRODUCTS_ERROR });
    }
  }

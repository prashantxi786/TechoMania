import { AD_PRODUCTS_ERROR, AD_PRODUCTS_LOADING, AD_PRODUCTS_SUCCESS } from "./ad_products.actionTypes"
import { products_success_request } from "./ad_products.api"

export const product_success_action = (cred) => async (dispatch) =>{
    dispatch({type:AD_PRODUCTS_LOADING})
    try{
        const gotIt =await products_success_request(cred)
        dispatch({type:AD_PRODUCTS_SUCCESS,payload:gotIt})
    }
    catch(err){
        dispatch({type:AD_PRODUCTS_ERROR})
    }
}
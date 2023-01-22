import { AD_PRODUCTS_ERROR, AD_PRODUCTS_LOADING, AD_PRODUCTS_SUCCESS } from "./ad_products.actionTypes";

// TODO: Here we are creating our Product reducer. NOTE:(Ad means Admin)
const products_InitialState = {
  loading: false,
  error: false,
  ad_products_data: [],
};

export const adProductsReducer = (
  state = products_InitialState,
  { type, payload }
) => {
  switch (type) {
    
    case AD_PRODUCTS_LOADING: 
      {
        return { ...state, loading: true };
      }
    case AD_PRODUCTS_ERROR:
      {
        return {...state,loading:false,error:true}
      }
    case AD_PRODUCTS_SUCCESS:
      {
        return {...state,ad_products_data:payload,loading:false}
      }
    default: 
      {
        return products_InitialState;
      }
  }
};

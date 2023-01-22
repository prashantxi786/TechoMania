import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS
} from './products.type';

let initialState = {
  loading: false,
  error: false,
  products: []
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload
      };
    }
    default: {
      return state;
    }
  }
};

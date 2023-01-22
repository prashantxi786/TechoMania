import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore
} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './Cart/cart.reducer';
import { authReducer } from './Authentication/auth.reducer';
import { productsReducer } from './MainProducts/products.reducer';
import { adProductsReducer } from './Admin/Products/ad_products.reducer';

const rootReducer = combineReducers({
  cartManager: cartReducer,
  authManager: authReducer,
  productsManager: productsReducer,
  adProductsManager: adProductsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { adProductsReducer } from "./Admin/Products/ad_products.reducer";
import { authReducer } from './Authentication/auth.reducer';
const rootReducer = combineReducers({
  authManager: authReducer
  adProductsManager:adProductsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

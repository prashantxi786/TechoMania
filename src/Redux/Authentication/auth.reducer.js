import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_SUCCESS,
  AUTH_ADMIN_LOGOUT
} from './auth.type';

let activeUser = JSON.parse(localStorage.getItem('user'));
let initialState = {
  error: false,
  loading: false,
  isSignedUp: false,
  user: activeUser ? activeUser : null,
  isLoggedIn: activeUser ? true : false,
  isAdmin: activeUser ? activeUser.isAdmin : false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...payload, id: payload.email })
      );
      return {
        ...state,
        user: payload,
        loading: false,
        isLoggedIn: true,
        isAdmin: payload.isAdmin
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem('user');
      return {
        ...initialState
      };
    }
    case AUTH_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
        isSignedUp: false
      };
    }
    case AUTH_SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        isSignedUp: true
      };
    }
    case AUTH_ADMIN_LOGOUT: {
      localStorage.setItem('user', JSON.stringify(payload));
      return {
        ...state,
        isAdmin: false
      };
    }
    default: {
      return state;
    }
  }
};

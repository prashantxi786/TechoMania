import {
  allowLogInAPI,
  allowSignUpAPI,
  getUsersAPI,
  handleLogout,
  updateProfileAPI,
  addCurrentUserAPI,
  deleteCurrentUserAPI
} from './auth.api';
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

let currentUser = JSON.parse(localStorage.getItem('user'));

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    let response = await allowLogInAPI(email, password);
    let userData = response.user;
    let username = userData.displayName.split(' ');
    let lastSeen = userData.metadata.lastSignInTime;
    let allExistingUsers = await getUsersAPI();
    let isMatch = false;
    allExistingUsers.map((user) => {
      if (user.email === userData.email) isMatch = true;
    });

    let data = {
      email: userData.email,
      firstName: username[0],
      lastName: username[1],
      isAdmin: isMatch,
      lastSignInTime: lastSeen,
      isActive:true
    };

    await addCurrentUserAPI({ ...data, id: data.email });
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const logout = () => async (dispatch) => {
  await deleteCurrentUserAPI(currentUser.email);
  await handleLogout();
  dispatch({ type: AUTH_LOGOUT });
};


export const adminLogout = () => (dispatch) => {
  let data = { ...currentUser, isAdmin: false };
  dispatch({ type: AUTH_ADMIN_LOGOUT, payload: data });
};

export const signup =
  ({ email, password, firstName, lastName }) =>
  async (dispatch) => {
    dispatch({ type: AUTH_SIGNUP_LOADING });
    try {
      let response = await allowSignUpAPI(email, password);
      await updateProfileAPI(response.user, firstName, lastName);
      dispatch({ type: AUTH_SIGNUP_SUCCESS });
    } catch (e) {
      dispatch({ type: AUTH_SIGNUP_ERROR });
    }
  };

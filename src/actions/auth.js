import axios from 'axios';
import { LOGIN_URL, SIGNUP_URL } from './index';

//Login User
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

//logout user
export const LOGOUT_USER = 'LOGOUT_USER';

//Signup User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

//Login User
export function loginUser(formValues) {
  return function (dispatch) {
    axios.post(`${LOGIN_URL}`, { email: formValues.email, password: formValues.password })
      .then(function (response) {
        sessionStorage.setItem('authToken', response.data.auth_token);
        sessionStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
        dispatch(loginUserSuccess(response.data));
      })
      .catch(function (error) {
        console.log('An error occured.', error.response.data.errors);
        dispatch(loginUserFailure(error));
      });
  };
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
}

//Logout User
export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

//Signup User
export function signupUser(formValues) {
  return function (dispatch) {
    axios.post(`${SIGNUP_URL}`, { user: { email: formValues.email, password: formValues.password, username: formValues.username } })
      .then(function (response) {
        sessionStorage.setItem('authToken', response.data.auth_token);
        sessionStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
        dispatch(signupUserSuccess(response.data));
      })
      .catch(function (errors) {
        let errorString = '';
        const errorMessages = errors.response.data.errors;
        if (errors.response.data.errors instanceof Array) {
          errorString = errorMessages.join(', ');
        } else {
          errorString = errorMessages;
        }
        console.log('An error occured.', errorString);
        dispatch(signupUserFailure(errors));
      });
  };
}

export function signupUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signupUserFailure(errors) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: errors
  };
}
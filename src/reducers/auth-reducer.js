import {
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER,
  SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE
} from '../actions/auth';

//user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / sessionstorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = { user: null, status: null, error: null, loading: true };

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case LOGIN_USER:// sign in user,  set loading = true and status = signin
      return { ...state, user: null, status: 'signin', error: null, loading: true };
    case LOGIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
      return { ...state, user: action.payload.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated
    case LOGIN_USER_FAILURE:// return error and make loading = false
      error = action.payload.errors || action.payload.response.data.errors;//2nd one is network or server down errors
      return { ...state, user: null, status: 'signin', error: error, loading: false };

    case LOGOUT_USER:
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('loggedInUser');
      return { ...state, user: null, status: 'logout', error: null, loading: false };

    case SIGNUP_USER:// sign in user,  set loading = true and status = signup
      return { ...state, user: null, status: 'signup', error: null, loading: true };
    case SIGNUP_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
      return { ...state, user: action.payload.user, status: 'authenticated', error: null, loading: false }; //<-- authenticated
    case SIGNUP_USER_FAILURE:// return error and make loading = false
      error = action.payload.errors || action.payload.response.data.errors;//2nd one is network or server down errors
      return { ...state, user: null, status: 'signup', error: error, loading: false };

    default:
      return state;
  }
}

import {
  FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS,
  FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, RESET_ACTIVE_POST,
  CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, RESET_NEW_POST,
  UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, RESET_UPDATE_POST
} from '../actions/posts';

const INITIAL_STATE = {
  postsList: { posts: [], loading: true, error: null },
  newPost: { post: null, error: null, loading: true },
  updatedPost: { post: null, error: null, loading: true },
  activePost: { post: null, error: null, loading: true },
};

export default function (state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    //Fetch Posts
    case FETCH_POSTS:// start fetching POSTS and set loading = true
      return { ...state, postsList: { posts: [], error: null, loading: true } };
    case FETCH_POSTS_SUCCESS:// return list of POSTS and make loading = false
      return { ...state, postsList: { posts: action.payload.posts, error: null, loading: false } };
    case FETCH_POSTS_FAILURE:// return error and make loading = false
      error = { message: action.payload.response.data.message };//2nd one is network or server down errors
      return { ...state, postsList: { posts: [], error: error, loading: false } };
    case RESET_POSTS:// reset postsList to initial state
      return { ...state, postsList: { posts: [], error: null, loading: false } };

    //Fetch Post
    case FETCH_POST:
      return { ...state, activePost: { ...state.activePost, loading: true } };
    case FETCH_POST_SUCCESS:
      return { ...state, activePost: { post: action.payload.post, error: null, loading: false } };
    case FETCH_POST_FAILURE:
      error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, activePost: { post: null, error: error, loading: false } };
    case RESET_ACTIVE_POST:
      return { ...state, activePost: { post: null, error: null, loading: false } };

    //Create Post
    case CREATE_POST:
      return { ...state, newPost: { ...state.newPost, loading: true } };
    case CREATE_POST_SUCCESS:
      return { ...state, newPost: { post: action.payload.post, error: null, loading: false } };
    case CREATE_POST_FAILURE:
      error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, newPost: { post: null, error: error, loading: false } };
    case RESET_NEW_POST:
      return { ...state, newPost: { post: null, error: null, loading: false } };

    //update Post
    case UPDATE_POST:
      return { ...state, updatedPost: { ...state.updatedPost, loading: true } };
    case UPDATE_POST_SUCCESS:
      return { ...state, updatedPost: { post: action.payload.post, error: null, loading: false } };
    case UPDATE_POST_FAILURE:
      error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
      return { ...state, updatedPost: { post: null, error: error, loading: false } };
    case RESET_UPDATE_POST:
      return { ...state, updatedPost: { post: null, error: null, loading: false } };

    default:
      return state;
  }
}

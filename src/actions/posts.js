import axios from 'axios';
import { API_URL } from './index';

//= =====================
// Posts Actions
//= =====================

//Fetch POSTs
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAIURE';
export const RESET_POSTS = 'RESET_POSTS';

//Fetch POST
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';

//Create new POST
export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const RESET_NEW_POST = 'RESET_NEW_POST';

//Update new POST
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const RESET_UPDATE_POST = 'RESET_UPDATE_POST';

//Fetch Posts functions
export function fetchPosts() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `${API_URL}/posts`,
      headers: { Authorization: sessionStorage.getItem('authToken') }
    })
      .then(function (response) {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(function (error) {
        console.log('An error occured.', error);
        dispatch(fetchPostsFailure(error));
      });
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}

export function resetPosts() {
  return {
    type: RESET_POSTS
  };
}

//Fetch Posts
export function fetchPost(id) {
  return function (dispatch) {
    axios({
      method: 'get',
      url: `${API_URL}/posts/${id}`,
      headers: { Authorization: sessionStorage.getItem('authToken') }
    })
      .then(function (response) {
        dispatch(fetchPostSuccess(response.data));
      })
      .catch(function (error) {
        console.log('An error occured.', error);
        dispatch(fetchPostFailure(error));
      });
  };
}

export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  };
}

//Create Post functions
export function createPost(post) {
  return function (dispatch) {
    axios({
      method: 'post',
      data: { post: post },
      url: `${API_URL}/posts`,
      headers: { Authorization: sessionStorage.getItem('authToken') }
    })
      .then(function (response) {
        dispatch(createPostSuccess(response.data));
      })
      .catch(function (error) {
        console.log('An error occured.', error);
        dispatch(createPostFailure(error));
      });
  };
}

export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost
  };
}

export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  };
}

export function resetNewPost() {
  console.log("resetNewPost");
  return {
    type: RESET_NEW_POST
  };
}

//Update Post functions
export function updatePost(post, postId) {
  return function (dispatch) {
    axios({
      method: 'put',
      data: { post: post },
      url: `${API_URL}/posts/${postId}`,
      headers: { Authorization: sessionStorage.getItem('authToken') }
    })
      .then(function (response) {
        dispatch(updatePostSuccess(response.data));
      })
      .catch(function (error) {
        console.log('An error occured.', error);
        dispatch(updatePostFailure(error));
      });
  };
}

export function updatePostSuccess(updatedPost) {
  return {
    type: UPDATE_POST_SUCCESS,
    payload: updatedPost
  };
}

export function updatePostFailure(error) {
  return {
    type: UPDATE_POST_FAILURE,
    payload: error
  };
}

export function resetUpdatePost() {
  console.log("resetUpdatePost");
  return {
    type: RESET_UPDATE_POST
  };
}

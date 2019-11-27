import {
  SET_POSTS,
  LOADING_DATA,
  DELETE_POST,
  POST_PRODUCT,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI
} from "../types";
import axios from 'axios';
//GET ALL PRODUCTS
export const getPosts = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        })
}
// GET SCREAM
export const getPost = (postId) => dispatch => {
    dispatch({ type: LOADING_UI});
    axios.get(`/post/${postId}`)
        .then(res => {
            dispatch({
                type: SET_POST,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            console.log(err)
        })
}
//POST PRODUCT
export const postProduct = (newPost) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/post', newPost)
        .then(res => {
            dispatch({
                type: POST_PRODUCT,
                payload: res.data
            })
            console.log("success");
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
//DELETE PRODUCT
export const deletePost = (postId) => (dispatch) => {
    axios.delete(`/post/${postId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: postId })
        })
        .catch(err => console.log(err))
}

export const clearErrors = () => dispatch => {
    dispatch({ type: CLEAR_ERRORS })
}
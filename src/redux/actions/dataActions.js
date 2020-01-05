import {
  SET_POSTS,
  LOADING_DATA,
  DELETE_POST,
  POST_PRODUCT,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI,
  SET_RETREATS,
  DELETE_RETREAT,
  POST_RETREAT,
  SET_RETREAT,
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
//Upload IMage
export const uploadImage = (formDatas, postId) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    // axios.post(`/post/${postId}/image`, formData)
    //     .then(() => {
    //         dispatch(getPost(postId))
    //         // dispatch({ type: STOP_LOADING_UI });
    //     })
    //     .catch(err => console.log(err));

    formDatas.forEach(formData => {
      axios
        .post(`/post/${postId}/image`, formData)
        .then(() => {
          dispatch(getPost(postId));
          // dispatch({ type: STOP_LOADING_UI });
        })
        .catch(err => console.log(err));
    });
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

//######################--RETREATS--#########################//
export const getRetreats = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/retreats')
        .then(res => {
            dispatch({
                type: SET_RETREATS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_RETREATS,
                payload: []
            })
        })
}

//Get retreat
export const getRetreat = (retreatId) => dispatch => {
    dispatch({ type: LOADING_UI });
    axios.get(`/retreat/${retreatId}`)
        .then(res => {
            dispatch({
                type: SET_RETREAT,
                payload: res.data
            })
            dispatch({ type: STOP_LOADING_UI })
        })
        .catch(err => {
            console.log(err)
        })
}

//Post Retreat
export const postRetreat = (newRetreat) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.post('/retreat', newRetreat)
        .then(res => {
            dispatch({
                type: POST_RETREAT,
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

//DELETE RETREAT
export const deleteRetreat = (retreatId) => (dispatch) => {
    axios.delete(`/retreat/${retreatId}`)
        .then(() => {
            dispatch({ type: DELETE_RETREAT, payload: retreatId })
        })
        .catch(err => console.log(err))
}

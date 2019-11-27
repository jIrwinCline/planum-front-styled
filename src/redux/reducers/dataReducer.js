import { SET_POSTS } from '../types';
import { LOADING_DATA, DELETE_POST, POST_PRODUCT, SET_POST } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function(state = initialState, action){
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true
        };
      case SET_POSTS:
        return {
          ...state,
          posts: action.payload,
          loading: false
        };
      case SET_POST:
        return {
          ...state,
          post: action.payload
        };
      case DELETE_POST:
        let index = state.posts.findIndex(
          post => post.postId === action.payload
        );
        state.posts.splice(index, 1);
        return {
          ...state
        };
      case POST_PRODUCT:
        return {
          ...state,
          posts: [action.payload, ...state.posts]
        };
      default:
        return state;
    }
}
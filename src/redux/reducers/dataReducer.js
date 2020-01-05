import { SET_POSTS, SET_RETREATS } from '../types';
import { LOADING_DATA, DELETE_POST, POST_PRODUCT, SET_POST, DELETE_RETREAT, POST_RETREAT, SET_RETREAT } from '../types';

const initialState = {
    posts: [],
    post: {},
    retreats: [],
    retreat: {},
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
      case SET_RETREATS:
        return {
          ...state,
          retreats: action.payload,
          loading: false
        };
        case SET_RETREAT:
        return {
          ...state,
          retreat: action.payload
        };
        case DELETE_RETREAT:
        let retreatIndex = state.retreats.findIndex(
          retreat => retreat.retreatId === action.payload
        );
        state.retreats.splice(retreatIndex, 1);
        return {
          ...state
        };
        case POST_RETREAT:
        return {
          ...state,
          retreats: [action.payload, ...state.retreats]
        };
      default:
        return state;
    }
}
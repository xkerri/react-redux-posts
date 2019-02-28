import { makeAsyncActionCreator } from "redux-toolbelt";

export const fetchPosts = makeAsyncActionCreator("FETCH_POSTS");

const initialState = {
  fetching: false,
  posts: [],
  error: null
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case fetchPosts.TYPE:
      return Object.assign({}, state, { fetching: true });
    case fetchPosts.success.TYPE:
      return Object.assign({}, state, {
        fetching: false,
        posts: action.payload
      });
    case fetchPosts.failure.TYPE:
      return Object.assign({}, state, {
        fetching: false,
        posts: [],
        error: action.payload
      });
    default:
      return state;
  }
}

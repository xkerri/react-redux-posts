import { makeAsyncActionCreator } from "redux-toolbelt";

export const fetchUser = makeAsyncActionCreator("FETCH_USER");

const initialState = {
  fetching: false,
  user: [],
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case fetchUser.TYPE:
      return Object.assign({}, state, { fetching: true });
    case fetchUser.success.TYPE:
      return Object.assign({}, state, {
        fetching: false,
        user: action.payload
      });
    case fetchUser.failure.TYPE:
      return Object.assign({}, state, {
        fetching: false,
        user: [],
        error: action.payload
      });
    default:
      return state;
  }
}

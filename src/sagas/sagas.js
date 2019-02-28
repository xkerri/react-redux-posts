import { takeLatest, call, put } from "redux-saga/effects";
import jsonPlaceholder from "../api/jsonPlaceholder";
import { fetchPosts } from "../reducers/postReducer";
import { fetchUser } from "../reducers/userReducer";

const getPostsCall = () => {
  return jsonPlaceholder.get("/posts");
};

const getUserCall = () => {
  return jsonPlaceholder.get(`/users/`);
};

function* getPosts() {
  try {
    const response = yield call(getPostsCall);
    const { data } = response;
    yield put(fetchPosts.success(data));
  } catch (error) {
    console.log(error);
    yield put(fetchPosts.failure(error));
  }
}

function* getUser() {
  try {
    const response = yield call(getUserCall);
    const { data } = response;
    yield put(fetchUser.success(data));
  } catch (error) {
    console.log(error);
    yield put(fetchUser.failure(error));
  }
}

export function* watchPostsAsync() {
  yield takeLatest(fetchPosts, getPosts);
}

export function* watchUserAsync() {
  yield takeLatest(fetchUser, getUser);
}

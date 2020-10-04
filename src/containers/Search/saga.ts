import { Action } from '@reduxjs/toolkit';
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getResultsError, getResultsRequest, getResultsSuccess } from "./action";
import * as Api from "../../services/Api";
import { getCustomError } from '../../utils/api-helper';

function* getSearchResults(action: Action) {
  try {
    if (getResultsRequest.match(action)) {
      const res = yield call(Api.fetchSearchResults, action.payload);
      const data = res.data;
      if (res.status !== 200) {
        yield put(getResultsError(data.error));
      } else {
        yield put(getResultsSuccess(data));
      }
    }
  } catch (err) {
    yield put(getResultsError(getCustomError(err)))
  }
}

function* watchFetchRequest() {
  yield takeLatest(getResultsRequest.type, getSearchResults);
}

export default function* searchSaga() {
  yield all([fork(watchFetchRequest)]);
}

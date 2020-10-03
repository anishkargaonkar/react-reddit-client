import { all, fork } from "redux-saga/effects";

function* rootSaga() {
    yield all([
        // fork(saga1), fork(saga2)
    ]);
};
  
export { rootSaga };
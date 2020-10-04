import { all, fork } from "redux-saga/effects";
import searchSaga from "./containers/Search/saga";

function* rootSaga() {
    yield all([
        fork(searchSaga)
    ]);
};
  
export { rootSaga };
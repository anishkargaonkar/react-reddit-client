import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from './containers/Search/reducer';

const reducers = {
  search: searchReducer
};

function createRootReducer() {
    const rootReducer = combineReducers({
      ...reducers
    });
  
    return rootReducer;
};
  
export { createRootReducer };
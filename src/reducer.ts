import { combineReducers } from "@reduxjs/toolkit";

function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
      ...injectedReducers
    });
  
    return rootReducer;
};
  
export { createReducer };
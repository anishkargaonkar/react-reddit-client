import { combineReducers } from "@reduxjs/toolkit";

function createRootReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
      ...injectedReducers
    });
  
    return rootReducer;
};
  
export { createRootReducer };
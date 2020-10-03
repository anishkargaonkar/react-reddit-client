import { combineReducers } from "@reduxjs/toolkit";

const reducers = {
  // ...reducers 
};

function createRootReducer() {
    const rootReducer = combineReducers({
      ...reducers
    });
  
    return rootReducer;
};
  
export { createRootReducer };
import { createReducer } from "@reduxjs/toolkit";
import {
  getResultsError,
  getResultsRequest,
  getResultsSuccess,
} from "./action";
import { SearchState } from "./types";

const initalState: SearchState = {
  isLoading: false,
  results: null,
  errors: {
    results: null,
  },
};

const reducer = createReducer(initalState, (builder) => {
  return builder
    .addCase(getResultsRequest, (state, action) => {
      state.isLoading = true;
      state.results = null;
      state.errors.results = null;
    })
    .addCase(getResultsSuccess, (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    })
    .addCase(getResultsError, (state, action) => {
      state.isLoading = false;
      state.errors.results = action.payload;
    });
});

export { initalState as searchInitialState, reducer as searchReducer };

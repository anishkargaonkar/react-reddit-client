import { createAction } from "@reduxjs/toolkit";
import { Search, SearchActionTypes } from "./types";

export const getResultsRequest = createAction(
  SearchActionTypes.GET_RESULTS_REQUEST
);

export const getResultsSuccess = createAction<Search>(
  SearchActionTypes.GET_RESULTS_SUCCESS
);

export const getResultsError = createAction<Error>(
  SearchActionTypes.GET_RESULTS_ERROR
);

import { createAction } from "@reduxjs/toolkit";
import { Search, SearchActionTypes, SearchQuery } from "./types";

export const getResultsRequest = createAction<SearchQuery>(
  SearchActionTypes.GET_RESULTS_REQUEST
);

export const getResultsSuccess = createAction<Search>(
  SearchActionTypes.GET_RESULTS_SUCCESS
);

export const getResultsError = createAction<Error>(
  SearchActionTypes.GET_RESULTS_ERROR
);

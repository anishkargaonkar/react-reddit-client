import { createAction } from "@reduxjs/toolkit";
import { CustomError } from "../../utils/api-helper";
import { Search, SearchActionTypes, SearchQuery } from "./types";

export const getResultsRequest = createAction<SearchQuery>(
  SearchActionTypes.GET_RESULTS_REQUEST
);

export const getResultsSuccess = createAction<Search>(
  SearchActionTypes.GET_RESULTS_SUCCESS
);

export const getResultsError = createAction<CustomError>(
  SearchActionTypes.GET_RESULTS_ERROR
);

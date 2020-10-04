import { CustomError } from "../../utils/api-helper";
import { Search } from "./Search";

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  id: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Result {
  title: string;
  thumbnail: string;
  permalink: string;
}

export interface SearchResults {
  after: string;
  dist: number;
  modhash: string;
  children: {
    kind: string;
    data: Result;
  }[];
  before?: any;
}

export interface Search {
  kind: string;
  data: SearchResults;
}

export interface SearchQuery {
  query: string;
  limit: number;
};

interface Errors {
  results: CustomError | null
}

export enum SearchActionTypes {
  GET_RESULTS_REQUEST = "@@search/GET_RESULTS_REQUEST",
  GET_RESULTS_SUCCESS = "@@search/GET_RESULTS_SUCCESS",
  GET_RESULTS_ERROR = "@@search/GET_RESULTS_ERROR",

  RESET_RESULTS = '@@search/RESET_RESULTS'
}

export interface SearchState {
  isLoading: boolean,
  results: Search | null,
  errors: Errors
}
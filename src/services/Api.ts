import config from "../config/app";
import * as API from "../utils/api-helper";
import { SearchQuery } from "../containers/Search/types";

const { isProd } = config;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const fetchSearchResults = (params: SearchQuery) => {
  const { query, limit } = params;
  const url = `${API_ENDPOINT}/r/all/search.json?q=${query}&limit=${limit}`;

  return API.get(url);
};

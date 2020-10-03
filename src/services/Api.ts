import config from "../config/app";
import * as API from "../utils/api-helper";

const { isProd } = config;

const API_ENDPOINT = isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

// example GET API request
/** 
	export const getAPIExample = (params: APIRequestParams) => {
		const { param1, param2 } = params;
		const url = `${API_ENDPOINT}/get_request?param1=${param1}&param2=${param2}`;

		return API.get(url);
	}
*/
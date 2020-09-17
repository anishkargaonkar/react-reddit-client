import config from "../config/app";

const { isProd } = config;

const API_ENDPOINT = isProd
    ? config.production
    : config.development;
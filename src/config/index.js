const windowEnv = window || {};
const { env } = windowEnv;

const apiBaseUrl = env.API_BASE_URL;

const config = {
  ApiUrl: apiBaseUrl,
};

export { config };

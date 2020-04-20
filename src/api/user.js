import API from './API';

/**
 * Function that return user information from github api
 * @param username
 * @returns {Promise<AxiosResponse<any>>}
 */
const getUserDetail = username => API.get(`/users/${username}`);

/**
 * Function that return all the public repositories from a github user
 * @param username
 * @returns {Promise<AxiosResponse<any>>}
 */
const getUserDetailRepositories = username => API.get(`/users/${username}/repos`);

export { getUserDetail, getUserDetailRepositories };

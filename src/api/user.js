import API from './API';

const getUserDetail = username => API.get(`/users/${username}`);

const getUserDetailRepositories = username => API.get(`/users/${username}/repos`);

export { getUserDetail, getUserDetailRepositories };

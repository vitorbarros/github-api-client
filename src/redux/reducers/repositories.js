import { sortBy } from 'lodash';
import { getUserDetailRepositories } from '../../api/user';

export const Types = {
  SET_REPOSITORIES: 'SET_REPOSITORIES',
};

const INITIAL_STATE = [];

export default function repositoriesReducer(state = INITIAL_STATE, { type, content }) {
  switch (type) {
    case Types.SET_REPOSITORIES:
      return content;
    default:
      return state;
  }
}

export function setRepositories(username) {
  return dispatch => {
    const promises = {
      fetchUserRepositoriesDataFromAPI: () => getUserDetailRepositories(username),
      storeUserRepositoriesData: (repositoriesResponse) => {
        const content = sortBy(repositoriesResponse.data, 'stargazers_count').reverse();
        dispatch({
          type: Types.SET_REPOSITORIES,
          content,
        });
        return Promise.resolve();
      }
    };
    return promises.fetchUserRepositoriesDataFromAPI().then(promises.storeUserRepositoriesData);
  }  
}


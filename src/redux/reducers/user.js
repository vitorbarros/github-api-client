import { getUserDetail } from '../../api/user';

export const Types = {
  SET_USER: 'SET_USER',
};

const INITIAL_STATE = {
  id: '',
  login: '',
  avatar_url: '',
  repos_url: '',
  name: '',
  company: '',
  blog: '',
  location: '',
  email: '',
  bio: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
};

/**
 * Function that sets the user redux state
 * @param state
 * @param type
 * @param content
 * @returns {{repos_url: string, bio: string, login: string, blog: string, public_gists: number, followers: number, avatar_url: string, following: number, name: string, company: string, location: string, id: string, public_repos: number, email: string}|*}
 */
export default function userReducer(state = INITIAL_STATE, { type, content }) {
  switch (type) {
    case Types.SET_USER:
      return content;
    default:
      return state;
  }
}

/**
 * Function that store user data result from github api in redux state
 * @param username
 * @returns {function(*): Promise<void>}
 */
export function setUser(username) {
  return dispatch => {
    const promises = {
      fetchUserDataFromAPI: () => getUserDetail(username),
      storeUserData: (userResponse) => {
        const content = { ...userResponse.data };
        dispatch({
          type: Types.SET_USER,
          content,
        });
        return Promise.resolve();
      }
    };
    return promises.fetchUserDataFromAPI().then(promises.storeUserData);
  }  
}


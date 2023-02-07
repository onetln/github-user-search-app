import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    user: {},
    repos: [],
    loading: false,
    searchText: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get users
  const searchUsers = async (text, page) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
      per_page: 16,
      page: page,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    data['customParam_page'] = page;
    data['customParam_text'] = text;

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  //Get user data
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: 'GET_USER',
      payload: data,
    });
  };

  //Get user repositories
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'updated',
      direction: 'desc',
      per_page: 10,
      page: state.currentPage,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    dispatch({
      type: 'GET_USER_REPOS',
      payload: data,
    });
  };

  //Clear search
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  // Initial users for testing purposes
  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  //Display loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        currentPage: state.currentPage,
        totalUsers: state.totalUsers,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchText: state.searchText,
        fetchUsers,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

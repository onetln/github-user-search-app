import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

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

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubContext;

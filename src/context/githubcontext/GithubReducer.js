const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.data.items,
        totalUsers: action.payload.data.total_count,
        currentPage: action.payload.page,
        searchText: action.payload.text,
        loading: false,
      };
    case 'GET_USER_AND_REPOS':
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        totalUsers: 0,
        currentPage: 1,
        searchText: null,
      };
    default:
      return state;
  }
};

export default githubReducer;

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.items,
        totalUsers: action.payload.total_count,
        currentPage: action.payload.customParam_page,
        searchText: action.payload.customParam_text,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case 'GET_USER_REPOS':
      return {
        ...state,
        repos: action.payload,
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

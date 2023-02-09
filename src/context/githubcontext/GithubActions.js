const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//Get users
export const searchUsers = async (text, page) => {
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
  return data;
};

//Get user data
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();
    return data;
  }
};

//Get user repositories
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'updated',
    direction: 'desc',
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
};

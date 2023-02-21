import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  Authorization: `token ${GITHUB_TOKEN}`,
});

//Get users
export const searchUsers = async (text, page) => {
  const params = new URLSearchParams({
    q: text,
    per_page: 16,
    page: page,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data;
};

//Get users data and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'updated',
    direction: 'desc',
    per_page: 10,
  });
  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?/${params}`),
    ]);
    return { user: user.data, repos: repos.data };
  } catch (err) {
    window.location = '/notfound';
  }
};

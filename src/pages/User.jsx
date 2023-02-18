import { Fragment, useContext, useEffect } from 'react';
import { FaCode, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';
import GithubContext from '../context/githubcontext/GithubContext';
import { getUserAndRepos } from '../context/githubcontext/GithubActions';

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    avatar_url,
    name,
    login,
    type,
    hireable,
    bio,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to={'/'} className="btn btn-ghost">
            back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8">
          <div className="custom-card-image">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="Profile" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title text-white">{name}</h2>
                <div>
                  <p>{login}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:w-full">
            <div className="mb-6">
              <h1 className="text-3xl card-tilte">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="my-2">{bio}</p>
              <div className="card-actions mt-4">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full my-5 rounded-lg shadow-md bg-base-200 stats stats-vertical lg:stats-horizontal">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">
                    Location
                    <div className="text-lg stat-value">{location}</div>
                  </div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">
                    Website
                    <div className="text-lg stat-value">
                      <a href={blog} target="_blank" rel="noopener noreferrer">
                        {blog.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">
                    Twitter
                    <div className="text-lg stat-value">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 rounded-lg shadow-md stats stats-vertical md:stats-horizontal bg-base-200">
          <div className="stat">
            <div className="stat-figure">
              <FaUsers className="text-4xl md:text-5xl text-secondary-focus" />
            </div>
            <div className="stat-title">
              Followers
              <div className="stat-value text-3xl md:text-4xl">{followers}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <FaUserFriends className="text-4xl md:text-5xl text-secondary-focus" />
            </div>
            <div className="stat-title">
              Following
              <div className="stat-value text-3xl md:text-4xl">{following}</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <FaCode className="text-4xl md:text-5xl text-secondary-focus" />
            </div>
            <div className="stat-title">
              Public Repos
              <div className="stat-value text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <FaStore className="text-4xl md:text-5xl text-secondary-focus" />
            </div>
            <div className="stat-title">
              Public Gists
              <div className="stat-value text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </Fragment>
  );
}

export default User;

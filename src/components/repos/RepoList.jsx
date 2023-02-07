import PropType from 'prop-types'
import RepoItem from './RepoItem';

function RepoList({ repos }) {

    return (
    <div className='card my-5 rounded-lg shadow-lg card bg-base-200'>
        <div className='card-body'>
            <h2 className='text-3xl my-4 font-bold card-title'>
                Recently updated repositories
            </h2>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </div>
    </div>
  )
}

RepoList.PropType = {
    repos: PropType.array.isRequired,
}

export default RepoList

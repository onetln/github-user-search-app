import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"

function RepoItem({ repo }) {
    const {
        name,
        html_url,
        description,
        watchers_count,
        stargazers_count,
        open_issues,
        forks,
    } = repo

  return (
    <div className='mb-2 rounded-md shadow-lg card bg-base-100 hover:bg-base-300'>
        <div className='card-body'>
            <h3 className='mb-2 font-semibold'>
                <a target='_blank' rel='noopener noreferrer' href={html_url}>
                <FaLink className='inline mr-1'/>{name}
                </a>
            </h3>
            <p className='mb-3 text-sm'>{description}</p>
            <div>
                <div className='tooltip tooltip-info' data-tip='watchers'>
                    <div className='mr-2 badge badge-info badge-lg badge-outline'>
                        <FaEye className='mr-1'/>{watchers_count}
                    </div>
                </div>
                <div className='tooltip tooltip-success' data-tip='stars'>
                    <div className='mr-2 badge badge-success badge-lg badge-outline'>
                        <FaStar className='mr-1'/>{stargazers_count}
                    </div>
                </div>
                <div className='tooltip tooltip-error' data-tip='open issues'>
                    <div className='mr-2 badge badge-error badge-lg badge-outline'>
                        <FaInfo className='mr-1'/>{open_issues}
                    </div>
                </div>
                <div className='tooltip tooltip-warning' data-tip='forks'>
                    <div className='mr-2 badge badge-warning badge-lg badge-outline'>
                        <FaUtensils className='mr-1'/>{forks}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoItem

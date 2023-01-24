import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-lg compact side'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className='avatar'>
                        <div className="rounded-full w-14 h-14">
                            <img src={avatar_url} alt='Profile' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`} className='text-base-content text-opacity-40 hover:text-opacity-100'>
                        Visit profile
                </Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem

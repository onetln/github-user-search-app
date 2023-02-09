import { useContext } from 'react'
import GithubContext from '../../context/githubcontext/GithubContext'
import Pagination from '../layout/Pagination'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import { searchUsers } from '../../context/githubcontext/GithubActions'

function UserResults() {
    const { users, loading, totalUsers, currentPage, searchText, dispatch } = useContext(GithubContext)

    const handleChange = async (increase) => {
        dispatch({ type: 'SET_LOADING' })
        const page = increase ? currentPage + 1 : currentPage - 1
        const text = searchText
        const data = await searchUsers(text, page)
        dispatch({
            type: 'GET_USERS',
            payload: { data, page, text },
          });
    }

    if (!loading) {
        return (
            <>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
                {users.length > 0 && <Pagination handleChange={handleChange} totalItems={totalUsers} itemsPerPage={16} currentPage={currentPage}/>}
            </>
        )
    } else {
        return <Spinner />
    }

}

export default UserResults

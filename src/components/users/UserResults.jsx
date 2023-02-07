import { useContext } from 'react'
import GithubContext from '../../context/githubcontext/GithubContext'
import Pagination from '../layout/Pagination'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
    const { users, loading, totalUsers, currentPage, searchUsers, searchText } = useContext(GithubContext)

    const handleChange = (increase) => {
        if (increase) {
            searchUsers(searchText, currentPage + 1)
        } else {
            searchUsers(searchText, currentPage - 1)
        }
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

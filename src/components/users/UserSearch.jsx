import { useState, useContext } from "react"
import AlertContext from "../../context/alertContext/AlertContext"
import GithubContext from "../../context/githubcontext/GithubContext"
import Alert from "../layout/Alert"

function UserSearch() {
  const [text, setText] = useState('')
  const { users, searchUsers, clearUsers, } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please enter a value', 'error')
    } else {
      searchUsers(text, 1)
      setText('')
    }

  }
  
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input 
               value={text} 
               onChange={handleChange} 
               type='text' 
               placeholder='Search' 
               className='w-full pr-40 bg-gray-200 input input-lg text-black' />
              <button type='submit' className='absolute w-32 top-0 right-0 btn btn-lg rounded-l-none t-0'>Go</button>
              <Alert additionalClass={'absolute bottom--1 left-0'}/>
            </div>

          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-lg btn-ghost">Clear</button>
        </div>
      )}

    </div>
  )
}

export default UserSearch

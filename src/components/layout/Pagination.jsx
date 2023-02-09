import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from 'react-icons/fa'
function Pagination({ itemsPerPage, totalItems, currentPage, handleChange }) {

    const firstPage = currentPage === 1
    const lastPage = currentPage === Math.ceil(totalItems / itemsPerPage)
  return (
    <>
    <div className='flex justify-between'>
        <div className='my-4 badge badge-info badge-lg badge-outline'>
            {totalItems} found
        </div>        
        <div>
            <div className='mt-4 mr-2 flex items-center text-right'>
                <button className={`${firstPage && 'text-base-content/30'}`} disabled={firstPage} onClick={() => handleChange(false)}>
                    <FaRegArrowAltCircleLeft className='mr-1'/>
                </button>
                <p className='text-base-content'>Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}</p>
                <button className={`${lastPage && 'text-base-content/30'}`} disabled={lastPage} onClick={() => handleChange(true)}>
                    <FaRegArrowAltCircleRight className='ml-1'/>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Pagination


function Spinner() {
  return (
    <div>
      <div className="flex justify-center items-center mx-auto">
        <div className="relative w-16 h-16 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 mx-auto">
          <div className="mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-base-100 rounded-full border-neutral"></div>
        </div>
      </div>
      <p className='text-center m-2 text-neutral-content text-sm'>Loading...</p>
    </div>

  )
}

export default Spinner

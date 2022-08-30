import React from 'react';
import { BiSearch } from "react-icons/bi";


function SearchBox({ setNameSearch }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameSearch(e.target.search.value)

  }

  return (
    <div className='flex '>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 xl:w-96 ">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" name='search' />
            <button className="btn px-6 py-2.5 bg-teal-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="button" name='button'>
              <BiSearch className='w-4' />
            </button>
          </div>
        </div>


      </form>
    </div>
  )
}

export default SearchBox
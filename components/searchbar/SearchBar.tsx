import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        event.preventDefault()
        onSearch(searchTerm);
    };
  return (
    <form onSubmit={handleSearch}>
        <input
            placeholder='Buscar'
            className='p-2 items-center w-80 text-base sm:text-xl text-center bg-white rounded-2xl shadow-lg'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </form>
  )
}

export default SearchBar
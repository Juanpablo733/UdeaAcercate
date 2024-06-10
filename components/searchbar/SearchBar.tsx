import React, { useState, useCallback } from 'react'
import { MdReplay, MdSearch } from "react-icons/md";
import debounce from "just-debounce-it";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchTerm);
    };
    /*
    Este metodo se utiliza para que no se haga la petición de filtrado al backend cada milisegundo,
    si no cada 1000 milisegundos  
  */
  const debouncedFetchData = useCallback(
    debounce((search: string) => {
      onSearch(search);
      console.log("search in debounce: ", search);
    }, 1000),
    [onSearch]
  );
  /*
  Cuando cambie el valor del input de la barra de busqueda, actualice y mande a llamar el metodo debounce
*/
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const newSearch = event.target.value;
  console.log("newSearch: ", newSearch);
  setSearchTerm(newSearch);
  debouncedFetchData(newSearch);
};
/*
Cuando oprima el icono de reset, se muestren todos los datos nuevamente
*/
const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setSearchTerm("");
  onSearch("");
};

  return (
    <form onSubmit={handleSubmit} className='flex'>
        <input
            placeholder='Buscar'
            className='p-2 items-center w-72 text-base sm:text-xl text-center bg-white rounded-2xl shadow-lg'
            value={searchTerm}
            onChange={handleChange}
        />
        <button type="submit">
          <MdSearch className="h-4 w-4 sm:h-6 sm:w-6"/>
        </button>
        <button type="reset" onClick={handleReset}>
          <MdReplay className="h-4 w-4 sm:h-6 sm:w-6"/>
        </button>
    </form>
  )
}

export default SearchBar
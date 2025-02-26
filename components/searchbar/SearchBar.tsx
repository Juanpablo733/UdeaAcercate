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
      <div className='flex px-6 py-2.5 items-center justify-center h-12  sm:text-xl text-left bg-white rounded-3xl shadow-lg'>
        <input
          placeholder='Buscar evento'
          className='text-base border-none outline-none'
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <MdSearch className="h-4 w-4 sm:h-6 sm:w-6 fill-[#808788]" />
        </button>
      </div>
      {/* <button type="reset" onClick={handleReset}>
          <MdReplay className="h-4 w-4 sm:h-6 sm:w-6"/>
        </button> */}
    </form>
  )
}

export default SearchBar
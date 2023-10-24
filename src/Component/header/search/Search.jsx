import React, { useContext, useState } from 'react'
import ShowsContext from '../../../Context/Shows/ShowsContext';
import "./Search.css"

const Search = () => {
  const [searchTerm,setSearchTerm]=useState("");
  const {searchShows} = useContext(ShowsContext)
  const onSearchHandler = (e) =>{
    e.preventDefault();
    searchShows(searchTerm)
  }
  return (
    <form >
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className='search-btn' type="button" onClick={onSearchHandler}>search</button>
    </form>
  )
}

export default Search
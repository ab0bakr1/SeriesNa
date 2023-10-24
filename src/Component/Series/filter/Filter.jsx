import React from 'react'
import "./Filter.css"
import { Container } from 'react-bootstrap'

const Filter = ({handleFiltersChange}) => {
  return (
    <Container>
      <div className='filter'>
        <button onClick={handleFiltersChange} name="genres" value="all">all</button>
        <button onClick={handleFiltersChange} name="genres" value="Action">Action</button>
        <button onClick={handleFiltersChange} name="genres" value="Drama">Drama</button>
        <button onClick={handleFiltersChange} name="genres" value="Thriller">Thriller</button>
        <button onClick={handleFiltersChange} name="genres" value="Crime">Crime</button>
        <button onClick={handleFiltersChange} name="genres" value="Horror">Horror</button>
        <button onClick={handleFiltersChange} name="genres" value="Romance">Romance</button>
        <button onClick={handleFiltersChange} name="genres" value="Espionage">Espionage</button>
        <button onClick={handleFiltersChange} name="genres" value="Music">Music</button>
        <button onClick={handleFiltersChange} name="genres" value="Mystery">Mystery</button>
        <button onClick={handleFiltersChange} name="genres" value="Fantasy">Fantasy</button>
        <button onClick={handleFiltersChange} name="genres" value="Family">Family</button>
        <button onClick={handleFiltersChange} name="genres" value="Adventure">Adventure</button>
        <button onClick={handleFiltersChange} name="genres" value="Drama">Science-Fiction</button>
        <button onClick={handleFiltersChange} name="genres" value="Supernatural">Supernatural</button>
      </div>
    </Container>
  )
}

export default Filter 
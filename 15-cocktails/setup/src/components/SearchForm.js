import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef(null)

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchCocktail = () =>
    setSearchTerm(searchValue.current.value)


  const handleSubmit = e =>
    e.preventDefault()


  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor="name">
            Search cocktail
          </label>
          <input type="text" id="name" placeholder="enter value"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}


export default SearchForm

import { useState } from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchQuery } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchQuery(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}
export default SearchForm

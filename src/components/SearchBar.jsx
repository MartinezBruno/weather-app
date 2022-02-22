import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  function handleOnSearch(event) {
    event.preventDefault()
    if (typeof onSearch === 'function') {
      const input = document.getElementById('search-bar-input')
      onSearch(input.value)
<<<<<<< Updated upstream
      input.value =""
=======
      input.value = ''
>>>>>>> Stashed changes
    }
  }

  return (
    <form className={styles.searchBar} onSubmit={handleOnSearch}>
      <input placeholder="Agrega una nueva ciudad..." id="search-bar-input" />
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  )
}

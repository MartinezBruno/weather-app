import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

import styles from './SearchBar.module.css'

export default function SearchBar({ cities, onSearch }) {
  // acá va tu código
  function handleOnSearch(event) {
    event.preventDefault()
    if (typeof onSearch === 'function') {
      const input = document.getElementById('search-bar-input')
      if (cities.find(({ name }) => name === input.value)) alert('La ciudad ya se encuentra en la lista')
      else onSearch(input.value)
      input.value = ''
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

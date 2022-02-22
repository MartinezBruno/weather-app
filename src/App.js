import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  const [cities, setCities] = useState([])
  const apiKey = process.env.react_app_apiKey

  function handleAddCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities]
    })
  }
  function handleRemoveCity(cityId) {
    setCities((prevCities) => prevCities.filter((city) => cityId !== city.id))
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          }
          handleAddCity(ciudad)
        } else {
          alert('Ciudad no encontrada')
        }
      })
  }

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Cards cities={cities} onClose={handleRemoveCity} />
    </div>
  )
}

export default App

import React from 'react'
import Card from './Card'
import styles from './Cards.module.css'

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={styles.cards}>
        {cities.map((city) => (
          <Card
            key={city.id}
            min={city.min}
            max={city.max}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        ))}
      </div>
    )
  } else return <div>No hay nada pa</div>
}

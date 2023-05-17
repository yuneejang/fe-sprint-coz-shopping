import React from 'react'

// export default function FilterButton({ item, handleClick }) {
export default function FilterButton(filterIcon) {
  return (
    <div  key={filterIcon.id} >
      <img className="filter-icon" src={filterIcon.img} alt={filterIcon.name}></img>
      <div className="filter-text">{filterIcon.name}</div>
    </div>
  )
}


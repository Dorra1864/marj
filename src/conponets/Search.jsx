import React from 'react'

export default function Search({onSearchChange}) {
  return (
    <div className="mb-3">
      <input
      type="text"
      placeholder="search ball..."
      onChange={(e) => onSearchChange(e.target.value)}/>
    

    </div>
  )
}

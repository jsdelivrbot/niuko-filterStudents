import React from 'react'

const FilterBar = ({value, onFilter}) => {

  return (
    <div style={{textAlign: 'center', margin: 20}}>
      <input placeholder={'type to filter'} value={value} onChange={(event) => {
        onFilter(event.target.value)
      }}/>
    </div>
  )
}

export default FilterBar

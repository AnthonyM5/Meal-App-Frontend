import React from 'react'

const FoodCard = (props) => {
    const {id, name} = props
    console.log(name)
    return (
      
      <div className="card">
        {name}
      </div>
    )
}

export default FoodCard
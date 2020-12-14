import React from 'react'

const FoodCard = (props) => {
    const { food } = props
  
    // console.log(id)
    return (
      <div className="card">
          {food.name}
      </div>
    )
}

export default FoodCard
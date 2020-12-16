import React from 'react'
import { Link } from 'react-router-dom'


const FoodCard = (props) => {
    const {id, name} = props
    // console.log(id)
    return (
      
      <div className="card">
        <p><Link to={`/foods/${id}`}>{name}</Link></p>
      </div>
    )
}

export default FoodCard
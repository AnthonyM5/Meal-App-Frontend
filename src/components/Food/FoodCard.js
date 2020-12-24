import React from 'react'
import { Link } from 'react-router-dom'


const FoodCard = (props) => {
    const {id, name} = props
    // console.log(props)
    return (
      
      <div className="card" style={{backgroundColor: "turquoise"}}>
        <p><Link to={`/foods/${id}`}>{name}</Link></p>
      </div>
    )
}

export default FoodCard
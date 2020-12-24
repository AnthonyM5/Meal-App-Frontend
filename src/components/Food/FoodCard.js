import React from 'react'
import { Link } from 'react-router-dom'


const FoodCard = (props) => {
    const {id, name} = props
    // console.log(props)
    return (
      
      <div className="card" style={{backgroundColor: "turquoise"}}>
        <h5 class="card-title"><Link to={`/foods/${id}`}>{name}</Link></h5>
      </div>
    )
}

export default FoodCard
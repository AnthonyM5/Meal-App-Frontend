import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const {id, name} = props
  // console.log(props)
  return (
    
    <div className="card" style={{backgroundColor: "turquoise", width: "18rem;"}} >
      <h5 class="card-title"><Link to={`/meals/${id}`}>{name}</Link></h5>
    </div>
  )
}

export default Meal
import React from 'react'
import { Link } from 'react-router-dom'


const FoodCard = (props) => {
    const {id, name, mealId} = props
    return (
      <>
      <div className="card" style={{backgroundColor: "turquoise"}}>
        <h5 className="card-title"><Link to={
          { pathname: `/foods/${id}`,
            state: {mealId}
          }
        }>{name}</Link></h5>
      </div>
      </>
    )
}

export default FoodCard
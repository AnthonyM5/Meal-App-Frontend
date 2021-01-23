import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const FoodCard = (props) => {
    const {id, name, mealId, calories} = props
    // console.log(props)
    return (
      <>
          <Card>
          <Card.Header>{name}</Card.Header>
          <Card.Text>
          Food ID: {id}
          <br></br>
          Calorie Count: {calories}
    </Card.Text>
       <Link to={
          { pathname: `/foods/${id}`,
            state: {mealId}
          }
        }>More Details</Link>
          </Card>
     
      </>
    )
}

export default FoodCard
import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const FoodCard = (props) => {
    const {id, name, mealId} = props
    // console.log(props)
    return (
      <>
          <Card>
          <Card.Header>{id}</Card.Header>
          <Card.Text>
      {name}
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
import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import mealDefault from '../../mealDefault.svg';

const Meal = (props) => {
  const {id, name, imgUrl} = props

  // console.log(props.ingredients.length)
  
  return (
    <Card style={{display: 'flex' }}>
       <Card.Img variant="top" src={imgUrl ?  imgUrl : mealDefault } />
          <Card.Header>ID: {id} </Card.Header>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            <p>Number of Ingredients: {props.ingredients.length} </p>
            <Link to={`/meals/${id}`}>See More</Link>
            </Card.Text>
    </Card>
  )
}

export default Meal
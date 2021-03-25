import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import mealDefault from '../../mealDefault.svg';

const Meal = (props) => {
  const {id, name, imgUrl, ingredients, calorieCount} = props
  const myStyle = {
    height: '50%', 
    width: 'auto', 
    objectFit: 'contain' 
  }

  
  return (
    <Card style={{ height: '18rem' }}>
      <Card.Img variant="top" src={imgUrl ?  imgUrl : mealDefault } style={myStyle}/>
          <Card.Header>ID: {id} </Card.Header>
          <Card.Title><Link to={`/meals/${id}`}>{name}</Link></Card.Title>
          <Card.Text>
          <h6>Number of Ingredients: {ingredients.length}</h6>
          <h6>Total Calorie Count: {calorieCount}</h6> 
          </Card.Text>
    </Card>
  )
}

export default Meal
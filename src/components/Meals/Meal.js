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

  // console.log(props)
  return (
    <Card style={{ height: '18rem' }}>
      <Card.Img variant="top" src={imgUrl ?  imgUrl : mealDefault } style={myStyle}/>
          <Card.Header>ID: {id} </Card.Header>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
          <div className="ingredients"> Number of Ingredients: {ingredients.length} </div>
          <div className="calories">Total Calorie Count: {calorieCount}</div>
            </Card.Text>
            <Link to={`/meals/${id}`}>See More</Link>
    </Card>
  )
}

export default Meal
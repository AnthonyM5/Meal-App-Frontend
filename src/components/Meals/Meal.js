import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import mealDefault from '../../mealDefault.svg';

const Meal = (props) => {
  const {id, name, img_url} = props

  
  
  return (
    <Card style={{display: 'flex' }}>
       <Card.Img variant="top" src={img_url ?  img_url : mealDefault } />
          <Card.Header>ID: {id} </Card.Header>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text><Link to={`/meals/${id}`}>See More</Link></Card.Text>
    </Card>
  )
}

export default Meal
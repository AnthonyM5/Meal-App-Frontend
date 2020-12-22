import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const {id, name} = props
  // console.log(props)
  return (
    
    <div className="card">
      <p><Link to={`/meals/${id}`}>{name}</Link></p>
    </div>
  )
}

export default Meal
import React from 'react';
import { Link } from 'react-router-dom';

 function AutopartsList(props) {
  console.log(props)
  return (
    <div>
      {props.autoparts && props.autoparts.map(autopart => (
        <div key={autopart.id}>
          <Link to={`/autoparts/${autopart.id}`}><h3>{autopart.name}</h3></Link>
        </div>
      ))}
      <Link to="/autoparts/new"><button>Add a part</button></Link>
    </div>
  )
 }

 export default AutopartsList

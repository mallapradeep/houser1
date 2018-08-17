import React from 'react';


export default function House(props)  {
  return (
    <div>
      House
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      
      <button onClick={() => props.deleteHouse(props.id) }>Delete</button>
    </div>
  )
}
      
      
      


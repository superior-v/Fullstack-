import React from 'react'
import './Compo.css'
const Compo = (props) => { 
  return (
    <div>
      <h1>
         Hello broskies {props.name} </h1> <h2>age is{props.age}</h2>
        <h2> from dept of{props.department}</h2>
    
        <h1>
         Hello broskies {props.name2} </h1> <h2>age is{props.age2}</h2>
        <h2> from dept of{props.department2}</h2>
    </div>
  )
}

export default Compo
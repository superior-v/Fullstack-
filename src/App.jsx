import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Compo from './Compo';
import './App.css'

function App() {
  alert ("Vanakom");
  const name ={
    name:"Manoj",
    age:19,
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
};
console.log("age="+name.age);

return (
  <div style={containerStyle}>
    <div className='a'>
      <p style={{ fontSize: '50px', color: 'WHITE' }}>
          <h1>name:{name.name}</h1>
      </p>
      <button onClick={App}>Click Me</button>
     <button onClick={name}>Click Here</button>
     <button onClick={()=>console.log("Nandri Vanakom")}>Mudinja thodu</button>
    </div>
<div>
      <Compo  name="Manoj" age="18" department="M.tech" name2="JK" age2="19" department2="M.tech" />
</div>

  </div>
  )
}


export default App

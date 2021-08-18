import React, {useState, useRef} from 'react'
import useRandomJoke from '../useRandomJoke'

function Joke() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

 //Custom Hook 
 const joke = useRandomJoke(firstName, lastName);


 //Generate Joke
 const generateJoke = (e) => {
   e.preventDefault();
   setFirstName(firstNameRef.current.value);
   setLastName(lastNameRef.current.value)
 }

  return (
    <div>
      <h1>The Joke Generator</h1>
      <form>
      <input 
      ref = {firstNameRef}
      placeholder = 'First Name' />

      <input 
      ref = {lastNameRef}
      placeholder = 'Last Name' />

      <button onClick = {generateJoke} >Generate Joke</button>

      </form>


      
        <h2>{joke}</h2>
      
      
    </div>
  )
}

export default Joke

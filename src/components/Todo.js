import React, {useState} from 'react'

function Todo() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

const addTodo = (e) => {
  e.preventDefault();
  //add input value to state
  setTodos([...todos, input])
  //reset input
  setInput("")
}

  return (
    <div>
       <form>
         <input
         value = {input}
         onChange = {(e) => setInput(e.target.value)}
          type="text" />
         <button type = 'submit' onClick = {addTodo}>Add Todo</button>
       </form>



       <h2>List of todos</h2>
       {todos.map((todo) => (
          <p>{todo}</p>
       ))}
    </div>
  )
}

export default Todo

import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input == "") {
      alert("akteb");
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (i) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a to-do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => removeTodo(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

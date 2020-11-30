import React from "react";
import { useSelector } from "react-redux";

import './App.css';

import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

function App() {
  const todos = useSelector(store => store);

  return (
    <div className="App">
      <header className="App-header">
        React &#47; Redux Todos
      </header>
      <TodoForm />
      <section id="todoContainer">
        {
          todos.map(function (todo) {
            return (<Todo key={todo.key} id={todo.key} text={todo.text} complete={todo.complete} />);
          })
        }
      </section>
    </div>
  );
}

export default App;

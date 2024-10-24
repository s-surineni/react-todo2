import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoValue from './components/TodoValue/TodoValue';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      {todos.map(todo => <TodoValue key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
      <AddTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
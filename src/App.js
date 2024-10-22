import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoValue from './components/TodoValue/TodoValue';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["do this1", "do this2", "do this3"]);
  return (
    <>
      {todos.map(todo => <TodoValue todo={todo} />)}
      <AddTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
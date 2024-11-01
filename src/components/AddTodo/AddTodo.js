import { useState } from 'react';
import './AddTodo.css';

const  AddTodo = ({todos, setTodos}) => {
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!newTodo.trim()) return;
        setTodos([...todos, {value: newTodo.trim(), id: crypto.randomUUID(), completed: false}]);
        setNewTodo("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="new-todo-label" htmlFor="new-todo">Add todo</label>
            </div>
            <input id="new-todo"
                className='new-todo-input'
                type="text"
                placeholder='Add new todo'
                value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button className='add-button'>+</button>
        </form>
    )
}

export default AddTodo;
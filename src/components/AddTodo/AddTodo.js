import { useState } from 'react';

const  AddTodo = ({todos, setTodos}) => {
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        setTodos([...todos, {value: newTodo, id: crypto.randomUUID(), completed: false}]);
        setNewTodo("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Add todo</label>
            <input id="new-todo" type="text"
                value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default AddTodo;
import { useState } from 'react';
import './AddTodo.css';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/actions/todoActions';

const  AddTodo = () => {
    const dispatch = useDispatch();
    // const todos = useSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if(!newTodo.trim()) return;
        // setTodos([...todos, {value: newTodo.trim(), id: crypto.randomUUID(), completed: false}]);
        dispatch(createTodo({value: newTodo.trim(), id: crypto.randomUUID(), completed: false}));
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
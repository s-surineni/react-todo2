import './TodoValues.css';
import { useDispatch } from 'react-redux';
import { toggleCompleted } from '../../redux/actions/todoActions';

const TodoValue = ({todo}) => {
    const dispatch = useDispatch();

    return (
        <div className='todo-item'>
            <input type="checkbox" onChange={() => dispatch(toggleCompleted(todo))} />

            <div className={`todo-text ${todo.completed ? "completed" : ''}`}>{todo.value}</div>
            <button className='delete-todo'>x</button>
        </div>
    )
}

export default TodoValue;
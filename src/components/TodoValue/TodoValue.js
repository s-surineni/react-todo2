import './TodoValues.css';
const TodoValue = ({todo, todos, setTodos}) => {
    const markCompleted = () => {
        setTodos(todos.map(t => {
            if (t.id === todo.id) {
                return {...t, completed: !t.completed}
            }
            return t
        }))
    }
    return (
        <div className='todo-item'>
            <input type="checkbox" onClick={() => markCompleted()} />
            <span className={todo.completed ? "completed" : ''}>{todo.value}</span>
            <button>Delete</button>
        </div>
    )
}

export default TodoValue;
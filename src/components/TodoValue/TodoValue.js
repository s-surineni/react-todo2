import './TodoValues.css';
const TodoValue = ({todo}) => {
    // const markCompleted = () => {
    //     setTodos(todos.map(t => {
    //         if (t.id === todo.id) {
    //             return {...t, completed: !t.completed}
    //         }
    //         return t
    //     }))
    // }
    return (
        <div className='todo-item'>
            {/* <input type="checkbox" onChange={() => markCompleted()} /> */}
            <input type="checkbox" />

            <div className={`todo-text ${todo.completed ? "completed" : ''}`}>{todo.value}</div>
            <button className='delete-todo'>x</button>
        </div>
    )
}

export default TodoValue;
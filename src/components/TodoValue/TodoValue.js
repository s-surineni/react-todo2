const TodoValue = ({todo}) => {
    return (
        <div>
            <span>{todo}</span>
            <button>Done</button>
            <button>Delete</button>
        </div>
    )
}

export default TodoValue;
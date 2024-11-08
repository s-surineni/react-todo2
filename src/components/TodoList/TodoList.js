import { useSelector } from 'react-redux';
import TodoValue from '../TodoValue/TodoValue';

export default function TodoList() {
    const todos = useSelector(state => state.todos);

    return (
    <>
        {todos.map(todo => <TodoValue key={todo.id} todo={todo} todos={todos} />)}
    </>
    )
}
import { useSelector } from 'react-redux';
import TodoValue from '../TodoValue/TodoValue';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodos } from '../../redux/actions/todoActions';


export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    useEffect(() => {
        dispatch(loadTodos()).catch(err => alert(err));
    })
    return (
    <>
        {todos.map(todo => <TodoValue key={todo.id} todo={todo} todos={todos} />)}
    </>
    )
}
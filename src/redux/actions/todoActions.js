import * as todoApi from "../../api/todoApi";

export function createTodo(todo) {
    return {
        type: "CREATE_TODO",
        todo
    }
}

export function toggleCompleted(todo) {
    return {
        type: "TOGGLE_COMPLETED",
        todo
    }
}

export function loadTodosSuccess(todos) {
    return {
        type: "LOAD_TODOS_SUCCESS",
        todos
    }
}

export function loadTodos() {
    return function(dispatch) {
        return todoApi.getTodos().then(todos => {
            dispatch(loadTodosSuccess(todos))
        })
    }
}
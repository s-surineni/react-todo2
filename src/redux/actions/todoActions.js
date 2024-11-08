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
export default function todoReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_TODO":
            // is there a need to compy action.todo?
            return [...state, {...action.todo}]
        case "TOGGLE_COMPLETED":
            return state.map(t => {
                if (t.id === action.todo.id) {
                    return {...t, completed: !t.completed}
                }
                return t
        })
        default:
            return state
    }
}
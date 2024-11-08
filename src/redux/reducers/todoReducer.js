export default function todoReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_TODO":
            // is there a need to compy action.todo?
            return [...state, {...action.todo}]
        default:
            return state
    }
}
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                done: false
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        editTodo: (state, action) => {
            const { id, text } = action.payload
            const todoExists = state.todos.find((todo) => todo.id === id)
            if (todoExists) {
                todoExists.text = text
            }
        },
        markAsDone: (state, action) => {
            const { id } = action.payload
            const todoToMarkDone = state.todos.find((todo) => todo.id === id)
            if (todoToMarkDone) {
                todoToMarkDone.done = true
            }
        }
    }
})

export const { addTodo, deleteTodo, editTodo, markAsDone } = todoSlice.actions
export default todoSlice.reducer
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
                text: action.payload
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
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions
export default todoSlice.reducer
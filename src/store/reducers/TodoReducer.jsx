import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todosSlice = createSlice({
    name: "todosSlice",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: action.payload.id,
                todo: action.payload.item,
            });
        },
        removeTodo: (state, action) => {
            const newTodos = state.todos.filter(
                (todo) => todo.id != action.payload
            );
            state.todos = newTodos;
        },
    },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo } = todosSlice.actions;

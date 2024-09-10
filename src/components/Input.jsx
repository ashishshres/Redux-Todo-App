import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/reducers/TodoReducer";
import { nanoid } from "nanoid";

const Input = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = () => {
        if (todo.trim()) {
            const newTodo = {
                id: nanoid(),
                item: todo,
            };

            dispatch(addTodo(newTodo));
            setTodo("");
        }
    };

    return (
        <div className="flex gap-2 flex-wrap w-full">
            <input
                type="text"
                name="todo"
                id="todo"
                className="bg-zinc-700 px-3 py-1 rounded-md flex-grow"
                placeholder="Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                autoComplete="off"
            />
            <button
                onClick={addTodoHandler}
                className="bg-blue-600 px-4 py-1 rounded-md w-full md:w-auto"
            >
                Add Todo
            </button>
        </div>
    );
};

export default Input;

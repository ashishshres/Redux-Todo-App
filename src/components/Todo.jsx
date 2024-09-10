import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/reducers/TodoReducer";

const Todo = ({ todos }) => {
    const dispatch = useDispatch();
    const handleRemove = (removeId) => {
        dispatch(removeTodo(removeId));
    };

    return (
        <li className="flex justify-between px-3 py-2 bg-zinc-700 rounded-md">
            <span>{todos.todo}</span>
            <span
                onClick={() => handleRemove(todos.id)}
                className="cursor-pointer"
            >
                ❌
            </span>
        </li>
    );
};

export default Todo;

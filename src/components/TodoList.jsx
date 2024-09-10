import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
    const { todos } = useSelector((state) => state.TodoReducer);
    console.log(todos);
    return (
        <div className="w-full">
            {todos.length > 0 ? (
                <h2 className="text-lg font-medium mb-2">Todos</h2>
            ) : (
                <h2 className="text-lg font-medium mb-2">No todos added</h2>
            )}
            <ul className="flex flex-col gap-2">
                {todos.map((todo) => (
                    <Todo key={todo.id} todos={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

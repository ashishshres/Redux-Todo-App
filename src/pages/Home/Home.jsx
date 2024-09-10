import React from "react";
import Input from "../../components/Input";
import TodoList from "../../components/TodoList";

const Home = () => {
    return (
        <div className="flex items-center flex-col gap-4 p-4 w-96 mx-auto">
            <h1 className="text-4xl font-medium">Redux Todo</h1>
            <Input />
            <TodoList />
        </div>
    );
};

export default Home;

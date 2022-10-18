import "./App.css";
import React, { useState } from "react";
import "@fontsource/lato";
import InputField from "./component/InputField";
import { Todo } from "./component/model";
import TodoList from "./component/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  // console.log(todos);

  return (
    <>
      <div className="bg-headerColor p-6 w-screen h-full text-2xl text-center text-textColor">
        Typescript Todo
      </div>
      <div className=" w-full px-3 md:w-2/4 m-0 mx-auto ">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;

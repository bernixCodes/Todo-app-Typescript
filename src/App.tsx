import "./App.css";
import React, { useState } from "react";
import "@fontsource/lato";
import InputField from "./component/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <>
      <div className="bg-headerColor p-6 w-screen h-full text-2xl text-center text-textColor">
        Typescript Todo
      </div>
      <div className="w-2/4 m-0 mx-auto">
        <InputField todo={todo} setTodo={setTodo} />
      </div>
    </>
  );
};

export default App;

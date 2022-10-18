import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="flex items-center justify-center p-4 my-6 bg-btnBgColor rounded-full">
      <input
        type="text"
        placeholder="Enter Todo"
        className="outline-none px-6 w-full  bg-transparent caret-textColor placeholder:text-textColor text-headerColor"
      />
      <button className="bg-btnColor px-3 p-1 rounded-full text-textColor">
        Go
      </button>
    </form>
  );
};

export default InputField;

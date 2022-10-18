import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "./model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Card = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="flex items-center justify-between w-full mx-5  md:w-1/3 p-4 my-2 text-white bg-btnColor">
      <span className="flex-1">{todo.todo}</span>
      <div className="flex gap-2">
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Card;

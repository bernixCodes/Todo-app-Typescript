import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "./model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Card = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex items-center justify-between w-full mx-5  md:w-1/3 p-4 my-2 text-white bg-btnColor"
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="outline-none bg-transparent"
        />
      ) : todo.isDone ? (
        <span className="flex-1 line-through">{todo.todo}</span>
      ) : (
        <span className="flex-1">{todo.todo}</span>
      )}

      <div className="flex gap-2 text-lg cursor-pointer">
        <span onClick={() => !edit && !todo.isDone && setEdit(!edit)}>
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default Card;

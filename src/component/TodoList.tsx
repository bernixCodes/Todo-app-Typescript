import React from "react";
import Card from "./Card";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;

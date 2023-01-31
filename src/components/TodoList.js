import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  if (todo) {
    console.log(todo);
  }

  const deleteTodo = (id) => {
    const deleteItem = todo.filter((todo) => todo.id !== id);
    setTodo(deleteItem);
  };

  return (
    <div className=" border-[1px] border-gray-300 shadow-xl px-4 py-4 font-medium w-[450px] mx-auto rounded-md ">
      <NewTodo setTodo={setTodo} todo={todo}></NewTodo>

      <div className=" divider"></div>

      <div className="rounded-md p-2 w-96 mx-auto  ">
        {todo?.map((todo) => (
          <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

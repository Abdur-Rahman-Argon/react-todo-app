import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="  shadow-xl border-[1px] rounded-lg py-3 px-3 border-gray-100 my-5">
      <div className="flex justify-between  items-center gap-2  p-1 flex-1">
        <h1 className="my-2 text-lg font-semibold">{todo.taskName}</h1>

        <button
          onClick={() => deleteTodo(todo.id)}
          className=" w-24  py-1 px-1 bg-red-600 rounded-md text-white"
        >
          Delete
        </button>
      </div>

      <div className=" text-left">
        <p className="text-sm font-normal">{todo.description}</p>
      </div>
    </div>
  );
};

export default Todo;

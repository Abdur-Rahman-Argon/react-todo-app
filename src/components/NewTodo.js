import React, { useState } from "react";
import { useForm } from "react-hook-form";

const NewTodo = ({ setTodo, todo }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const taskName = data.name;
    const description = data.description;
    const id = todo.length + 1;
    const todoList = { id, taskName, description };
    const newTodo = [...todo, todoList];
    setTodo(newTodo);
    reset();
  };
  return (
    <div className="  rounded-md w-96 mx-auto px-5  text-left">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="name">Task Title: </label>
          <br />
          <input
            {...register("name")}
            className="border-2 rounded-md p-2 w-full  focus:outline-none"
            placeholder="Task Name"
            required
          />
        </div>
        <br />
        <div>
          <label for="description">Description: </label>
          <br />
          <textarea
            {...register("description")}
            cols="30"
            rows="5"
            className="border-2 rounded-md p-2 w-full focus:outline-none"
            placeholder="Description"
            required
          />
        </div>
        <br />
        <input
          type="submit"
          className="rounded-md cursor-pointer bg-lime-200 py-2  w-full my-1"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default NewTodo;

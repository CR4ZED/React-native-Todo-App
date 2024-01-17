import React, { useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const Todo = () => {
  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { todos: [action.data, ...state.todos] };
      case "UPDATE":
        const idx = state.todos.findIndex(({ id }) => id == action.data.id);
        const todos = state.todos;
        todos[idx].title = action.data.title;
        return { todos };
      case "REMOVE":
        return { todos: state.todos.filter(({ id }) => id != action.data) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  const onClickAdd = (item) => {
    return () => dispatch({ type: "ADD", data: item });
  };

  const onClickRemove = (id) => {
    return () => dispatch({ type: "REMOVE", data: id });
  };

  const onClickUpdate = (todo) => {
    return () => dispatch({ type: "UPDATE", data: todo });
  };

  return (
    <>
      <TodoInput onClickAdd={onClickAdd} />
      <TodoList todos={state.todos} onClickRemove={onClickRemove} onClickUpdate={onClickUpdate}/>
    </>
  );
};

export default Todo;

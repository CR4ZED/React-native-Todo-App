import { ScrollView } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, onClickRemove, onClickUpdate }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 35 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickRemove={onClickRemove}
          onClickUpdate={onClickUpdate}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
